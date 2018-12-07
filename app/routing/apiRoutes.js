
var friends = require("../data/friends")



module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });



app.post("/api/friends", function(req, res) {

var userScoreStr = req.body.scores
var friendScores = []
var matchpopdif = 0
var differences = []

for (i=0; i<friends.length; i++){
  var friendScoreSt = friends[i].scores
  friendScores.push(friendScoreSt)
}


for (i=0; i<friendScores.length; i++){
  var matchpop = friendScores[i]
  matchpopdif = 0
  for (k=0; k<userScoreStr.length; k++){
    var dif = Math.abs(parseInt(userScoreStr[k])-parseInt(matchpop[k]))
    matchpopdif = matchpopdif + dif
    if((k+1) === userScoreStr.length){
      differences.push(matchpopdif)
    }
  }
}

var match = function indexOfMin(arr) {

  var min = arr[0];
  var minIndex = 0;

  for (var i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
          minIndex = i;
          min = arr[i];
      }
  }

  return minIndex;
}  

  friends.push(req.body);
    res.json(friends[match(differences)])

});
}
