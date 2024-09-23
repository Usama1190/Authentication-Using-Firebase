import { auth, createUserWithEmailAndPassword, onAuthStateChanged } from "../firebase.js";


let formField = document.querySelectorAll('form input');

const [ userEmail, userPassword, confirm_passwrod ] = formField;

let signup_btn = document.getElementById('signup_btn');

let form = document.getElementById('form');
let loader = document.getElementById('loader');
loader.style.display = 'none';

const signUp = () => {
    event.preventDefault();
    loader.style.display = 'flex';
    form.style.opacity = 0.3;
    
    if(userPassword.value === confirm_passwrod.value) {
        createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
        .then((userCredential) => {
            loader.style.display = 'none';
            form.style.opacity = 1;
            const user = userCredential.user;

            warning.innerText = '';

            Toastify({
                text: 'Signup Successfully!',
                duration: 3000
            }).showToast();
            
            // ...
        })
        .catch((error) => {
            loader.style.display = 'none';
            form.style.opacity = 1;
            const errorCode = error.code;
            const errorMessage = error.message;

            warning.innerText = 'invalid input field!';

            Toastify({
                text: `${errorMessage}`,
                duration: 3000
            }).showToast();
            
            // ..
        });
    }
    else {
        signup_btn.innerText = 'Signup';
        warning.innerText = "confirm password does't matched!";
        loader.style.display = 'none';
        form.style.opacity = 1;
    }    
}

signup_btn.addEventListener('click', signUp);


onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = '../dashboard/dashboard.html';
    }
});