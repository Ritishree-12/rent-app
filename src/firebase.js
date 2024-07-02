import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAcf_z_9a-4jwexYDpVgNdjX97_f2txpAw",
    authDomain: "whatsapp-clone-6b572.firebaseapp.com",
    projectId: "whatsapp-clone-6b572",
    storageBucket: "whatsapp-clone-6b572.appspot.com",
    messagingSenderId: "847315733317",
    appId: "1:847315733317:web:822b2855f80e1718068c2c",
    measurementId: "G-F5ECDVM17E"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};


// keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
// Enter keystore password:123456  
// Keystore password is too short - must be at least 6 characters
// Enter keystore password:123456
// Re-enter new password:
// What is your first and last name?
//   [Unknown]:  Ritishree Gochhayat
// What is the name of your organizational unit?
//   [Unknown]:  bbsr
// What is the name of your organization?
//   [Unknown]:  bbsr
// What is the name of your City or Locality?
//   [Unknown]:  bbsr
// What is the name of your State or Province?
//   [Unknown]:  odisha
// What is the two-letter country code for this unit?
//   [Unknown]:  IN
// Is CN=Ritishree Gochhayat, OU=bbsr, O=bbsr, L=bbsr, ST=odisha, C=IN correct?
//   [no]:

// Generating 2,048 bit RSA key pair and self-signed certificate (SHA256withRSA) with a validity of 10,000 days
//         for: CN=Ritishree Gochhayat, OU=bbsr, O=bbsr, L=bbsr, ST=odisha, C=IN
// [Storing my-release-key.keystore]  