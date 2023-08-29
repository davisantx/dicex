class Element {

    constructor() {}

    static getElement(element, number) {
        return ($(element).get(number))
    }

    static disableElement(element) {
        element.classList.add('d-none')
    }

    static getElements(element) {
        console.log('i am static method')
        return $(element)
    }

    static addEventClick(element, instructions = ((e) => {})) {
        // element.addEventListerner('click', instructions())
    }
}

