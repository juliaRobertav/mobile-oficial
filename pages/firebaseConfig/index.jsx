import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyB_KoPJun_tRleSnEW1VWLlSvtI0M1SftA",
  authDomain: "allana2023.firebaseapp.com",
  projectId: "allana2023",
  storageBucket: "allana2023.appspot.com",
  messagingSenderId: "726563734573",
  appId: "1:726563734573:web:f4087159f58aa0d6c364a4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)
const auth = initializeAuth(app, {
  // persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export {app, db,  auth, storage}