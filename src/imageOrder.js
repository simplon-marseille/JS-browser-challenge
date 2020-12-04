const multiaxe = document.querySelector('.multiaxe');
const paramoteur = document.querySelector('.paramoteur');

const boutonParamoteur = document.querySelector('#paramoteur');
boutonParamoteur.addEventListener("click", (even) => {
 multiaxe.style.display = 'none';
 paramoteur.style.display ='block';
});

const boutonMultiaxe = document.querySelector('#multiaxe');
boutonMultiaxe.addEventListener("click", (even) => {
 paramoteur.style.display = 'none';
 multiaxe.style.display ='block';
});

const all = document.querySelector('#all');
all.addEventListener("click", (even) => {
 paramoteur.style.display = 'block';
 multiaxe.style.display ='block';
});





const stars = document.querySelectorAll('#list-of-stars li');
stars.forEach((star) => {
    star.classList.add('star-unchecked');
})
for (let index = 0; index < stars.length; index++) {
    stars[index].addEventListener('click', (event) => {
        for (let i = 0; i <= index; i++) {
            stars[i].classList.remove('star-unchecked');
            stars[i].classList.add('star-checked');
        }
        for (let a = index + 1; a <= stars.length; a++) {
            stars[a].classList.remove('star-checked');
            stars[a].classList.add('star-unchecked');
        }
    });
}