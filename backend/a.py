import pickle

with open("id_to_sent.pkl", "rb") as file:
    data = pickle.load(file)

data['JS-1'] = "THE CAT SAT ON THE MAT"
data['JS-2'] = "THE SUN IS VERY BIG"
data['JS-3'] = "I EAT THE RED APPLE"
data['JS-4'] = "THE SKY IS BLUE TODAY"
data['JS-5'] = "THE DOG RUNS VERY FAST"
data['JS-6'] = "SHE IS VERY TALL"
data['JS-7'] = "THEY ARE GOOD FRIENDS"
data['JS-8'] = "HE LIKES TO READ BOOKS"
data['JS-9'] = "SHE ENJOYS PLAYING THE PIANO"
data['JS-10'] = "BEAUTIFUL FLOWERS BLOOM IN THE GARDEN"
data['JS-11'] = "THE CAT CLIMBS THE TREE FAST"

with open("id_to_sent.pkl", "wb") as file:
    pickle.dump(data, file)


