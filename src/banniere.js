const banner = document.querySelector('#banner');
const bouton = document.querySelector('#banner span');

bouton.addEventListener("click", (event) => {
  banner.style.display = 'none';
});

const displayBanner = () => {
  banner.style.display = 'block';
};

const await5Seconds = setTimeout(displayBanner, 2000);
