const mainTitle = document.querySelector('#main-title');
const message = "avengers";

let i = 0;
const nbChar = message.length;
const afficheMessageLettreParLettre = (message) => {
  const newArraySplit = message.split('');
  if(i < nbChar){
    //console.log(newArraySplit[i++]);
    mainTitle.innerHTML += newArraySplit[i++];
  }else{
    clearInterval(refreshLetter);
  };
};

const refreshLetter = setInterval(afficheMessageLettreParLettre, 350, message);


