import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'KIT';
    config.map([
      { route: '', moduleId: 'app',   title: 'Kit', name: 'kit'},
      { route: 'post/:id',  moduleId: './post-detail', title: 'Post', name:'post-detail' }
    ]);

    this.router = router;
  }
}