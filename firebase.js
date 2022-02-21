// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAZXFqYHVFZfH1K5zTKHx73xW-OpOcHwso',
  authDomain: 'insta-2-beni.firebaseapp.com',
  projectId: 'insta-2-beni',
  storageBucket: 'insta-2-beni.appspot.com',
  messagingSenderId: '222281307286',
  appId: '1:222281307286:web:c3c25d756c9061d1eddeb7',
}

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }

// Teve que ir no Firebase
// Teve que ir no cloud.google.com e no projeto do insta-2 para liberar umas URL
// https://console.cloud.google.com/apis/credentials?project=insta-2-beni
