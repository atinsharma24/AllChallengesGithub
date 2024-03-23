
let userClickedPattern = [];

let gamePattern = [];

let buttomColours = ["red", "blue", "green", "yellow"];

$("btn").click(function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
});

function nextSequence(){

    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttomColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(200).fadeIn(200);
    playSound(randomChosenColour);
    
    // console.log(randomChosenColour);
}

function playSound(name){

    let audio = new Audio("sounds/" + name+ ".mp3");
    audio.play();
}

function animatePress(currentColour){

    $("#" + currentColour).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    });
}

$("button").click(function(){
    nextSequence();
    let level=0;
    $("h1").text("Level" + level);
})
// switch (randomChosenColour) {
//     case "blue":
//         let blue = new Audio("sounds/blue.mp3")
//         blue.play();
//         break;    

//     case "green":
        
//         break;

//     case "red":
//         let red = new Audio("sounds/red.mp3")
//         red.play();
//         break;

//     case "yellow":
//         let yellow = new Audio("sounds/yellow.mp3")
//         yellow.play();
//         break;

//     default:
//         let wrong = new Audio("sounds/wrong.mp3")
//         wrong.play();
//         break;

// }