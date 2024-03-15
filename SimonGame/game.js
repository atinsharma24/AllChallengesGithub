
userClickedPattern = [];

$("btn").on("click", function(){
    userChosenColour = "#" + this.id;
    console.log("event id is: " + this.id);
});

function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}

let buttomColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = buttomColours[nextSequence()];

let gamePattern = [];
gamePattern.push(randomChosenColour);

console.log(randomChosenColour);





$("#"+randomChosenColour).fadeOut(200).fadeIn(200);

switch (randomChosenColour) {
    case "blue":
        let blue = new Audio("sounds/blue.mp3")
        blue.play();
        break;    

    case "green":
        let green = new Audio("sounds/green.mp3")
        green.play();
        break;

    case "red":
        let red = new Audio("sounds/red.mp3")
        red.play();
        break;

    case "yellow":
        let yellow = new Audio("sounds/yellow.mp3")
        yellow.play();
        break;

    default:
        let wrong = new Audio("sounds/wrong.mp3")
        wrong.play();
        break;

}