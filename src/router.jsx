import App from './App'
import SignUp from './componenets/signup';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';
import Login from './componenets/login';


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
    return(
        <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<SignUp getAuth={getAuth} />}></Route>
          <Route path='/login' element={<Login getAuth={getAuth}/>}></Route>
          <Route path={'/home'} element={<App/>}></Route>
        </Routes>
      </BrowserRouter>
    )
}