import json

file = open('data.json')
data = json.load(file)
score = {}
words = ["a", "b", "c", "d", "o"]
s_add =  words.length / 20

for user in data.keys():
    score[user] = 0
    for word in words:
        if(word in data[user]):
            score[user] += s_add

print(score)
