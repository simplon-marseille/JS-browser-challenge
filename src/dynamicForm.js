const formulaire = document.querySelector('form input');

formulaire.addEventListener("mouseover", (event) => {
  formulaire.classList.add('form-xl');
});

formulaire.addEventListener("mouseout", (event) => {
  formulaire.classList.remove('form-xl');
});
