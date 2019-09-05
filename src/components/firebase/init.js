import firebase from 'firebase';
//import firestore from 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyBraw6JzQmxDZrsTIFZAga4g0mP1rPx5ts",
    authDomain: "smoothies-vue-proj.firebaseapp.com",
    databaseURL: "https://smoothies-vue-proj.firebaseio.com",
    projectId: "smoothies-vue-proj",
    storageBucket: "smoothies-vue-proj.appspot.com",
    messagingSenderId: "63131953638",
    appId: "1:63131953638:web:bb2db509eeb98e31"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  //firebaseApp.firestore().settings({timestampsInSnapshots:true}
  export default firebaseApp.firestore()
  