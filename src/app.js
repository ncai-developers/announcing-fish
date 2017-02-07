import * as firebase from 'firebase';
import { Router, Redirect } from 'aurelia-router';
import { inject } from 'aurelia-dependency-injection';

@inject(Router)
export class App {
  configureRouter(config, router) {
    let commonSettings = {
      nav: true,
      settings: {
        auth: true
      }
    };
    config.title = 'Aurelia';
    config.addAuthorizeStep(new AuthorizeStep);
    config.map([
      {
        route: '',
        redirect: 'welcome'
      },{
        route: 'welcome',
        name: 'welcome',
        moduleId: 'elements/welcome',
        title: 'Welcome',
        ...commonSettings
      },{
        route: 'create',
        name: 'create',
        moduleId: 'elements/create',
        title: 'Create',
        ...commonSettings
      },{
        route: 'login',
        name: 'login',
        moduleId: 'elements/login',
        title: 'Login'
      },{
        route: 'upload',
        name: 'upload',
        moduleId: 'elements/upload',
        title: 'upload',
        ...commonSettings
      },{
        route: 'users',
        name: 'users',
        moduleId: 'elements/users',
        title: 'Github Users',
        ...commonSettings
      },{
        route: 'child-router',
        name: 'child-router',
        moduleId: 'elements/child-router',
        title: 'Child Router',
        ...commonSettings
      }
    ]);
  }

  constructor(router){
    this.router = router;

    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyAxk6A0H-es83mp70sW5Q08RqV0arF8y4Q",
      authDomain: "announcing-fish.firebaseapp.com",
      databaseURL: "https://announcing-fish.firebaseio.com",
      storageBucket: "announcing-fish.appspot.com",
      messagingSenderId: "575315045808"
    });

    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        this.router.navigate('welcome');
      } else {
        // No user is signed in.
        this.router.navigate('login');
      }
    });
  }

  logout(){
    // Self-explanatory signout code
    firebase.auth().signOut().then(() => {
      console.log('logout');
    }).catch(console.error);
  }
}

class AuthorizeStep {
  run(navigationInstruction, next) {

    if (navigationInstruction.getAllInstructions().some(i => i.config.settings.auth) ) {

        console.log('route');
      if (!firebase.auth().currentUser) {
        return next.cancel(new Redirect('login'));
      }
    }

    return next();
  }
}
