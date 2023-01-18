import { useState } from "react"
import '../styles/login.css'
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";


export default function Login(props){
    const auth = getAuth(props.app);
    const provider = new GoogleAuthProvider();


    onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid)
        window.open('/home', '_self')
    } else {
        // User is signed out
        // ...
    }
    });

    function googleLogin(){
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          console.log('signed in successfully')
          const user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;            
          console.log('error')
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });

}

    function handleChange(event){
        const {value, name}  = event.target
        setLogin(prevValue => ({
            ...prevValue,
            [name]:value
        }))
       }
       const  [login, setLogin] = useState({
        email:"",
        password:""
       })
       
       function emailLogin(){
        signInWithEmailAndPassword(auth, login.email, login.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

        })
        .catch((error) => {            
            const errorCode = error.code;
            const errorMessage = error.message;
  });
       }
       
    return( 
        <div className="signup-container">
            <img src="../../images/twitterLogo.png" alt="" />
            <h1>Sign in to twitter</h1>
            <div  className="google-sign">
                <img src="../../images/google.png" alt="" />
                <button onClick={googleLogin}>Sign in with Google</button>
            </div>
            <h2>Or</h2>
            <div className="email-sign">
                <input placeholder="Email" onChange={handleChange} name='email' value={login.email} type="email" />
                    <input placeholder="password" onChange={handleChange} value={login.password} type="password" name="password"/>
                    <button onClick={emailLogin}>Sign in</button>
            </div>
            <p>Don't have an account? <a href="/">Sign up</a></p>
        </div>
    )
}
 