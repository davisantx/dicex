const dicePlayer1 = Element.getElement('.dice-player1', 0)
const dicePlayer2 = Element.getElement('.dice-player2', 0)
var randomNumber;

const dicesTheme = [
    'assets/img/dices/theme-dark/',
    'assets/img/dices/theme-red/'
]

buttonSelectDiceRandom.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 2)
    dicePlayer1.setAttribute('src', dicesTheme[randomNumber] + 'dice1.png')
    dicePlayer2.setAttribute('src', dicesTheme[randomNumber] + 'dice1.png')
})