/*import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithRedirect(auth, googleProvider);
};

export const signUpWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw new Error(`Error ${errorCode}: ${errorMessage}`);
  }
};

export const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw new Error(`Error ${errorCode}: ${errorMessage}`);
  }
};

export const signOutUser = () => {
  return signOut(auth);
};

export const useAuth = (callback) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      callback(user);
    });
    return () => unsubscribe();
  }, [callback]);
}; */

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; // Import the initialized auth instance

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithRedirect(auth, googleProvider);
};

export const signUpWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw new Error(`Error ${errorCode}: ${errorMessage}`);
  }
};

export const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw new Error(`Error ${errorCode}: ${errorMessage}`);
  }
};

export const signOutUser = () => {
  return signOut(auth);
};

export const useAuth = (callback) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      callback(user);
    });
    return () => unsubscribe();
  }, [callback]);
};