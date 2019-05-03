const login = document.querySelector('#login');
const password = document.querySelector('#pwd');
const submit = document.querySelector('#button');
const error = document.querySelector('#error-message');
const checkbox = document.querySelector("input[name=checkbox]");
const arrayOfLetter = [];
const regex = /[a-z]/g;

password.addEventListener("keydown", (event) => {
  response = password.value.split('');
  // if(password.value.match(regex)){

  // };
  const key = event.keyCode || event.charCode;
  if(key == 8 || key == 46){
    arrayOfLetter.splice(arrayOfLetter.length-1, 1);
  }else{
   arrayOfLetter.push(response[response.length-1]);
  };
   //error.innerHTML = password.value;
   //error.innerHTML = arrayOfLetter.length;

   error.innerHTML = arrayOfLetter;
   if(arrayOfLetter.length <= 9){
    password.classList.remove('default-password');
    password.classList.add('bad-password');
   }else{
    password.classList.remove('bad-password');
    password.classList.add('good-password');
   };
});




submit.addEventListener("click", (event) => {
  event.preventDefault();
  arrayLogin = login.value.split('');
  arrayLoginLength = arrayLogin.length;
  arrayPwd = password.value.split('');
  arrayPwdLength = arrayPwd.length;
  if(arrayLoginLength >= 15 || arrayPwdLength <= 9){
   error.innerHTML  = 'Login trop long ou mot de passe trop court';
  }else{
    error.innerHTML = 'ok';
  };
});


checkbox.addEventListener('change', (event) => {
    if(event.target.checked) {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
});
