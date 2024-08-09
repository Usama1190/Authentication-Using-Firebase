import { auth, createUserWithEmailAndPassword } from "../firebase.js";


let formField = document.querySelectorAll('form input');

const [ userEmail, userPassword ] = formField;

let signup_btn = document.getElementById('signup_btn');

const signUp = () => {
    event.preventDefault();

    console.log(userEmail.value, userPassword.value);
    
}

signup_btn.addEventListener('click', signUp);