import App from './App'
import SignUp from './componenets/signup';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';
import Login from './componenets/login'
import Explore from './componenets/explore';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, doc, setDoc} from "firebase/firestore"; 



export default function Router(){
    const firebaseConfig = {
        apiKey: "AIzaSyDfYldWxHvI4xc3P3y6cV_2lWGDzHdAke0",
        authDomain: "twitter-34612.firebaseapp.com",
        projectId: "twitter-34612",
        storageBucket: "twitter-34612.appspot.com",
        messagingSenderId: "602369620957",
        appId: "1:602369620957:web:4aaca32ee1c5ba78191434"
      };
      
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const db = getFirestore(app)
     
    return(
        <BrowserRouter >
        <Routes>
          <Route path={'/signup'} element={<SignUp app={app} getAuth={getAuth} />}></Route>
          <Route path='/login' element={<Login app={app} getAuth={getAuth}/>}></Route>
          <Route path={'/'} element={<App db={db} app={app} getAuth={getAuth}/>}></Route>
          <Route path={'/explore'} element={<Explore/>}></Route>
        </Routes>
      </BrowserRouter>
    )
}