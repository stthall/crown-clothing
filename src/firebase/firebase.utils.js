import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCrwMvCyfqHJaIb1pC6M6B9KSa4GT-S9HA",
  authDomain: "crown-clothing-2e4ba.firebaseapp.com",
  databaseURL: "https://crown-clothing-2e4ba.firebaseio.com",
  projectId: "crown-clothing-2e4ba",
  storageBucket: "crown-clothing-2e4ba.appspot.com",
  messagingSenderId: "784087827528",
  appId: "1:784087827528:web:c9ab33d364064d2c05047d"
}

Firebase.initializeApp(config)

export const auth = Firebase.auth()
export const firestore = Firebase.firestore()

const provider = new Firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default Firebase