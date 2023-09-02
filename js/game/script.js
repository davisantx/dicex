const buttonPlay = Element.getElement('.game-button-to-play', 0)
const gameTitle = Element.getElement('.game-play-title', 0)
var randomNumPlayer1;
var randomNumPlayer2;

let changeNumber = true


buttonPlay.addEventListener("click", () => {
    var audio = new Audio('assets/audio/dice.mp3')

    audio.play()
    gameTitle.innerHTML = '...'
    dicePlayer1.classList.add('dices-play')
    dicePlayer2.classList.add('dices-play')

    var changeNumberDice = setInterval(() => {
        randomNumPlayer1 = Math.floor((Math.random() * 6) + 1)
        randomNumPlayer2 = Math.floor((Math.random() * 6) + 1)
        if(randomDice) {
            dicePlayer1.setAttribute("src", dicesTheme[randomNumber] + 'dice' + randomNumPlayer1 + '.png')
            dicePlayer2.setAttribute("src", dicesTheme[randomNumber] + 'dice' + randomNumPlayer2 + '.png') 
        }else if(diceDark) {
            dicePlayer1.setAttribute("src", dicesTheme[0] + 'dice' + randomNumPlayer1 + '.png')
            dicePlayer2.setAttribute("src", dicesTheme[0] + 'dice' + randomNumPlayer2 + '.png') 
        }else {
            dicePlayer1.setAttribute("src", dicesTheme[1] + 'dice' + randomNumPlayer1 + '.png')
            dicePlayer2.setAttribute("src", dicesTheme[1] + 'dice' + randomNumPlayer2 + '.png') 
        }
        
    }, 20)
 
    setTimeout(() => {
        dicePlayer1.classList.remove('dices-play')
        dicePlayer2.classList.remove('dices-play')
        changeNumber = false
        if(changeNumber == false) {
            clearInterval(changeNumberDice)
        }
        getPlayerWin()
    }, 700)
    
})

const getPlayerWin = () => {
    if(randomNumPlayer1 > randomNumPlayer2) {
        gameTitle.innerHTML = 'Jogador 1 venceu'
    }else if(randomNumPlayer1 == randomNumPlayer2) {
        gameTitle.innerHTML = 'Empate'
    }else {
        gameTitle.innerHTML = 'Jogador 2 venceu'
    }
}


