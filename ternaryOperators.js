let soup = "Tomato";
let isBanned = false;
console.log(isBanned ? "Sorry we cant serve you" : soup ? `Here is your ${soup} soup ` : "No it's not your soup");

//rock paper scissors game using to

let userChoice = "Paper";
let computerChoice = "black";
let result = userChoice === computerChoice ? "Game is tied" :
    userChoice === "Rock" && computerChoice === "Paper" ? "User wins" :
        userChoice === "Paper" && computerChoice === "Rock" ? "User wins" :
            userChoice === "Scissors" && computerChoice === "Paper" ? "User wins" :
                "computer wins";
                


console.log(result);

