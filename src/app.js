import {Router} from 'aurelia-router';
import {inject} from 'aurelia-dependency-injection';
import { Login } from './resources/elements/login/login';

@inject(Router, Login)
export class App {
  constructor(router, login) {
    this.logout = ()=>{ login.logout() };
    this.router = router;
    this.router.configure(config => {
      config.title = 'Announcing Fish Admin';
      config.map([
        {
          route: '',
          redirect: 'home'
        }, {
          route: 'home',
          name: 'home',
          moduleId: 'resources/elements/home/home',
          nav: true, title: 'Home',
          settings: {
            classes: 'fa-dashboard'
          }
        }, {
          route: 'upload',
          moduleId: 'resources/elements/upload/upload',
          nav: true, title: 'Upload Announcements',
          settings: {
            classes: 'fa-edit'
          }
        }
      ]);
    });
    console.log(this.logout);
    $('#side-menu').metisMenu();
    $(window).bind('load resize', function() {
      let topOffset = 50;
      let width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
      if (width < 768) {
        $('div.navbar-collapse').addClass('collapse');
        topOffset = 100; // 2-row-menu
      } else {
        $('div.navbar-collapse').removeClass('collapse');
      }

      let height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
      height = height - topOffset;
      if (height < 1) height = 1;
      if (height > topOffset) {
        $('#page-wrapper').css('min-height', (height) + 'px');
      }
    });
  }
}
