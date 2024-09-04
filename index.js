const languageSectionEl = document.querySelector('.language-section');
const buttonEls = document.querySelectorAll(".button");
const textTitleEl = document.querySelector(".title");
const textDescriptionEl = document.querySelector(".description");

buttonEls.forEach((buttonEl) => {
  button.addEventListener('click', () => {
        langSec.querySelector('.active').classList.remove('.active');
        button.classList.add('active');

        const attribute = buttonEl.getAttribute('data-language');

        textTitle.textContent = data[attr].title;
        textDesc.textContent = data[attr].description;
    });
});

const dictionary = {
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
