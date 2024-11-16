buttonColours = ["red" , "green" , "yellow" , "blue"];
userClickedPattern = [ ];
var started = false;
var level = 0 ; 
var gamePattern = []

var blue = new Audio("/sounds/blue.mp3");
var green = new Audio ("sounds/green.mp3");
var red =  new Audio("/sounds/red.mp3");
var yellow = new Audio("/sounds/yellow.mp3");

$(document).keypress(function(){

    if(!started){
        $("h1").text("Level " + level );
        newSequence();
        started  = true;
    }
});

$(".btn").click(function(){
    var userChosenColour = (this.id);
    userClickedPattern.push(userChosenColour);
    


    
    let  audio = new Audio("/sounds/"  + this.id + ".mp3");
    audio.play();
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1 );
    
    })

function newSequence(){
    userClickedPattern = [];
    level ++;
    randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber * 4 );
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
     
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    let  audio = new Audio("/sounds/"  + randomChosenColour  + ".mp3");
    audio.play();

    $("h1").text("Level " + level);
   
     
}





function checkAnswer(currentLevel){
    
    if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          $(document).click(newSequence());
        }, 1000);
      }
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("sucess");
    }
    else {
        console.log("wrong");
        var wrong = new Audio("/sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        setTimeout(function(){
        $("body").removeClass("game-over");},200);
        $("h1").text("Game Over Press any key to restart");
        $(document).keypress(startover());
    }
    

}




function animatePress(){
        
        $(".btn").click(function(){
            $("#" + this.id).addClass("pressed");}
        )
        setTimeout(function(){
            $(".btn").removeClass("pressed")
        } , 100);
    
}


function startover(){
    gamePattern = [ ];
    level = 0 ; 
    started = false;

}