 const menu = document.querySelector('nav');


window.addEventListener("scroll", (event) => {
if(window.scrollY > 147){
  menu.classList.add('fixed-position');
}else{
  menu.classList.remove('fixed-position');
};
});


