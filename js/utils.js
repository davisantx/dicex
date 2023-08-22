class A {

    constructor() {}

    static getElement(element) {
        console.log('i am static method')
        return (document.querySelector(element))
    }
    static addEvent(element, event, instructions) {
        element.addEventListener((event), () => {
            instructions()
        })
    }
}

