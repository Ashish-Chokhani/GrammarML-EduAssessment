# from pydantic import BaseModel
# import os
# import pickle
# import numpy as np
# from fastapi import FastAPI, File, Form, UploadFile
# from fastapi.middleware.cors import CORSMiddleware
# from fastapi.responses import JSONResponse
# from datetime import datetime
# import os
# import logging


# with open('id_to_sent.pkl', 'rb') as f:
#     id_to_sent = pickle.load(f)

# with open('answers.pkl','rb') as f:
#     answers = pickle.load(f)

# with open('libri_lexicon.pkl',"rb") as pickle_file:
#     dict_lexicon = pickle.load(pickle_file)


# def create_data_folder(audio_path, qid, id_to_sent, data_dir='data/data_temp'):
#     os.makedirs(data_dir, exist_ok=True)

#     with open(data_dir+'/wav.scp','w',encoding='utf8') as f:
#         f.write('temp cat '+audio_path+' | /usr/bin/sox -t wav - -c 1 -b 16 -t wav - rate 16000 |\n')

#     with open(data_dir+'/text','w',encoding='utf8') as f:
#         f.write('temp '+id_to_sent[qid]+'\n')

#     with open(data_dir+'/utt2spk','w',encoding='utf8') as f:
#         f.write('temp temp\n')

#     with open(data_dir+'/spk2utt','w',encoding='utf8') as f:
#         f.write('temp temp\n')

# def extract_gop_scores():
#     os.system('./extract_gop_scores.sh')

# # Here is the code for generating word-level GoP scores
# def extract_word_gops(file_path):
#    word_gops = []
#    with open(file_path,'r',encoding='utf8') as f:
#        gops_temp = []
#        for idx,line in enumerate(f.readlines()):
#            phone, gop_score = line.strip().split()
#            gop_score = float(gop_score)
#            if phone == 'SIL':
#                if len(gops_temp) != 0:
#                    word_gops.append(sum(gops_temp)/len(gops_temp))
#                    gops_temp = []
#            elif 'SPN' in phone:
#                if len(gops_temp) != 0:
#                    word_gops.append(sum(gops_temp)/len(gops_temp))
#                    gops_temp = []
#                word_gops.append(gop_score)
#            else:
#                if (phone.split("_")[-1] == 'B' or idx == len(f.readlines())-1) and len(gops_temp) != 0:
#                    word_gops.append(sum(gops_temp)/len(gops_temp))
#                    gops_temp = []
#                gops_temp.append(gop_score)
#    return word_gops
# ## This function retrn gop scores of words as list. Use this function instead of `validate_answer()` function when dedling with jumbled case. I tried to integrate all the logics for obtaining word-leve gops. Let me know if you face any issues/corner cases which I didn't look.


# def validate_answer(gop_file_path,target_word,dict_lexicon):
#     gop_file = open(gop_file_path)
#     gop_file = gop_file.readlines()

#     phones = []
#     phn_gop_scores = []
#     for line in gop_file:
#         l = line.split()
#         l[0] = l[0].split("_")[0]
#         if l[0] == "SIL":
#             continue
#         if l[0][-1].isdigit():
#             l[0] = l[0][:-1]
#         phones.append(l[0])
#         phn_gop_scores.append(float(l[1]))

#     print("Phones:", phones)
#     print("GOP Scores:", phn_gop_scores)

#     print(dict_lexicon[target_word],target_word)
#     for j in dict_lexicon[target_word]:
#         phn_indices = [ind for ind,val in enumerate(phones) if val==j[0]]
#         for k in range(0,len(phn_indices)):
#             if j == phones[phn_indices[k]:phn_indices[k]+len(j)]:
#                 return np.mean(phn_gop_scores[phn_indices[k]:phn_indices[k]+len(j)])
#     # return 0

# class LoginRequest(BaseModel):
#     password: str

# logging.basicConfig(level=logging.INFO)

# app = FastAPI()

# # Configure CORS
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Define the routes
# @app.post("/api/login")
# def login(request: LoginRequest):
#     if request.password == "123":
#         return {"authenticated": True}
#     else:
#         return {"authenticated": False}

# import subprocess
# import logging


# @app.post("/api/upload-audio")
# async def upload_audio(audio: UploadFile = File(...), specialId: str = Form(...)):
#     try:
#         os.makedirs("uploaded_audio", exist_ok=True)

#         # Add timestamps and special ID to the file name
#         timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
#         filename = f"{specialId}_{timestamp}_{audio.filename}"
#         file_path = f"uploaded_audio/{filename}"

#         # Save the uploaded audio file to a specific location
#         with open(file_path, "wb") as file_object:
#             file_object.write(await audio.read())

