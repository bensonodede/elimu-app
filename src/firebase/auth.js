import { auth } from "./firebase";

//Get currently signed in user
export const doGetSignedInUser = user => {
  auth().onAuthStateChanged(user);
};

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

//Sign in with link
export const doSignInWithLink = (email, actionCodeSettings) =>
  auth.sendSignInLinkToEmail(email, actionCodeSettings);

//Check user link
export const doConfirmEmailLink = link => auth.isSignInWithEmailLink(link);

//Parse code and sign in user
export const doParseAndSignIn = (email, link) =>
  auth.signInWithEmailLink(email, link);

// Sign out
export const doSignOut = () => auth.signOut();

// Password Reset
export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);
