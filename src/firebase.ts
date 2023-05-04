// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB4eyjdZFdM-97YeyTqAGvWK6JA4xb7uKI',
  authDomain: 'webscrapper-df984.firebaseapp.com',
  projectId: 'webscrapper-df984',
  storageBucket: 'webscrapper-df984.appspot.com',
  messagingSenderId: '155635837306',
  appId: '1:155635837306:web:5e29366fe20b945b7f0ec3',
  measurementId: 'G-QJM61ZFLFQ'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
