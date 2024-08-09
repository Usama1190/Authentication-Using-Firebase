import { auth, signInWithEmailAndPassword } from "../firebase.js";

let formField = document.querySelectorAll('form input');

const [loginEmail, loginPassword] = formField;

let login_btn = document.getElementById('login_btn');

const login = () => {
    event.preventDefault();

    login_btn.innerText = 'Loading...';

    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
        // Signed in 
        login_btn.innerText = 'Login';

        const user = userCredential.user;
        console.log(user);
        
        // ...

        Toastify({
            text: 'Login Successfully!',
            duration: 3000
        }).showToast();
    })
    .catch((error) => {
        login_btn.innerText = 'Login';

        const errorCode = error.code;
        const errorMessage = error.message;

        Toastify({
            text: `${errorMessage}`,
            duration: 3000
        }).showToast();
    });

    
}

login_btn.addEventListener('click', login);