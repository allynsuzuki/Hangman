var guesses = 10;
var word = "";
var guessedLetters = [];
var animalWords = ["chicken", "hippopotamus", "goldfish", "antelope", "elephant"];
var natureWords = ["clouds", "thunderstorm", "overcast", "roots", "mushroom"];
var placesWords  = ["Berkeley", "Disneyland", "Florida", "Montana", "Europe"];
var foodWords  = ["hamburger", "lasagna", "sandwich", "pineapple", "cupcake", "marshmallow"];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function startGame(){
    word="";
    guesses=10;
    guessedLetters=[];
    document.getElementById("left").innerHTML = "Number of Guesses Left: " + guesses;
    document.getElementById("guessed").innerHTML = "Guessed Letters: " + guessedLetters;
    document.getElementById("output7").innerHTML = "";
    document.getElementById("output2").innerHTML ="";
    document.getElementById("button").innerHTML ="<button id=\"submit\" onclick=\"handleGuess()\">Submit Letter</button>";
    document.getElementById("button2").innerHTML ="<button id=\"submitLetter\" onclick=\"win()\">Submit Word</button>";
    var cat = document.getElementById("category").value;
    if(cat=="animal"){
         word = animalWords[Math.floor(Math.random() * animalWords.length)];
    }
    if(cat=="nature"){
         word = natureWords[Math.floor(Math.random() * natureWords.length)];
    }
    if(cat=="places"){
         word = placesWords[Math.floor(Math.random() * placesWords.length)];
    }
    if(cat=="food"){
         word = foodWords[Math.floor(Math.random() * foodWords.length)];
    }
    if (cat==0){
        document.getElementById("output4").innerHTML = "Choose a category first and then start game!";
    }else{
        document.getElementById("output4").innerHTML = "";
    }
    printWord();
}

function win(){
    var wordGuess = document.getElementById("wordGuess").value;
    if (wordGuess.toLowerCase() == word){
        document.getElementById("output7").innerHTML = "You won! Congratulations!";
        document.getElementById("output").innerHTML = word;
        endGame();
    }else{
        document.getElementById("output4").innerHTML = "Wrong guess, keep trying!";
    }
}

function printWord(){
    var print = "";
    for(var i = 0; i<word.length; i++){
        if(guessedLetters.indexOf(word[i]) > -1){
            print += word[i]
        }else{
            print += "_ "
        }
    }
    if(guessedLetters.indexOf("_") < -1){
        document.getElementById("output7").innerHTML = "You won! Congratulations!!";
        endGame();
    }
    document.getElementById("output").innerHTML = print;
}


function handleGuess(){
    document.getElementById("output4").innerHTML = "";
    var letter = document.getElementById("guessLetter").value;
    if(guessedLetters.indexOf(alpha[letter]) > -1){
        document.getElementById("output5").innerHTML = "This letter has already been guessed! Guess again.";
    }else{
        document.getElementById("output5").innerHTML = "";
        console.log(letter);
        guessedLetters+= alpha[letter] + " ";
        printWord();
        guesses --;
        document.getElementById("guessed").innerHTML = "Guessed Letters: " + guessedLetters;
        document.getElementById("left").innerHTML = "Number of Guesses Left: " + guesses;
    }
    if(guesses == 0){
        document.getElementById("output").innerHTML = word;
        document.getElementById("output2").innerHTML = "You lost. Better luck next time!";
        endGame()
    }
}

function endGame(){
    document.getElementById("submit").disabled = true;
    document.getElementById("submitLetter").disabled = true;

}