#         # Run ffmpeg command to convert opus to wav format
#         ffmpeg_command = f"ffmpeg -i uploaded_audio/{filename} uploaded_audio/{filename[:-5]}.wav"
#         os.system(ffmpeg_command)

#         print("Special ID:", specialId)
#         print("Filename:", filename)

#         # Validating answer
#         audio_path = f"uploaded_audio/{filename[:-5]}.wav"
#         data_dir = 'data/data_temp'
#         gop_file_path = 'Goodness-of-Pronunciation/GoP_scores.txt'
#         target_word = answers[specialId]
#         create_data_folder(audio_path, specialId, id_to_sent)
#         extract_gop_scores()
#         blank_gop = validate_answer(gop_file_path,target_word,dict_lexicon)
#         print(blank_gop)
#         if blank_gop >= 8.5:
#             print('Correct')
#             return JSONResponse(content={"message": "Correct"}, status_code=200)
#         else:
#             print("Wrong")
#             return JSONResponse(content={"message": "Wrong"}, status_code=200)

#     except Exception as e:
#         return JSONResponse(content={"error": str(e)}, status_code=500)


# @app.post("/api/upload-audio2")
# async def upload_audio(audio: UploadFile = File(...), specialId: str = Form(...)):
#     try:
#         os.makedirs("uploaded_audio", exist_ok=True)
#         print("hello")
#         print(id_to_sent)

#         # Add timestamps and special ID to the file name
#         timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
#         filename = f"{specialId}_{timestamp}_{audio.filename}"
#         file_path = f"uploaded_audio/{filename}"

#         # Save the uploaded audio file to a specific location
#         with open(file_path, "wb") as file_object:
#             file_object.write(await audio.read())

#         # Run ffmpeg command to convert opus to wav format
#         ffmpeg_command = f"ffmpeg -i uploaded_audio/{filename} uploaded_audio/{filename[:-5]}.wav"
#         os.system(ffmpeg_command)

#         print("Special ID:", specialId)
#         print("Filename:", filename)

#         # Validating answer
#         audio_path = f"uploaded_audio/{filename[:-5]}.wav"
#         data_dir = 'data/data_temp'
#         gop_file_path = 'Goodness-of-Pronunciation/GoP_scores.txt'
#         target_word = answers[specialId]
#         create_data_folder(audio_path, specialId, id_to_sent)
#         extract_gop_scores()
#         blank_gops = extract_gop_scores(gop_file_path)
#         print(blank_gops)
#         if all(element >= 8.5 for element in blank_gops):
#             print('Correct')
#             return JSONResponse(content={"message": "Correct"}, status_code=200)
#         else:
#             print("Wrong")
#             return JSONResponse(content={"message": "Wrong"}, status_code=200)

#     except Exception as e:
#         return JSONResponse(content={"error": str(e)}, status_code=500)


from pydantic import BaseModel
import os
import pickle
import numpy as np
from fastapi import FastAPI, File, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from datetime import datetime
import os
import subprocess
import logging


with open('id_to_sent.pkl', 'rb') as f:
    id_to_sent = pickle.load(f)

with open('answers.pkl', 'rb') as f:
    answers = pickle.load(f)

with open('libri_lexicon.pkl', "rb") as pickle_file:
    dict_lexicon = pickle.load(pickle_file)


def create_data_folder(audio_path, qid, id_to_sent, data_dir='data/data_temp'):
    os.makedirs(data_dir, exist_ok=True)
    with open(data_dir+'/wav.scp', 'w', encoding='utf8') as f:
        f.write('temp cat '+audio_path +
                ' | /usr/bin/sox -t wav - -c 1 -b 16 -t wav - rate 16000 |\n')
    with open(data_dir+'/text', 'w', encoding='utf8') as f:
        f.write('temp '+id_to_sent[qid]+'\n')
    with open(data_dir+'/utt2spk', 'w', encoding='utf8') as f:
        f.write('temp temp\n')

    with open(data_dir+'/spk2utt', 'w', encoding='utf8') as f:
        f.write('temp temp\n')


def extract_gop_scores():
    os.system('./extract_gop_scores.sh')

def extract_word_gops(file_path):
   word_gops = []
   with open(file_path, 'r', encoding='utf8') as f:
       gops_temp = []
       for idx, line in enumerate(f.readlines()):
           phone, gop_score = line.strip().split()
           gop_score = float(gop_score)
           if phone == 'SIL':
               if len(gops_temp) != 0:
                   word_gops.append(sum(gops_temp)/len(gops_temp))
                   gops_temp = []
           elif 'SPN' in phone:
               if len(gops_temp) != 0:
                   word_gops.append(sum(gops_temp)/len(gops_temp))
                   gops_temp = []
               word_gops.append(gop_score)
           else:
               if (phone.split("_")[-1] == 'B' or idx == len(f.readlines())-1) and len(gops_temp) != 0:
                   word_gops.append(sum(gops_temp)/len(gops_temp))
                   gops_temp = []
               gops_temp.append(gop_score)
   return word_gops

