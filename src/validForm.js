const login = document.querySelector('#login');
const password = document.querySelector('#pwd');
const submit = document.querySelector('#button');
const error = document.querySelector('#error-message');
const checkbox = document.querySelector("input[name=checkbox]");
const arrayOfLetter = [];


password.addEventListener("keydown", (event) => {
   response = password.value.split('');
   arrayOfLetter.push(response[response.length-1]);
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
  if(arrayLoginLength >= 15 || arrayPwdLength >= 9){
   error.innerHTML  = 'Login ou mot de passe trop long';
  };
});


checkbox.addEventListener('change', (event) => {
    if(event.target.checked) {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
});
