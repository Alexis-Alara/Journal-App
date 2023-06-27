import { updateProfile, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { FirebaseAuth } from './config'


const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async() => {
    try{
        const result = await signInWithPopup( FirebaseAuth, googleProvider )
        // const credentials = GoogleAuthProvider.credentialFromResult( result )
        // console.log({credentials})
        const { displayName, email, photoURL, uid } = result.user

        return {
            ok: true,
            //user info
            displayName, email, photoURL, uid
        }
    } catch ( error ){
        
        const errorCode = error.code
        const errorMessage = error.message
        // //The email of the users account used
        // const email = error.customData.email
        // //The AuthCredential type was used
        // const credential = GoogleAuthProvider.credentialFromError(error)

        return {
            ok: false,
            errorMessage
        }
    }
}


export const registerUserWithEmailPassword = async ({email, password, displayName}) => {
    try{
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, photoURL } = resp.user
        
        await updateProfile( FirebaseAuth.currentUser, { displayName } )

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch ( error ){
        
        // const errorCode = error.code
        const errorMessage = error.message
        // //The email of the users account used
        // const email = error.customData.email
        // //The AuthCredential type was used
        // const credential = GoogleAuthProvider.credentialFromError(error)

        return {
            ok: false,
            errorMessage
        }
    }
}