const buttonSelectDiceDark = Element.getElements(".game-style-button-select-style-dice-dark")
const buttonSelectDiceRed = Element.getElements(".game-style-button-select-style-dice-red")
const buttonSelectDiceRandom = Element.getElements(".game-style-button-select-random-style")
const dices = Element.getElements('.dice-style') 

const animationDiceSelected = ((button, element, animation) => {
    button.addEventListener('mouseover', () => {
        element.classList.add(animation)
    })
    button.addEventListener('mouseout', () => {
        element.classList.remove(animation)
    })
})

animationDiceSelected(buttonSelectDiceRed[0], dices[0], 'dice-style-one')
animationDiceSelected(buttonSelectDiceDark[0], dices[1], 'dice-style-two')
animationDiceSelected(buttonSelectDiceRandom[0], dices[2], 'dice-style-three')
