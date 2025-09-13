import {initializeApp} from "firebase/app"



const firebaseConfig = {
  apiKey: "AIzaSyCVb-RW61ecku5XEjg-bggwazqj7UXiNXk",
  authDomain: "e-commerce-87726.firebaseapp.com",
  projectId: "e-commerce-87726",
  storageBucket: "e-commerce-87726.firebasestorage.app",
  messagingSenderId: "1041215897921",
  appId: "1:1041215897921:web:cd6be1fccf37e2ae4421c0",
  measurementId: "G-K2BY97J6G2",
  dataBaseURL: "https://e-commerce-87726-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);