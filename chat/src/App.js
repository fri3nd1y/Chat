import React from 'react';
import './App.css';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'

import apiKey from '../config/apiKey'

firebase.initializeApp({
  apiKey: apiKey,
  authDomain: "chat-d3d17.firebaseapp.com",
  databaseURL: "https://chat-d3d17.firebaseio.com",
  projectId: "chat-d3d17",
  storageBucket: "chat-d3d17.appspot.com",
  messagingSenderId: "930362018808",
  appId: "1:930362018808:web:57bc60ed84ecb5c08ea40d",
  measurementId: "G-6N1YCWZLMJ"
})

const auth = firebase.auth();
const firestore = firebase.firestore();




function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
    </div>
  );
}

export default App;
