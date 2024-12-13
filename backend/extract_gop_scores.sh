#!/bin/bash
# clear
#set-up for single machine or cluster based execution
. ./cmd.sh
#set the paths to binaries and other executables
[ -f path.sh ] && . ./path.sh
. ./utils/parse_options.sh

train_cmd=run.pl
decode_cmd=run.pl
expdir=exp_libri_pretrained
dumpdir=dump
test_lang_dir=data/lang_test_tgmed
nnet3_affix=_cleaned
affix=1d
dir=$expdir/chain${nnet3_affix}/tdnn${affix:+_$affix}_sp
scale_opts="--transition-scale=1.0 --acoustic-scale=1.0 --self-loop-scale=1.0"
Source_Dir="/home1/data/Kumar/gyani/dataset/subjects_renamed"

data_folder=data
datadir='data_temp'
mfccdir="$dumpdir/mfcc_$data_folder"


rm $data_folder/.error 2>/dev/null || true

mkdir -p  ${data_folder}/${datadir}


echo ==================================================================
echo ==================== Utterance started ===========================

utils/fix_data_dir.sh ${data_folder}/$datadir
utils/copy_data_dir.sh ${data_folder}/$datadir ${data_folder}/${datadir}_hires

# Extracting MFCCs and CMVNs
steps/make_mfcc.sh --nj 1 --mfcc-config conf/mfcc_hires.conf  --cmd "$train_cmd" \
    ${data_folder}/${datadir}_hires $expdir/make_mfcc/${datadir}_hires $mfccdir/${datadir}_hires || exit 1;

utils/fix_data_dir.sh ${data_folder}/${datadir}_hires

steps/compute_cmvn_stats.sh ${data_folder}/${datadir}_hires $expdir/make_mfcc/${datadir}_hires \
    $mfccdir/${datadir}_hires || exit 1;

# Extracting ivectors
steps/online/nnet2/extract_ivectors_online.sh --cmd "$train_cmd" --nj 1 \
    ${data_folder}/${datadir}_hires $expdir/nnet3${nnet3_affix}/extractor $expdir/nnet3${nnet3_affix}/ivectors_${datadir}_hires || exit 1;

# Generating alignments
steps/nnet3/align.sh --nj 1 --use_gpu "false" --scale-opts "$scale_opts" \
--online_ivector_dir $expdir/nnet3${nnet3_affix}/ivectors_${datadir}_hires --cmd "$train_cmd" \
        $data_folder/${datadir}_hires $test_lang_dir $dir force_align_$datadir || exit 1;

show-alignments $test_lang_dir/phones.txt $dir/final.mdl "ark:gunzip -c force_align_$datadir/ali.1.gz|" > Goodness-of-Pronunciation/reqd_files/test.txt


# Generating posteriors
nnet3-compute --use-gpu="no" --online-ivectors="scp:$expdir/nnet3${nnet3_affix}/ivectors_${datadir}_hires/ivector_online.scp" --online-ivector-period="10" \
            $dir/final.mdl \
            scp:${data_folder}/${datadir}_hires/feats.scp ark,t:Goodness-of-Pronunciation/reqd_files/test.ark


cd Goodness-of-Pronunciation
python3 prop_gop_eqn.py test.ark test.txt GoP_scores.txt test
rm reqd_files/test* 
cd ../

# Removing data,mfcc and ivector folders
rm -r ${data_folder}/$datadir ${data_folder}/${datadir}_hires
rm -r $expdir/nnet3${nnet3_affix}/ivectors_${datadir}_hires $mfccdir/${datadir}_hires
# rm -r $expdir/make_mfcc/${datadir}_hires $mfccdir/${datadir}_hires
echo ================================================================
echo ==================== Utterance completed =======================

    

wait
if [ -f $data_folder/.error ]; then
echo "$0: something went wrong."
exit 1
fi
