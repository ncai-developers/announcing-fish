import {Aurelia, bindable} from 'aurelia-framework';
import {inject} from 'aurelia-dependency-injection';

@inject(Aurelia)
export class Login {
  constructor(aurelia){
    this.aurelia = aurelia;

    // Initialize Firebase
    this.firebaseConfig = {
      apiKey: "AIzaSyAxk6A0H-es83mp70sW5Q08RqV0arF8y4Q",
      authDomain: "announcing-fish.firebaseapp.com",
      databaseURL: "https://announcing-fish.firebaseio.com",
      storageBucket: "announcing-fish.appspot.com",
      messagingSenderId: "575315045808"
    };
    firebase.initializeApp(this.firebaseConfig);

    firebase.auth().onAuthStateChanged(function(user) {
      this.userLoggedIn = user ? true : false;
      this.firebaseUser = user;
      if (this.userLoggedIn) {
        this.aurelia.setRoot('app');
      } else {
        // No user is signed in.
      }
    }.bind(this));
  }

  login(){
    // Call the Firebase signin method for our provider
    // then take the successful or failed result and deal with
    // it accordingly.
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
        // The token for this session
        this.authToken = result.credential.accessToken;

        // The user object containing information about the current user
        this.firebaseUser = result.user;

        // Set a class variable to true to state we are logged in
        this.userLoggedIn = true;
    }).catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;

        console.log(error);
    });
  }

  logout() {
    // Self-explanatory signout code
    firebase.auth().signOut().then(function(){
      this.userLoggedIn = false;
      this.aurelia.setRoot('resources/elements/login/login');
    }.bind(this)).catch(error => {
      throw new Error(error);
    });
  }
}
