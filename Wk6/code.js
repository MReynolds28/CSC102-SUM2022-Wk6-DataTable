function blastoffTimerV1(){
    console.log("blastoffTimerV1() started");
    var countdownTimer = 50;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    },  5000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    },  10000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    },  15000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    },  20000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    },  25000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    },  30000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    },  35000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    },  40000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    },  45000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = "Blastoff!!!!";
    },  50000)
}

//defining variables outside the function so it doesnt reset it back to 0 everytime
var wins = 0;
    var losses = 0;
    var ties = 0;


//Start of Function for Craps game
function playCraps(){
    //Tells the console that I started the play Craps function
    console.log("playCraps() started");
    //Creating two variables to assign to the dice for random number generator
    var die1;
    var die2;
    
    //Telling a random number to be assigned to the variable thats between 1-6 using multiplication and .floor to round
    //The +1 allows me to get the range from 1-5 to 1-6
    //No longer need +1 as I switched from using .floor to .ceil so I didnt need that +1
    die1= Math.ceil(Math.random() * 6);
    die2= Math.ceil(Math.random() * 6);
    console.log("Die1= " +die1);
    //Assigning the numbers to be shown as results for Dice 1 and 2 
    document.getElementById("die1Res").innerHTML = die1;
    console.log("Die1= " +die2);
    document.getElementById("die2Res").innerHTML = die2;
    //create sum from die1 and die2
    var sum = die1 + die2;
    //see if sum = 7 or 11

    //This allows us to clean up the area so the lines of codes arent insanely long, it also sets paramaters for the numbers that lose
    if(sum == 7 || sum == 11) {
        document.getElementById("crapsRes").innerHTML = "Craps, You lose! Play Again!";
        console.log("Craps, You lose! Play Again!");
        losses++;
        document.getElementById("loseRes").innerHTML = losses;
} else if (die1 == die2 && die1 % 2 == 0) {
    document.getElementById("crapsRes").innerHTML = "Congrats! You're a winner!!";
    console.log("Congrats! You're a winner!!");
    wins++;
        document.getElementById("winRes").innerHTML = wins;
//Setting parameters to win
} else {   
    document.getElementById("crapsRes").innerHTML = "Hey, You didn't lose. Please try again!";
    console.log("Hey, You didn't lose. Please try again!");
    ties++;
        document.getElementById("tieRes").innerHTML = ties;
}
    
}

function blastoffTimerV2(){
    //variables
    var countdownTimer = 50;
    var halfCDT = countdownTimer / 2;
    var countdownDelay = 5000;
    var countdownChange = 5;
    var numPoints = 10;

    //loop
    for(var i = 0; i <=  numPoints; i++){
        setTimeout(function(){
            console.log(countdownTimer);
            if(countdownTimer == 0){
                document.getElementById("countdownDisplay").innerHTML = "Blastoff!!";
            } else if(countdownTimer < halfCDT) {
                document.getElementById("countdownDisplay").innerHTML = 
                    "Warning Less than ½ way to launch, time left = " + countdownTimer;
            } else {
                document.getElementById("countdownDisplay").innerHTML = countdownTimer;
            }
           countdownTimer = countdownTimer -  countdownChange;
        }, countdownDelay * i)
        
    }

}

function start(){
    console.log("start() function started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    console.log("stop() function started");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}