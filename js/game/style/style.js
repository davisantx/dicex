const btnSelectDiceDark = Element.getElement('.game-style-button-select-style-dice-dark', 0)
const btnSelectDiceRed = Element.getElement('.game-style-button-select-style-dice-red', 0)
const btnSelectRandomStyle = Element.getElement('.game-style-button-select-random-style', 0)
const gameStyleContent = Element.getElement('.game-style-content', 0)
const game = Element.getElement('.game', 0)

btnSelectDiceRed.addEventListener('click', () => {
    dicePlayer1.setAttribute('src', dicesTheme[1] + 'dice1.png')
    dicePlayer2.setAttribute('src', dicesTheme[1] + 'dice1.png')
    Animation.start(btnSelectDiceRed, gameStyleContent, game, 'game-content-animation-end', 'game-content-animation-start', 1500, 3300)
})
btnSelectDiceDark.addEventListener('click', () => {
    dicePlayer1.setAttribute('src', dicesTheme[0] + 'dice1.png')
    dicePlayer2.setAttribute('src', dicesTheme[0] + 'dice1.png')
    Animation.start(btnSelectDiceDark, gameStyleContent, game, 'game-content-animation-end', 'game-content-animation-start', 1500, 3300)
})

btnSelectRandomStyle.addEventListener('click', () => {
    Animation.start(btnSelectRandomStyle, gameStyleContent, game, 'game-content-animation-end', 'game-content-animation-start', 1500, 3300)
})
