const buttonSelectDiceDark = Element.getElement(".game-style-button-select-style-dice-dark", 0)
const buttonSelectDiceRed = Element.getElement(".game-style-button-select-style-dice-red", 0)
const buttonSelectDiceRandom = Element.getElement(".game-style-button-select-random-style", 0)
const dices = Element.getElements('.dice-style') 

const animationDiceSelected = ((button, element, animation) => {
    button.addEventListener('mouseover', () => {
        element.classList.add(animation)
    })
    button.addEventListener('mouseout', () => {
        element.classList.remove(animation)
    })
})

animationDiceSelected(buttonSelectDiceRed, dices[0], 'dice-style-one')
animationDiceSelected(buttonSelectDiceDark, dices[1], 'dice-style-two')
animationDiceSelected(buttonSelectDiceRandom, dices[2], 'dice-style-three')
