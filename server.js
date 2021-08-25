var tweets =  require('./data.json')
var pWords = ["a", "b", "c", "d" , "o"];
var s = pWords.length / 20;

var score = {};
for (var user in tweets) {
  score[user] = 0;
  for (var word of pWords) {
    if (tweets[user].includes(word)) {
      if (user in score) {
        score[user] += s;
      }
    }
  }
}

console.log(score);
