import { auth, createUserWithEmailAndPassword, onAuthStateChanged } from "../firebase.js";


let formField = document.querySelectorAll('form input');

const [ userEmail, userPassword ] = formField;

let signup_btn = document.getElementById('signup_btn');

const signUp = () => {
    event.preventDefault();
    signup_btn.innerText = 'Loading...';

    createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
    .then((userCredential) => {
        signup_btn.innerText = 'Signup';
        const user = userCredential.user;

        warning.innerText = '';

        Toastify({
            text: 'Signup Successfully!',
            duration: 3000
        }).showToast();
        
        // ...
    })
    .catch((error) => {
        signup_btn.innerText = 'Signup';
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

signup_btn.addEventListener('click', signUp);


onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = '../dashboard/dashboard.html';
    }
});