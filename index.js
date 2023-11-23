// let cards = [firstCard , seconCard] // array - ordered list of items
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")

// let sumEl = document.query("sum-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player ={
    name : "x",
    chip : 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chip 

console.log(cards)
//function to stop hard coding the numbers on cards
function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1 //Math.random() --> 0.0000 til 0.9999     tna7i eli ba3ed fasel
    if (randomCard===1){
        return 11
    }else if(randomCard>10){
        return 10
    }else {
        return randomCard
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let seconCard = getRandomCard()
    cards= [firstCard , seconCard] 
    sum = firstCard + seconCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " //+ cards[0] + " " + cards[1]
    for(let i = 0; i < cards.length ; i++){
        cardsEl.textContent += cards[i] + " "
    }
    // render out all the cards we have
    sumEl.textContent = "Sum: " + sum
    console.log("clicked")
    if(sum < 21){
        message = "do you want to draw a new card?"
    } 
    else if(sum === 21){
     message = "You've got BlackJack"
     hasBlackJack = true
    } 
    else {
     message ="You're out of the game"
     isAlive = false
    } 
    messageEl.textContent = message
}

console.log(messageEl)

function newCard(){
    if(isAlive===true && hasBlackJack===false){
        console.log("Drawing a new card from deck")
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}



