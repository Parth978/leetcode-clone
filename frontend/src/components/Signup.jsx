import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useState } from "react";
import { app } from "../util/Firebase";

export const SignUp = () => {
    const [email, setEmail] = useState("");
    const auth = getAuth(app);
    const actionCodeSettings = {
        url: 'http://localhost:5173',
        handleCodeInApp: true,
    };
    const onSignUp = async () => {
        await sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                window.localStorage.setItem('emailForSignIn', email);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }

return (
    <>
        <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <button onClick={onSignUp}>sign up</button>
    </>
)
}