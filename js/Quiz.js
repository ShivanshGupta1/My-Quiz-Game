class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide()

    //write code to change the background color here
    


    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here
    contestant.getPlayerInfo();
    var y = 175
    //write condition to check if contestantInfor is not undefined
    if (allContestants!=null){
      let result = createElement("h1")
      result.html("Results")
      result.position(350,30)
      let note = createElement("h3")
      note.html("NOTE: The background color green and red, show correct and incoreect respectively! And the correct player is highlited!")
      note.position(50,300)
      for (var i in allContestants){
   
        textSize(20);
        console.log(allContestants)
    if(allContestants[i].answer=="2" && i=="contestant"+contestant.index){

        background("green")

    }
    else{
        background("red")
   
    }
  
    }
    for (var i in allContestants){
      y+=50;
      textSize(20);
  if(allContestants[i].answer=="2"){
      fill("blue");
  }
  else{
      fill("black");
  }
  text(allContestants[i].name+": "+allContestants[i].answer, 450,y);

  }
}
    
    }

    
  }


