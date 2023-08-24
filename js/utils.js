class Utils {

    constructor() {}

    static getElements(element) {
        console.log('i am static method')
        return $(element)
    }

    static getElement(element, number) {
        return ($(element).get(number))
    }

    static addEventClick(element, instructions = ((e) => {})) {
        element.click(instructions())
    }
}


// let getElements = ((element) => {
//     return $(element)
// })