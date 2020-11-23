var readlineSync =require('readline-sync');
var score = 0;
var questions = [{
  ques: "what's my full name ? ",
  ans: "ABHIshek pandey"
},
{
    ques: "where do i live? ",
    ans: "Dhanbad"
},

{
  ques: "where did I study? ",
  ans: "Rec"
},

{
  ques: "what's my 12th percentage? ",
  ans: "94.2"
},

{
  ques: "from where i did my schooling? ",
  ans: "Rajkamal"
},

{
  ques: "what's my father name? ",
  ans : "sanjay pandey"
}]


  userName = readlineSync.question("Enter Your Name? ");
  console.log("Welcome! " + userName + " Let's see how much do you know abhishek");
  function quiz(ques,ans){
      var userAns = readlineSync.question(ques);
           if(userAns.toUpperCase() === ans.toUpperCase()){
               console.log("Correct Answer");
               console.log("---------------");
               score = score + 1;
               console.log("current score : " + score);
              }else{
        console.log("Oops! Incorrect Answer");
        console.log("----------------------");
        console.log("current score : " + score);
      }
      
  }





for(var i=0;i<questions.length;i++){
  curQues = questions[i];
  quiz(curQues.ques,curQues.ans);
}

    console.log("Thanks for playing this quiz");
    console.log("Final Score : " + score);
    var userScore = [0];
    userScore = [score];
 
      console.log("Congratulations you know me " + (score/questions.length)*100 +"% ");
    
    
  for(var j=0;j<userScore.length;j++){
  if(userScore[j]>score){
    console.log("Congratulations you got the new high score ");
  }
  }
