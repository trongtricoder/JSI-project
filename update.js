import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCk83Hb2_sp8IMxwrQqBSmwvX4aEsydAsY",
    authDomain: "jsi-project-7c0f8.firebaseapp.com",
    projectId: "jsi-project-7c0f8",
    storageBucket: "jsi-project-7c0f8.appspot.com",
    messagingSenderId: "439960833178",
    appId: "1:439960833178:web:f913f98faca85b1159a323"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const user = auth.currentUser;

function updateUserProfile(user){
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;
    console.log(userEmail)

    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userProfilePicture").textContent = userProfilePicture;
}

onAuthStateChanged(auth, (user) => {
    if (user){
        updateUserProfile(user);
        const uid = user.uid;
        return uid;
    }
    else {
        alert("Create Account and Login");
    }
})