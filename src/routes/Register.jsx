import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const auth = getAuth();

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registerwithCredentials = () => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("email", email)
        console.log("password", password)
    }
  return (
    <div className="flex flex-col gap-2">
        <h2 className="text-center text-2xl">Register</h2>

        <form
        className="flex flex-col gap-2" 
        onSubmit={handleSubmit}>
            <label>Email</label>
            <input
                placeholder="user@email.com" 
                className="border border-gray-400 rounded-lg p-1 outline-none pl-2" type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                
                />
            <label>Password</label>
            <input
                placeholder="" 
                className="border border-gray-400 rounded-lg p-1 outline-none" type="text"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <button onClick={registerwithCredentials}>register</button>
        </form>

    </div>
  )
}
