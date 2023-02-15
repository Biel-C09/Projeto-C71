import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBPzWCTxQp2MQlTTwPx-oAirrCIO1KKoDs",
  authDomain: "ciclista-eletronico-46a1a.firebaseapp.com",
  databaseURL: "https://ciclista-eletronico-46a1a-default-rtdb.firebaseio.com",
  projectId: "ciclista-eletronico-46a1a",
  storageBucket: "ciclista-eletronico-46a1a.appspot.com",
  messagingSenderId: "774623024671",
  appId: "1:774623024671:web:649aa95f018c6e4b79a72a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
