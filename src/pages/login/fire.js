import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAxK3M3FhnpjvZCb9K-8IFW7V3N0QWZwsk",
    authDomain: "succourance-ee601.firebaseapp.com",
    projectId: "succourance-ee601",
    storageBucket: "succourance-ee601.appspot.com",
    messagingSenderId: "205897395861",
    appId: "1:205897395861:web:6f9a219b4d91ef84bbb59c"
  };

  const fire= firebase.initializeApp(firebaseConfig);

  export default fire;