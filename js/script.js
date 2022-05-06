//script del menu hamburguesa.

const selectElement = (element) => document.querySelector(element);
selectElement('.menu-icons').addEventListener('click', () =>{
    selectElement('nav').classList.toggle('active');
});

//script del carousel

