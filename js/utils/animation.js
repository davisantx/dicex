class Animation {
    static start(button, elementOut, elementIn, animationOutScreen, animationInScreen, timeOutScreen, timeInNewScreen) {
        elementOut.classList.add(animationOutScreen)
        setTimeout(() => {
            elementOut.classList.add('d-none')
            elementOut.classList.remove(animationOutScreen)
            elementIn.classList.remove('d-none')
            elementIn.classList.add(animationInScreen)
        }, timeOutScreen)
        this.end(elementIn, animationInScreen, timeInNewScreen)
    }
    static end(elementIn, animationInScreen, timeInNewScreen) {
        setTimeout(() => {
            elementIn.classList.remove(animationInScreen)
        }, timeInNewScreen)
    }
}