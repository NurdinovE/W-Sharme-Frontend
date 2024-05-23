// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDEZDpjByEJL9RDq6COC1u9AfcVUj1BVO8',
  authDomain: 'w-sharme-test.firebaseapp.com',
  projectId: 'w-sharme-test',
  storageBucket: 'w-sharme-test.appspot.com',
  messagingSenderId: '530055876323',
  appId: '1:530055876323:web:d28f70b53bb95be6113fd6',
  measurementId: 'G-G3YWYPB7K1'
}
console.log(import.meta.env.VITE_API_KEY)

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
//   measurementId: 'G-G3YWYPB7K1'
// }
// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

// const analytics = getAnalytics(app)
