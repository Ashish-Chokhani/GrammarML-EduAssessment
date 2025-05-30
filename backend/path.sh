export KALDI_ROOT=/home/ishitbansal/Semester-7/BTP-2/demo-code/kaldi
export PATH=$PWD/utils/:$KALDI_ROOT/tools/openfst/bin:$PWD:$PATH
[ ! -f $KALDI_ROOT/tools/config/common_path.sh ] && echo >&2 "The standard file $KALDI_ROOT/tools/config/common_path.sh is not present -> Exit!" && exit 1
. $KALDI_ROOT/tools/config/common_path.sh
export LC_ALL=C

# we use this both in the (optional) LM training and the G2P-related scripts
PYTHON='python2.7'

### Below are the paths used by the optional parts of the recipe

# We only need the Festival stuff below for the optional text https://github.com/kaldi-asr/kaldi.gitnormalization(for LM-training) step
FEST_ROOT=tools/festival
NSW_PATH=${FEST_ROOT}/festival/bin:${FEST_ROOT}/nsw/bin
export PATH=$PATH:$NSW_PATH

# SRILM is needed for LM model building
SRILM_ROOT=$KALDI_ROOT/tools/srilm
SRILM_PATH=$SRILM_ROOT/bin:$SRILM_ROOT/bin/i686-m64
export PATH=$PATH:$SRILM_PATH

# Sequitur G2P executable
sequitur=$KALDI_ROOT/tools/sequitur-g2p/g2p.py
sequitur_path="$(dirname $sequitur)/lib/$PYTHON/site-packages"

# Directory under which the LM training corpus should be extracted
LM_CORPUS_ROOT=./lm-corpus
export PYTHONUNBUFFERED=1

export PATH=/home/ishitbansal/Semester-7/BTP-2/demo-code/kaldi/tools/python:${PATH}
export LIBLBFGS=/home/ishitbansal/Semester-7/BTP-2/demo-code/kaldi/tools/liblbfgs-1.10
export LD_LIBRARY_PATH=${LD_LIBRARY_PATH:-}:${LIBLBFGS}/lib/.libs
export SRILM=/home/ishitbansal/Semester-7/BTP-2/demo-code/kaldi/tools/srilm
export PATH=${PATH}:${SRILM}/bin:${SRILM}/bin/i686-m64
