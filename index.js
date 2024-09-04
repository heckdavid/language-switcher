const languageSectionEl = document.querySelector('.language-section');
const buttonEls = document.querySelectorAll(".button");
const textTitleEl = document.querySelector(".title");
const textDescriptionEl = document.querySelector(".description");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        langSec.querySelector(".active").classList.remove(".active");
        button.classList.add("active");

        const attr = button.getAttribute("data-language");

        textTitle.textContent = data[attr].title;
        textDesc.textContent = data[attr].description;
    });
});

const data = {
    "english": {
        "title": "Translating static text.",
        "description": "Translating static text"
    },
    "french": {
        "title": "Traduire du texte statique.",
        "description": "Traduire du texte statique."
    },
    "german": {
        "title": "Statischen Text übersetzen.",
        "description": "Statischen Text übersetzen."
    }
}
