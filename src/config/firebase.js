import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  // 各人の認証情報を記述
  apiKey: "AIzaSyAsnrHhnebWnk4DAS_tqf19j26pfSbELq0",
  authDomain: "chat-app2-f0481.firebaseapp.com",
  databaseURL: "https://chat-app2-f0481.firebaseio.com",
  projectId: "chat-app2-f0481",
  storageBucket: "chat-app2-f0481.appspot.com",
  messagingSenderId: "388600950483",
  appId: "1:388600950483:web:abe2b245b3401d09a52e26",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
