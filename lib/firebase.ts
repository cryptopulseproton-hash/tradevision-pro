import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDS2DU4ivdEmVik0Zpjes95Yo4BZzKhUk8",
  authDomain: "tradevision-pro-933e7.firebaseapp.com",
  projectId: "tradevision-pro-933e7",
  storageBucket: "tradevision-pro-933e7.firebasestorage.app",
  messagingSenderId: "798286624275",
  appId: "1:798286624275:web:61ed200007eb4e993071e6",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
