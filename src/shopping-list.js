const form = document.querySelector('#formulaire input');
const bouton = document.querySelector('#bouton');
const shoppingItem = form.value;
const listeCourse = document.querySelector('#maListeDeCourse');
//const data;

bouton.addEventListener("click", (event) => {
  event.preventDefault();
  let data = form.value;
  listeCourse.innerHTML += `<li>${data}</li>`;
});

