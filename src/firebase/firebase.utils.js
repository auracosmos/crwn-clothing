import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
        apiKey: "AIzaSyDBkdSm2RdhfuV-zcqkRD6uqI2d66ZBaoo",
        authDomain: "crwn-db-6b8a6.firebaseapp.com",
        projectId: "crwn-db-6b8a6",
        storageBucket: "crwn-db-6b8a6.appspot.com",
        messagingSenderId: "173652791364",
        appId: "1:173652791364:web:686ef4cc13a03232c92c11",
        measurementId: "G-1NK95KHV4J"
    }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
