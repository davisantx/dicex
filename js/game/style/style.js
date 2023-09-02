const btnSelectDiceDark = Element.getElement('.game-style-button-select-style-dice-dark', 0)
const btnSelectDiceRed = Element.getElement('.game-style-button-select-style-dice-red', 0)
const btnSelectRandomStyle = Element.getElement('.game-style-button-select-random-style', 0)
const gameStyleContent = Element.getElement('.game-style-content', 0)
const game = Element.getElement('.game', 0)

let diceRed;
let diceDark;
let randomDice;

btnSelectDiceRed.addEventListener('click', () => {
    dicePlayer1.attr('src', dicesTheme[1] + 'dice1.png')
    dicePlayer2.attr('src', dicesTheme[1] + 'dice1.png')
    diceRed = true
    diceDark = false
    randomDice = false
    Animation.start(btnSelectDiceRed, gameStyleContent, game, 'game-content-animation-end', 'game-content-animation-start', 1500, 3300)

})
btnSelectDiceDark.addEventListener('click', () => {
    dicePlayer1.attr('src', dicesTheme[0] + 'dice1.png')
    dicePlayer2.attr('src', dicesTheme[0] + 'dice1.png')
    diceRed = false
    diceDark = true
    randomDice = false
    Animation.start(btnSelectDiceDark, gameStyleContent, game, 'game-content-animation-end', 'game-content-animation-start', 1500, 3300)
})

btnSelectRandomStyle.addEventListener('click', () => {
    dicePlayer1.attr('src', dicesTheme[randomNumber] + 'dice1.png')
    dicePlayer2.attr('src', dicesTheme[randomNumber] + 'dice1.png')
    diceRed = false
    diceDark = false
    randomDice = true
    Animation.start(btnSelectRandomStyle, gameStyleContent, game, 'game-content-animation-end', 'game-content-animation-start', 1500, 3300)
})
