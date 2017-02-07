import { Aurelia, bindable } from 'aurelia-framework';
import { inject } from 'aurelia-dependency-injection';
import * as firebase from 'firebase';
import { Router } from 'aurelia-router';

@inject(Aurelia, Router)
export class Login {
  @bindable email = '';
  @bindable password = '';
  @bindable message = '';

  constructor(aurelia, router){
    this.aurelia = aurelia;
    this.router = router;

    // // Initialize Firebase
    // this.firebaseConfig = {
    //   apiKey: "AIzaSyAxk6A0H-es83mp70sW5Q08RqV0arF8y4Q",
    //   authDomain: "announcing-fish.firebaseapp.com",
    //   databaseURL: "https://announcing-fish.firebaseio.com",
    //   storageBucket: "announcing-fish.appspot.com",
    //   messagingSenderId: "575315045808"
    // };
    // firebase.initializeApp(this.firebaseConfig);

    firebase.auth().onAuthStateChanged( user => {
      this.userLoggedIn = user ? true : false;
      console.log(user);
      this.firebaseUser = user;
      if (this.userLoggedIn) {
        this.router.navigate('welcome');
      } else {
        // No user is signed in.
        this.router.navigate('login');
      }
    });
  }
  signup(){
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch( error => {
      // Handle Errors here.
      this.message = error.message;
      console.error(error);
    });
  }

  login(){
    // Call the Firebase signin method for our provider
    // then take the successful or failed result and deal with
    // it accordingly.
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then( result => {
        // The token for this session
        this.authToken = result.credential.accessToken;

        // The user object containing information about the current user
        this.firebaseUser = result.user;

        // Set a class variable to true to state we are logged in
        this.userLoggedIn = true;
    }).catch(error => {
        this.message = error;

        console.error(error);
    });
  }

  logout() {
    // Self-explanatory signout code
    firebase.auth().signOut().then(() => {
      this.userLoggedIn = false;
    }).catch(console.error);
  }
}
