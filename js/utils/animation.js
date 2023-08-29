class Animation {
    static start(button, elementOut, elementIn, animationOutScreen, animationInScreen, timeOutScreen, timeInNewScreen) {
        elementOut.classList.add(animationOutScreen)
        setTimeout(() => {
            elementOut.classList.add('d-none')
            elementOut.classList.remove(animationOutScreen)
            elementIn.classList.remove('d-none')
            elementIn.classList.add(animationInScreen)
        }, timeOutScreen)
        setTimeout(() => {
            elementIn.classList.remove(animationInScreen)
        }, timeInNewScreen)
    }       
}