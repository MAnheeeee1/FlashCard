let words = [];
let currentWord = 0;
console.log(words);
createCards();
DisplayCard();



function DisplayCard(){
    let card = document.createElement("div");
    card.classList.add("FlashCard");
    let displayText = document.createElement("h1");
    displayText.classList.add("MainDisplay");
    displayText.innerHTML = words[currentWord]["word1"];
    card.addEventListener("click", ()=>{
        if (displayText.innerHTML === words[currentWord]["word1"]){
            displayText.innerHTML = words[currentWord]["word2"];
        }
        else{
            displayText.innerHTML = words[currentWord]["word1"];
        }
    })
    document.body.appendChild(card);
    card.appendChild(displayText);

}
function createCards(){
    let amountWords = parseInt(prompt("How many word you want to add?"));
    for(let i = 0; i < amountWords; i++){
        let word1 = prompt("Enter word1");
        let word2 = prompt("Enter word2");
        let pair = createSet(word1, word2);
        words.push(pair);
    }
}

function createSet (language1, language2){
    let word1 = language1;
    let word2 = language2;
    return{word1, word2}
}