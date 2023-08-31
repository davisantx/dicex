const dropdown = Element.getElement('.home-navbar-dropdown', 0);

const languages = {
    'english': Element.getElement('.option-english', 0),
    'portuguese': Element.getElement('.option-portuguese', 0)
}

const portuguese = {
    '.navbar-item1': 'Inicio',
    '.navbar-item2': 'Sobre',
    '.navbar-dropdown': 'Linguagem (PT-BR)',
    '.about-content-description': 'Eu sou estudante do IFCE',
    '.about-content-i-am': "Olá, eu sou o <span class='about-content-my-name'> davi </span>,",
    '.about-content-i-am-description': 'tenho 17 anos, e atualmente estou no 6 semestre do curso técnico de informática integrado dos IFCE Campus Itapipoca.'
}

const english = {
    '.navbar-item1': 'Home',
    '.navbar-item2': 'About',
    '.navbar-dropdown': 'Language (EN)',
    '.about-content-description': 'I am IFCE student',
    '.about-content-i-am': "Hello, I'm  <span class='about-content-my-name'> davi </span>",
    '.about-content-i-am-description': "I'm 17 years old, and I'm currently in the 6th semester of the integrated computer science course at IFCE Campus Itapipoca."
}

const textNavbarEnglish = {
    'english': 'Language (EN)',
    'portuguese': 'Language (PT-BR)'
}
const textNavbarPortuguese = {
    'english': 'Linguagem (EN)',
    'portuguese': 'Linguagem (PT-BR)'
}

const loadEventListeners = () => {
    dropdown.addEventListener('click', (e) => {
        e.preventDefault()
        verifyOptionSelected(e.target)
        console.log(e.target)
        
    })
}

const verifyOptionSelected = ((optionSelected) => {
    if(optionSelected.innerText == languages['english'].textContent) {
        languages['english'].classList.add('fw-bold')
        languages['portuguese'].classList.remove('fw-bold')
        changeLanguage(false)
        // continued in english
    }
    else if(optionSelected.innerText == languages['portuguese'].textContent) {
        languages['portuguese'].classList.add('fw-bold')
        languages['english'].classList.remove('fw-bold')
        changeLanguage(true)
    }
    
})
const changeLanguage = ((response) => {
    var count = 0
    for(let i in portuguese) {
        ++count;
    }
    if(response) {
        Element.getElement('.navbar-dropdown', 0).innerHTML = textNavbarPortuguese['portuguese']
        changeLanguageOfTexts(portuguese, count)
    }
    if(!response) {
        Element.getElement('.navbar-dropdown', 0).innerHTML = textNavbarEnglish['english']
        changeLanguageOfTexts(english, count)
    }
})

const changeLanguageOfTexts = ((language, size) => {
    for(let i = 0; i < size; ++i) {
        Element.getElement(Object.keys(language)[i], 0).innerHTML = (Object.values(language)[i])
        // console.log((Object.values(language)[i]))    
    }
})

loadEventListeners()
