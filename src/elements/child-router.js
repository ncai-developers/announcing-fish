export class ChildRouter {
  heading = 'Child Router';

  configureRouter(config, router) {
    config.map([
      {
        route: '',
        redirect: 'welcome'
      },{
        route: 'welcome',
        name: 'welcome',
        moduleId: 'elements/welcome',
        nav: true,
        title: 'Welcome'
      },{
        route: 'users',
        name: 'users',
        moduleId: 'elements/users',
        nav: true,
        title: 'Github Users'
      },{
        route: 'child-router',
        name: 'child-router',
        moduleId: 'elements/child-router',
        nav: true,
        title: 'Child Router'
      }
    ]);

    this.router = router;
  }
}
