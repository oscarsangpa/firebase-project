import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useRoute } from "../hooks/useRoutes";
const provider = new GoogleAuthProvider();
const auth = getAuth();


export default function Login() {
  const {setRoute } = useRoute()

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    
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
  return (
    <div className="flex flex-col text-center">
      <h1 className='text-2xl'>Login</h1>
      <p>Click here to login with Google</p>
      <button 
        className='bg-sky-700 px-5 py-2 rounded text-gray-200'
        onClick={loginWithGoogle}
        >Login</button>
        <p>{"Yo don't have an account?"} 
          <span
          className="cursor-pointer hover:text-sky-400"
          onClick={() => setRoute("register")}>
            Click here</span></p>
        
    </div>
  )
}
