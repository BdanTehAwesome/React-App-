import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBNdJBcGzwbqLC-d4C-EzW_zrCqgEOtJEg",
    authDomain: "react-test-project-1f51b.firebaseapp.com",
    databaseURL: "https://react-test-project-1f51b.firebaseio.com",
    projectId: "react-test-project-1f51b",
    storageBucket: "",
    messagingSenderId: "499660206132",
    appId: "1:499660206132:web:d4f70841a4ed615a22da61",
    measurementId: "G-XC4BDF7N1B"
  };

  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
  
      this.auth = app.auth();
    }
  
    // *** Auth API ***
  
    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);
  
    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
  
    doSignOut = () => this.auth.signOut();
  
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  }
  
  export default Firebase;