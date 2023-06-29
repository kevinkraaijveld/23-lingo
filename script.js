
// Array of words to guess
const wordList = ["apple", "beach", "candy", "dough", "eagle", "flame", "grape", "honey", "inbox", "jumbo"];
// Randomly select a word from the list
const targetWord = wordList[Math.floor(Math.random() * wordList.length)];
// Function to check the user's guess
function checkGuess() {
    const guessInput = document.getElementById("guess-input");
    const guess = guessInput.value.toLowerCase();

    if (guess.length !== 5) {
        alert("Please enter a 5-letter word.");
        return;
    }

    const wordDisplay = document.getElementById("word-display");
    const previousGuesses = document.getElementById("previous-guesses");
    const checkButton = document.getElementById("check-button");

    // Clear the input field
    guessInput.value = "";

    // Create a new guess element
    const guessElement = document.createElement("div");
    guessElement.classList.add("guess");

    // Check each letter of the guess
    for (let i = 0; i < guess.length; i++) {
        const letterElement = document.createElement("div");
        letterElement.classList.add("letter");
        letterElement.textContent = guess[i];

        if (guess[i] === targetWord[i]) {
            letterElement.classList.add("correct");
        } else if (targetWord.includes(guess[i])) {
            letterElement.classList.add("misplaced");
        } else {
            letterElement.classList.add("wrong");
        }

        guessElement.appendChild(letterElement);
    }

    // Add the guess to the previous guesses container
    previousGuesses.appendChild(guessElement);

    // Check if the word is fully guessed
    if (guess === targetWord) {
        wordDisplay.textContent = "Congratulations! You guessed the word!";
        checkButton.textContent = "Retry";
        checkButton.setAttribute("onclick", "retryGame()");
        guessInput.style.display = "none";

    }
}

// Function to retry the game
function retryGame() {
    const wordDisplay = document.getElementById("word-display");
    const previousGuesses = document.getElementById("previous-guesses");
    const checkButton = document.getElementById("check-button");
    const guessInput = document.getElementById("guess-input");

    // Reset game elements
    wordDisplay.textContent = "";
    previousGuesses.innerHTML = "";
    checkButton.textContent = "Check";
    checkButton.setAttribute("onclick", "retryGame()");
    guessInput.value = "";
}

// Event listener for Enter key press
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

// Function to retry the game
function retryGame() {
    window.location.reload();

}
