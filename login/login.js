import { auth, sendPasswordResetEmail  , signInWithEmailAndPassword, onAuthStateChanged } from "../firebase.js";

let formField = document.querySelectorAll('form input');

const [loginEmail, loginPassword] = formField;

let forgotPassword = document.getElementById('forgotPassword');
let warning = document.getElementById('warning');
let login_btn = document.getElementById('login_btn');

let form = document.getElementById('form');
let loader = document.getElementById('loader');
loader.style.display = 'none';

const login = () => {
    event.preventDefault();
    loader.style.display = 'flex';
    form.style.opacity = 0.3;

    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
        // Signed in 
        loader.style.display = 'none';
        form.style.opacity = 1;

        const user = userCredential.user;
        console.log(user);
        
        // ...
        warning.innerText = '';

        Toastify({
            text: 'Login Successfully!',
            duration: 3000
        }).showToast();
    })
    .catch((error) => {
        loader.style.display = 'none';
        form.style.opacity = 1;

        const errorCode = error.code;
        const errorMessage = error.message;

        warning.innerText = 'invalid input field';

        Toastify({
            text: `${errorMessage}`,
            duration: 3000
        }).showToast();
    });

    
}

login_btn.addEventListener('click', login);



const forgotPass = () => {
    sendPasswordResetEmail(auth, loginEmail.value)
    .then(() => {
        warning.innerText = 'Password send check email';
        Toastify({
            text: 'Password send check email',
            duration: 3000
        }).showToast();
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        warning.innerText = 'Something went wrong!';
        Toastify({
            text: `${errorMessage}`,
            duration: 3000
        }).showToast();
    });
};

forgotPassword.addEventListener('click', forgotPass);





onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = '../dashboard/dashboard.html';
    }
});