const mainTitle = document.querySelector('#main-title');
const message = "Avengers";
let i = 0;
const nbChar = message.length;
const cursor = '|'

const afficheMessageLettreParLettre = (message) => {
  const newArraySplit = message.split('');
  if(i < nbChar){
    mainTitle.innerHTML += newArraySplit[i++];
  }else{
    //clearInterval(refreshLetter);
    mainTitle.innerHTML = '';
    i = 0;
  };
};

const refreshLetter = setInterval(afficheMessageLettreParLettre, 350, message);


