const listOfStars = document.querySelectorAll('#list-of-stars li');
const star1 = document.querySelector('#star1');
const response = document.querySelector('.test');



listOfStars.forEach((star) => {
  star.classList.add('star-unchecked');
});

for(let i = 0; i <= listOfStars.length; i++){
  listOfStars[i].addEventListener('click', (event) => {
    for(let a = 0; a <= i; a++){
      listOfStars[a].classList.remove('star-unchecked');
      listOfStars[a].classList.add('star-checked');
    };
    for(let b = i; b <= listOfStars.length - (i); b++){

      listOfStars[b+1].classList.remove('star-checked');
      listOfStars[b+1].classList.add('star-unchecked');
    };
    response.innerHTML = 'stars:' + (i + 1);
  });
}
