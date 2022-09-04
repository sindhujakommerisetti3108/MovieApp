import firebase from 'firebase/compat';

/*firebase configurations */
const firebaseConfig = {
    apiKey: "AIzaSyDrNGTtX3hZj49jlLevKj6WSU2mxgPhbFU",
    authDomain: "react-firebase-authentic-759cc.firebaseapp.com",
    projectId: "react-firebase-authentic-759cc",
    storageBucket: "react-firebase-authentic-759cc.appspot.com",
    messagingSenderId: "987010501809",
    appId: "1:987010501809:web:5f4c7250e637ee9b9b2690"
  };

  const app=firebase.initializeApp(firebaseConfig);
  const auth=app.auth();
  
 export {auth};

 
