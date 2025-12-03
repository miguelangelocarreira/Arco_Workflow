import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAc_AA-eVoBy-8nOIiAd4jm5YPlZ6MM5HM",
  authDomain: "arcoworkflow-09203615-de0d1.firebaseapp.com",
  projectId: "arcoworkflow-09203615-de0d1",
  storageBucket: "arcoworkflow-09203615-de0d1.firebasestorage.app",
  messagingSenderId: "412018727946",
  appId: "1:412018727946:web:82a8db3d07074f8cfb13f3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);