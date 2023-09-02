const dicePlayer1 = Element.getElements('.dice-player1')
const dicePlayer2 = Element.getElements('.dice-player2')

var randomNumber;

const dicesTheme = [
    'assets/img/dices/theme-dark/',
    'assets/img/dices/theme-red/'
]

buttonSelectDiceRandom.on('click', () => {
    randomNumber = Math.floor(Math.random() * 2)
    dicePlayer1.attr('src', dicesTheme[randomNumber] + 'dice1.png')
    dicePlayer2.attr('src', dicesTheme[randomNumber] + 'dice1.png')
})