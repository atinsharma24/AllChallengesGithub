
let userClickedPattern = [];

let gamePattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];

let started = false;

let level = 0;

function playSound(name){

    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

$(document).keypress(function(){

    if(!started){
        $("#level-title").text("Level" + level);
        nextSequence();
        started = true;
    }
});

function nextSequence() {

    level++;

    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random()*4);
    
    
    let randomChosenColour = buttonColours[randomNumber];

    // console.log(randomChosenColour);

    gamePattern.push(randomChosenColour);

    $(`.${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

$('.btn').click(function(){
        
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function animatePress(currentColour){

    let jq = $("#" + currentColour);
    jq.addClass("pressed");

    setTimeout(function () {
        jq.removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    
}

// let color = "yellow";

// $("#" + color).addClass("pressed");

// setTimeout(function(){
//     $("#" + color).removeClass("pressed");
// }, 100);

// console.log(userClickedPattern);