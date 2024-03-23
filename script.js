let words = [];
let currentWord = 0;
let domDisplay;
let haveclicked = false;
let nextButton = document.getElementById("nextCard");
let lastButton = document.getElementById("lastCard");
let createButton = document.getElementById("createCard");
let dialogElement = document.querySelector("dialog");
let addWordButton = document.getElementById("addBtn")
let dialogDisplay = document.querySelector("#showWords");
let dialoglang1 = document.getElementById("language1");
let dialoglang2 = document.getElementById("language2");
let finishBtn = document.getElementById("finishBtn");

createButton.addEventListener("click", () => {
    dialogElement.show();
});

finishBtn.onclick = function (){
    dialogElement.close();
    domDisplay.createCard();
};

addWordButton.addEventListener("click", () => {
    if(dialoglang1.value !== "" && dialoglang2.value !== ""){
        let set = createSet(dialoglang1.value, dialoglang2.value)
        words.push(set);
        dialoglang1.value = "";
        dialoglang2.value = "";
        domDisplay = DisplayCard();
    } else {
        alert("Please enter both words");
    }
});

nextButton.addEventListener("click", () => {
    domDisplay.nextCard();
});

lastButton.addEventListener("click", () => {
    domDisplay.lastCard();
});

function DisplayCard(){
    let card = document.createElement("div");
    card.classList.add("FlashCard");
    let displayText = document.createElement("h1");
    displayText.classList.add("MainDisplay");

    function createCard(){
        if(haveclicked === false){
            displayText.innerHTML = words[currentWord]["word1"];
            card.addEventListener("click", handleClick);
            document.body.appendChild(card);
            card.appendChild(displayText);
        }
        haveclicked = true;
    }

    function handleClick() {
        if(currentWord < words.length && currentWord >= 0){
            if (displayText.innerHTML === words[currentWord]["word1"]) {
                displayText.innerHTML = words[currentWord]["word2"];
            } else {
                displayText.innerHTML = words[currentWord]["word1"];
            }
        }
    }

    function nextCard(){
        if (currentWord < words.length - 1){
            currentWord++;
            displayText.innerHTML = words[currentWord]["word1"];
        } else {
            alert("Trying to reach a word that its not yet defined")
        }
    }

    function lastCard(){
        debugger;
        if(currentWord > 0){
            currentWord--;
            displayText.innerHTML = words[currentWord]["word1"];
        } else {
            alert("You have reached the last word!");
        }
    }

    return {createCard, nextCard, lastCard}
}

function createSet (language1, language2){
    let word1 = language1;
    let word2 = language2;
    return {word1, word2};
}
