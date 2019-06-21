const photo1 = document.querySelector('#photo1 img');

photo1.addEventListener("mouseover", (event) => {
  photo1.classList.add('shadow');
});

photo1.addEventListener("mouseout", (event) => {
  photo1.classList.remove('shadow');
});

photo1.addEventListener("click", (event) => {
  photo1.classList.add('round-photo');
});


const photo2 = document.querySelector('#photo2 img');
photo2.addEventListener("click", (event) => {
  photo2.classList.remove('round-photo');
});
