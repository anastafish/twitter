import { useState } from "react"
import '../styles/signup.css'
import { getAuth, createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";



export default function SignUp(props){
    const provider = new GoogleAuthProvider();

    function googleSign(){
            signInWithPopup(auth, provider)
            .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              console.log('signed in successfully')
              window.open('/home', '_self')
              // ...
            }).catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.customData.email;
              // The AuthCredential type that was used.
              const credential = GoogleAuthProvider.credentialFromError(error);
              // ...
            });

    }

    function emailSign(){
        createUserWithEmailAndPassword(auth, signUp.email, signUp.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('signed in successfully')
            window.open('/home', '_self')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
        }

    function handleChange(event){
        const {value, name}  = event.target
        setSignUp(prevValue => ({
            ...prevValue,
            [name]:value
        }))
       }
       const  [signUp, setSignUp] = useState({
        email:"",
        password:""
       })  
       const auth = props.getAuth();

    return( 
        <div className="signup-container">
            <img src="../../images/twitterLogo.png" alt="" />
            <h1>Join twitter today</h1>
            <div onClick={googleSign} className="google-sign">
                <img src="../../images/google.png" alt="" />
                <button>Sign up with Google</button>
            </div>
            <h2>Or sign Up with email</h2>
            <div className="email-sign">
                <input placeholder="Email" onChange={handleChange} name='email' value={signUp.email} type="email" />
                    <input placeholder="password" onChange={handleChange} value={signUp.password} type="password" name="password"/>
                    <button onClick={emailSign}>Sign Up</button>
            </div>
            <div className="para">
                <p>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
                <p>Have an account already? <a href="/login">Log in</a></p>
            </div>
        </div>
    )
}

