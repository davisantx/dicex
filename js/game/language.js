// const dropdown = Element.getElement('.home-navbar-dropdown', 0);

// const languages = {
//     'english': Element.getElement('.option-english', 0),
//     'portuguese': Element.getElement('.option-portuguese', 0)
// }

// const portuguese = {
//     '.navbar-item1': 'Inicio',
//     '.navbar-item2': 'Sobre',
//     '.navbar-dropdown': 'Linguagem (PT-BR)',

//     '.game-button-to-play': 'JOGAR'
// }

// const english = {
//     '.navbar-item1': 'Home',
//     '.navbar-item2': 'About',
//     '.navbar-dropdown': 'Language (EN)',
//     '.game-button-to-play': 'TO PLAY'
// }

// const textNavbarEnglish = {
//     'english': 'Language (EN)',
//     'portuguese': 'Language (PT-BR)'
// }
// const textNavbarPortuguese = {
//     'english': 'Linguagem (EN)',
//     'portuguese': 'Linguagem (PT-BR)'
// }

// const loadEventListeners = () => {
//     dropdown.addEventListener('click', (e) => {
//         e.preventDefault()
//         verifyOptionSelected(e.target)
//         console.log(e.target)
        
//     })
// }

// const verifyOptionSelected = ((optionSelected) => {
//     if(optionSelected.innerText == languages['english'].textContent) {
//         languages['english'].classList.add('fw-bold')
//         languages['portuguese'].classList.remove('fw-bold')
//         changeLanguage(false)
//         // continued in english
//     }
//     else if(optionSelected.innerText == languages['portuguese'].textContent) {
//         languages['portuguese'].classList.add('fw-bold')
//         languages['english'].classList.remove('fw-bold')
//         changeLanguage(true)
//     }
    
// })
// const changeLanguage = ((response) => {
//     var count = 0
//     for(let i in portuguese) {
//         ++count;
//     }
//     if(response) {
//         Element.getElement('.navbar-dropdown', 0).innerHTML = textNavbarPortuguese['portuguese']
//         changeLanguageOfTexts(portuguese, count)
//     }
//     if(!response) {
//         Element.getElement('.navbar-dropdown', 0).innerHTML = textNavbarEnglish['english']
//         changeLanguageOfTexts(english, count)
//     }
// })

// const changeLanguageOfTexts = ((language, size) => {
//     for(let i = 0; i < size; ++i) {
//         Element.getElement(Object.keys(language)[i], 0).innerHTML = (Object.values(language)[i])
//         // console.log((Object.values(language)[i]))    
//     }
// })

// loadEventListeners()