def validate_answer(gop_file_path, target_word, dict_lexicon):
    gop_file = open(gop_file_path)
    gop_file = gop_file.readlines()

    phones = []
    phn_gop_scores = []
    for line in gop_file:
        l = line.split()
        l[0] = l[0].split("_")[0]
        if l[0] == "SIL":
            continue
        if l[0][-1].isdigit():
            l[0] = l[0][:-1]
        phones.append(l[0])
        phn_gop_scores.append(float(l[1]))

    print("Phones:", phones)
    print("GOP Scores:", phn_gop_scores)

    print(dict_lexicon[target_word], target_word)
    for j in dict_lexicon[target_word]:
        phn_indices = [ind for ind, val in enumerate(phones) if val == j[0]]
        for k in range(0, len(phn_indices)):
            if j == phones[phn_indices[k]:phn_indices[k]+len(j)]:
                return np.mean(phn_gop_scores[phn_indices[k]:phn_indices[k]+len(j)])
    # return 0


class LoginRequest(BaseModel):
    password: str


logging.basicConfig(level=logging.INFO)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],
)

@app.post("/api/login")
def login(request: LoginRequest):
    if request.password == "123":
        return {"authenticated": True}
    else:
        return {"authenticated": False}
    
@app.post("/api/upload-audio")
async def upload_audio(audio: UploadFile = File(...), specialId: str = Form(...)):
    try:
        os.makedirs("uploaded_audio", exist_ok=True)

        # Add timestamps and special ID to the file name
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
        filename = f"{specialId}_{timestamp}_{audio.filename}"
        file_path = f"uploaded_audio/{filename}"

        # Save the uploaded audio file to a specific location
        with open(file_path, "wb") as file_object:
            file_object.write(await audio.read())

        # Run ffmpeg command to convert opus to wav format
        ffmpeg_command = f"ffmpeg -i uploaded_audio/{filename} uploaded_audio/{filename[:-5]}.wav"
        os.system(ffmpeg_command)

        print("Special ID:", specialId)
        print("Filename:", filename)

        # Validating answer
        audio_path = f"uploaded_audio/{filename[:-5]}.wav"
        data_dir = 'data/data_temp'
        gop_file_path = 'Goodness-of-Pronunciation/GoP_scores.txt'
        target_word = answers[specialId]
        create_data_folder(audio_path, specialId, id_to_sent)
        extract_gop_scores()
        blank_gop = validate_answer(gop_file_path,target_word,dict_lexicon)
        print(blank_gop)
        if blank_gop >= 8.5:
            print('Correct')
            return JSONResponse(content={"message": "Correct"}, status_code=200)
        else:
            print("Wrong")
            return JSONResponse(content={"message": "Wrong"}, status_code=200)

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)


@app.post("/api/upload-audio2")
async def upload_audio(audio: UploadFile = File(...), specialId: str = Form(...)):
    try:
        os.makedirs("uploaded_audio", exist_ok=True)

        # Add timestamps and special ID to the file name
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
        filename = f"{specialId}{timestamp}{audio.filename}"
        file_path = f"uploaded_audio/{filename}"

        # Save the uploaded audio file to a specific location
        with open(file_path, "wb") as file_object:
            file_object.write(await audio.read())

        # Run ffmpeg command to convert opus to wav format
        ffmpeg_command = f"ffmpeg -i uploaded_audio/{filename} uploaded_audio/{filename[:-5]}.wav"
        os.system(ffmpeg_command)

        print("Special ID:", specialId)
        print("Filename:", filename)
        # Validating answer
        audio_path = f"uploaded_audio/{filename[:-5]}.wav"
        data_dir = 'data/data_temp'
        gop_file_path = 'Goodness-of-Pronunciation/GoP_scores.txt'
        print(specialId)
        create_data_folder(audio_path, specialId, id_to_sent)
        extract_gop_scores()
        blank_gop = extract_word_gops(gop_file_path)
        # blank_gop = validate_answer(gop_file_path,target_word,dict_lexicon)
        print(blank_gop)
        if all(element >= 8.5 for element in blank_gop):
            print('Correct')
            return JSONResponse(content={"message": "Correct"}, status_code=200)
        else:
            print("Wrong")
            return JSONResponse(content={"message": "Wrong"}, status_code=200)

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)