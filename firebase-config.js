// ---------------------------------------------------------------------
// ---------------------------- Maja -----------------------------------
// ---------------------------------------------------------------------

// ========== GLOBAL FIREBASE CONFIG ========== //
// Your web app's Firebase configuration
const _firebaseConfig = {
    apiKey: "AIzaSyBUAGKJkWY-zx735_4nd5fEmtsK1Rc7VnM",
    authDomain: "webapp-partygames.firebaseapp.com",
    databaseURL: "https://webapp-partygames.firebaseio.com",
    projectId: "webapp-partygames",
    storageBucket: "webapp-partygames.appspot.com",
    messagingSenderId: "950138706773",
    appId: "1:950138706773:web:4859e493ee283961e0addc"
};
// Initialize Firebase and database references
firebase.initializeApp(_firebaseConfig);
const _db = firebase.firestore();