import Firebase from 'firebase/app';
import Database from 'firebase/database';

let app = Firebase.initializeApp({
    apiKey: "AIzaSyB-DHfF7YCjPJFTSU5F4VA7C8bsSQ8nW-8",
    authDomain: "todo-24d31.firebaseapp.com",
    projectId: "todo-24d31",
    storageBucket: "todo-24d31.appspot.com",
    messagingSenderId: "214384833590",
    appId: "1:214384833590:web:1221cdc29ae5b6d6505497"
  });

export default app;