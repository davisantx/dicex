const btnSelectDiceDark = Element.getElement('.game-style-button-select-style-dice-dark', 0)
const btnSelectDiceRed = Element.getElement('.game-style-button-select-style-dice-red', 0)
const btnSelectRandomStyle = Element.getElement('.game-style-button-select-random-style', 0)
const gameStyleContent = Element.getElement('.game-style-content', 0)

btnSelectDiceRed.addEventListener('click', () => {
    animationEnd()
})
btnSelectDiceDark.addEventListener('click', () => {
    animationEnd()
})

btnSelectRandomStyle.addEventListener('click', () => {
    setTimeout(() => {
        animationEnd()
    }, 20000)
    
})

const animationEnd = (() => {
    gameStyleContent.classList.remove('game-content-animation-start')
    gameStyleContent.classList.add('game-content-animation-end')
    setTimeout(() => {
        gameStyleContent.classList.remove('game-content-animation-end')
        gameStyleContent.classList.add('d-none')
    }, 2000)
})