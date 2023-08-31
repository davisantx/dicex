const dicePlayer1 = Element.getElement('.dice-player1', 0)
const dicePlayer2 = Element.getElement('.dice-player2', 0)


const dicesTheme = [
    'assets/img/dices/theme-dark/dice1.png',
    'assets/img/dices/theme-red/dice1.png'
]

buttonSelectDiceRandom.addEventListener('click', () => {
    var randomNumber = Math.floor(Math.random() * 2)
    dicePlayer1.setAttribute('src', dicesTheme[randomNumber])
    dicePlayer2.setAttribute('src', dicesTheme[randomNumber])
})