define('app',['exports', 'aurelia-router', 'aurelia-dependency-injection', './resources/elements/login/login'], function (exports, _aureliaRouter, _aureliaDependencyInjection, _login) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var App = exports.App = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaRouter.Router, _login.Login), _dec(_class = function App(router, login) {
    _classCallCheck(this, App);

    this.logout = function () {
      login.logout();
    };
    this.router = router;
    this.router.configure(function (config) {
      config.title = 'Announcing Fish Admin';
      config.map([{
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
      }]);
    });
    console.log(this.logout);
    $('#side-menu').metisMenu();
    $(window).bind('load resize', function () {
      var topOffset = 50;
      var width = this.window.innerWidth > 0 ? this.window.innerWidth : this.screen.width;
      if (width < 768) {
        $('div.navbar-collapse').addClass('collapse');
        topOffset = 100;
      } else {
        $('div.navbar-collapse').removeClass('collapse');
      }

      var height = (this.window.innerHeight > 0 ? this.window.innerHeight : this.screen.height) - 1;
      height = height - topOffset;
      if (height < 1) height = 1;
      if (height > topOffset) {
        $('#page-wrapper').css('min-height', height + 'px');
      }
    });
  }) || _class);
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    longStackTraces: _environment2.default.debug,
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot('resources/elements/login/login');
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('resources/elements/home/home',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Home = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor;

  var Home = exports.Home = (_class = function () {
    function Home() {
      _classCallCheck(this, Home);

      _initDefineProp(this, 'value', _descriptor, this);
    }

    Home.prototype.valueChanged = function valueChanged(newValue, oldValue) {};

    return Home;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'value', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('resources/elements/upload/upload',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Upload = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor;

  var Upload = exports.Upload = (_class = function () {
    function Upload() {
      _classCallCheck(this, Upload);

      _initDefineProp(this, 'value', _descriptor, this);

      this.value = 'upload Announcements';
    }

    Upload.prototype.valueChanged = function valueChanged(newValue, oldValue) {};

    return Upload;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'value', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('resources/elements/login',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Login = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor;

  var Login = exports.Login = (_class = function () {
    function Login() {
      _classCallCheck(this, Login);

      _initDefineProp(this, 'value', _descriptor, this);
    }

    Login.prototype.valueChanged = function valueChanged(newValue, oldValue) {};

    return Login;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'value', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('resources/elements/login/login',['exports', 'aurelia-framework', 'aurelia-dependency-injection'], function (exports, _aureliaFramework, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Login = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Login = exports.Login = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaFramework.Aurelia), _dec(_class = function () {
    function Login(aurelia) {
      _classCallCheck(this, Login);

      this.aurelia = aurelia;

      this.firebaseConfig = {
        apiKey: "AIzaSyAxk6A0H-es83mp70sW5Q08RqV0arF8y4Q",
        authDomain: "announcing-fish.firebaseapp.com",
        databaseURL: "https://announcing-fish.firebaseio.com",
        storageBucket: "announcing-fish.appspot.com",
        messagingSenderId: "575315045808"
      };
      firebase.initializeApp(this.firebaseConfig);

      firebase.auth().onAuthStateChanged(function (user) {
        this.userLoggedIn = user ? true : false;
        this.firebaseUser = user;
        if (this.userLoggedIn) {
          this.aurelia.setRoot('app');
        } else {}
      }.bind(this));
    }

    Login.prototype.login = function login() {
      var _this = this;

      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(function (result) {
        _this.authToken = result.credential.accessToken;

        _this.firebaseUser = result.user;

        _this.userLoggedIn = true;
      }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

        console.log(error);
      });
    };

    Login.prototype.logout = function logout() {
      firebase.auth().signOut().then(function () {
        this.userLoggedIn = false;
        this.aurelia.setRoot('resources/elements/login/login');
      }.bind(this)).catch(function (error) {
        throw new Error(error);
      });
    };

    return Login;
  }()) || _class);
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./resources/elements/navigation/navigation.html\"></require>\n  <require from=\"./app.css\"></require>\n  <div id=\"wrapper\">\n\n    <navigation logout.bind=\"logout\" router.bind=\"router\"></navigation>\n\n    <div id=\"page-wrapper\">\n\n      <router-view></router-view>\n\n    </div>\n    <!-- /#page-wrapper -->\n  </div>\n  <!-- /#wrapper -->\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "body {\n  background-color: #f8f8f8; }\n\n#wrapper {\n  width: 100%; }\n\n#page-wrapper {\n  padding: 100px 15px 0 15px;\n  min-height: 568px;\n  background-color: white; }\n\n@media (min-width: 768px) {\n  #page-wrapper {\n    position: inherit;\n    margin: 0 0 0 250px;\n    padding: 50px 30px 0 30px;\n    border-left: 1px solid #e7e7e7; } }\n\n.navbar-top-links {\n  margin-right: 0; }\n\n.navbar-top-links li {\n  display: inline-block; }\n\n.navbar-top-links li:last-child {\n  margin-right: 15px; }\n\n.navbar-top-links li a {\n  padding: 15px;\n  min-height: 50px; }\n\n.navbar-top-links .dropdown-menu li {\n  display: block; }\n\n.navbar-top-links .dropdown-menu li:last-child {\n  margin-right: 0; }\n\n.navbar-top-links .dropdown-menu li a {\n  padding: 3px 20px;\n  min-height: 0; }\n\n.navbar-top-links .dropdown-menu li a div {\n  white-space: normal; }\n\n.navbar-top-links .dropdown-messages,\n.navbar-top-links .dropdown-tasks,\n.navbar-top-links .dropdown-alerts {\n  width: 310px;\n  min-width: 0; }\n\n.navbar-top-links .dropdown-messages {\n  margin-left: 5px; }\n\n.navbar-top-links .dropdown-tasks {\n  margin-left: -59px; }\n\n.navbar-top-links .dropdown-alerts {\n  margin-left: -123px; }\n\n.navbar-top-links .dropdown-user {\n  right: 0;\n  left: auto; }\n\n.sidebar .sidebar-nav.navbar-collapse {\n  padding-left: 0;\n  padding-right: 0; }\n\n.sidebar .sidebar-search {\n  padding: 15px; }\n\n.sidebar ul li {\n  border-bottom: 1px solid #e7e7e7; }\n\n.sidebar ul li a.active {\n  background-color: #eeeeee; }\n\n.sidebar .arrow {\n  float: right; }\n\n.sidebar .fa.arrow:before {\n  content: \"\\f104\"; }\n\n.sidebar .active > a > .fa.arrow:before {\n  content: \"\\f107\"; }\n\n.sidebar .nav-second-level li,\n.sidebar .nav-third-level li {\n  border-bottom: none !important; }\n\n.sidebar .nav-second-level li a {\n  padding-left: 37px; }\n\n.sidebar .nav-third-level li a {\n  padding-left: 52px; }\n\n@media (min-width: 768px) {\n  .sidebar {\n    z-index: 1;\n    position: absolute;\n    width: 250px;\n    margin-top: 51px; }\n  .navbar-top-links .dropdown-messages,\n  .navbar-top-links .dropdown-tasks,\n  .navbar-top-links .dropdown-alerts {\n    margin-left: auto; } }\n\n.btn-outline {\n  color: inherit;\n  background-color: transparent;\n  transition: all .5s; }\n\n.btn-primary.btn-outline {\n  color: #428bca; }\n\n.btn-success.btn-outline {\n  color: #5cb85c; }\n\n.btn-info.btn-outline {\n  color: #5bc0de; }\n\n.btn-warning.btn-outline {\n  color: #f0ad4e; }\n\n.btn-danger.btn-outline {\n  color: #d9534f; }\n\n.btn-primary.btn-outline:hover,\n.btn-success.btn-outline:hover,\n.btn-info.btn-outline:hover,\n.btn-warning.btn-outline:hover,\n.btn-danger.btn-outline:hover {\n  color: white; }\n\n.chat {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.chat li {\n  margin-bottom: 10px;\n  padding-bottom: 5px;\n  border-bottom: 1px dotted #999999; }\n\n.chat li.left .chat-body {\n  margin-left: 60px; }\n\n.chat li.right .chat-body {\n  margin-right: 60px; }\n\n.chat li .chat-body p {\n  margin: 0; }\n\n.panel .slidedown .glyphicon,\n.chat .glyphicon {\n  margin-right: 5px; }\n\n.chat-panel .panel-body {\n  height: 350px;\n  overflow-y: scroll; }\n\n.login-panel {\n  margin-top: 25%; }\n\n.flot-chart {\n  display: block;\n  height: 400px; }\n\n.flot-chart-content {\n  width: 100%;\n  height: 100%; }\n\ntable.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc,\ntable.dataTable thead .sorting_asc_disabled,\ntable.dataTable thead .sorting_desc_disabled {\n  background: transparent; }\n\ntable.dataTable thead .sorting_asc:after {\n  content: \"\\f0de\";\n  float: right;\n  font-family: fontawesome; }\n\ntable.dataTable thead .sorting_desc:after {\n  content: \"\\f0dd\";\n  float: right;\n  font-family: fontawesome; }\n\ntable.dataTable thead .sorting:after {\n  content: \"\\f0dc\";\n  float: right;\n  font-family: fontawesome;\n  color: rgba(50, 50, 50, 0.5); }\n\n.btn-circle {\n  width: 30px;\n  height: 30px;\n  padding: 6px 0;\n  border-radius: 15px;\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.428571429; }\n\n.btn-circle.btn-lg {\n  width: 50px;\n  height: 50px;\n  padding: 10px 16px;\n  border-radius: 25px;\n  font-size: 18px;\n  line-height: 1.33; }\n\n.btn-circle.btn-xl {\n  width: 70px;\n  height: 70px;\n  padding: 10px 16px;\n  border-radius: 35px;\n  font-size: 24px;\n  line-height: 1.33; }\n\n.show-grid [class^=\"col-\"] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border: 1px solid #ddd;\n  background-color: #eee !important; }\n\n.show-grid {\n  margin: 15px 0; }\n\n.huge {\n  font-size: 40px; }\n\n.panel-green {\n  border-color: #5cb85c; }\n\n.panel-green > .panel-heading {\n  border-color: #5cb85c;\n  color: white;\n  background-color: #5cb85c; }\n\n.panel-green > a {\n  color: #5cb85c; }\n\n.panel-green > a:hover {\n  color: #3d8b3d; }\n\n.panel-red {\n  border-color: #d9534f; }\n\n.panel-red > .panel-heading {\n  border-color: #d9534f;\n  color: white;\n  background-color: #d9534f; }\n\n.panel-red > a {\n  color: #d9534f; }\n\n.panel-red > a:hover {\n  color: #b52b27; }\n\n.panel-yellow {\n  border-color: #f0ad4e; }\n\n.panel-yellow > .panel-heading {\n  border-color: #f0ad4e;\n  color: white;\n  background-color: #f0ad4e; }\n\n.panel-yellow > a {\n  color: #f0ad4e; }\n\n.panel-yellow > a:hover {\n  color: #df8a13; }\n\n.timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none; }\n\n.timeline:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #eeeeee; }\n\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175); }\n\n.timeline > li > .timeline-panel:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc; }\n\n.timeline > li > .timeline-panel:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff; }\n\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999; }\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right; }\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0; }\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0; }\n\n.timeline-badge.primary {\n  background-color: #2e6da4 !important; }\n\n.timeline-badge.success {\n  background-color: #3f903f !important; }\n\n.timeline-badge.warning {\n  background-color: #f0ad4e !important; }\n\n.timeline-badge.danger {\n  background-color: #d9534f !important; }\n\n.timeline-badge.info {\n  background-color: #5bc0de !important; }\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit; }\n\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0; }\n\n.timeline-body > p + p {\n  margin-top: 5px; }\n\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px; }\n  ul.timeline > li > .timeline-panel {\n    width: calc(10%);\n    width: -moz-calc(10%);\n    width: -webkit-calc(10%); }\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0; }\n  ul.timeline > li > .timeline-panel {\n    float: right; }\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0; }\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0; } }\n"; });
define('text!resources/elements/navigation/navigation.html', ['module'], function(module) { module.exports = "<template bindable=\"router, logout\">\n  <!-- Navigation -->\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"index.html\">\n        <i class=\"fa fa-home\"></i>\n        <span>${router.title}</span>\n      </a>\n    </div>\n      <!-- /.navbar-header -->\n\n    <ul class=\"nav navbar-top-links navbar-right\">\n      <li class=\"dropdown\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n          <i class=\"fa fa-envelope fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\n        </a>\n        <ul class=\"dropdown-menu dropdown-messages\">\n          <li>\n              <a href=\"#\">\n                  <div>\n                      <strong>John Smith</strong>\n                      <span class=\"pull-right text-muted\">\n                          <em>Yesterday</em>\n                      </span>\n                  </div>\n                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>\n              </a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n              <a class=\"text-center\" href=\"#\">\n                  <strong>Read All Messages</strong>\n                  <i class=\"fa fa-angle-right\"></i>\n              </a>\n          </li>\n        </ul>\n        <!-- /.dropdown-messages -->\n      </li>\n      <!-- /.dropdown -->\n      <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n              <i class=\"fa fa-tasks fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\n          </a>\n          <ul class=\"dropdown-menu dropdown-tasks\">\n              <li>\n                  <a href=\"#\">\n                      <div>\n                          <p>\n                              <strong>Task 1</strong>\n                              <span class=\"pull-right text-muted\">40% Complete</span>\n                          </p>\n                          <div class=\"progress progress-striped active\">\n                              <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\n                                  <span class=\"sr-only\">40% Complete (success)</span>\n                              </div>\n                          </div>\n                      </div>\n                  </a>\n              </li>\n              <li class=\"divider\"></li>\n              <li>\n                  <a class=\"text-center\" href=\"#\">\n                      <strong>See All Tasks</strong>\n                      <i class=\"fa fa-angle-right\"></i>\n                  </a>\n              </li>\n          </ul>\n          <!-- /.dropdown-tasks -->\n      </li>\n      <!-- /.dropdown -->\n      <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n              <i class=\"fa fa-bell fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\n          </a>\n          <ul class=\"dropdown-menu dropdown-alerts\">\n              <li>\n                  <a href=\"#\">\n                      <div>\n                          <i class=\"fa fa-comment fa-fw\"></i> New Comment\n                          <span class=\"pull-right text-muted small\">4 minutes ago</span>\n                      </div>\n                  </a>\n              </li>\n              <li class=\"divider\"></li>\n              <li>\n                  <a class=\"text-center\" href=\"#\">\n                      <strong>See All Alerts</strong>\n                      <i class=\"fa fa-angle-right\"></i>\n                  </a>\n              </li>\n          </ul>\n          <!-- /.dropdown-alerts -->\n      </li>\n      <!-- /.dropdown -->\n      <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n              <i class=\"fa fa-user fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\n          </a>\n          <ul class=\"dropdown-menu dropdown-user\">\n              <li><a href=\"#\"><i class=\"fa fa-user fa-fw\"></i> User Profile</a>\n              </li>\n              <li><a href=\"#\"><i class=\"fa fa-gear fa-fw\"></i> Settings</a>\n              </li>\n              <li class=\"divider\"></li>\n              <li><a click.delegate=\"logout()\"><i class=\"fa fa-sign-out fa-fw\"></i> Logout</a>\n              </li>\n          </ul>\n          <!-- /.dropdown-user -->\n      </li>\n      <!-- /.dropdown -->\n    </ul>\n    <!-- /.navbar-top-links -->\n\n    <div class=\"navbar-default sidebar\" role=\"navigation\">\n      <div class=\"sidebar-nav navbar-collapse\">\n        <ul class=\"nav\" id=\"side-menu\">\n          <li repeat.for=\"item of router.navigation\" class=\"${item.isActive ? 'active' : ''}\">\n            <a href.bind=\"item.href\"><i class=\"fa ${item.settings.classes} fa-fw\"></i> ${item.title}</a>\n          </li>\n        </ul>\n      </div>\n      <!-- /.sidebar-collapse -->\n    </div>\n    <!-- /.navbar-static-side -->\n  </nav>\n</template>\n"; });
define('text!resources/elements/home/home.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <h1 class=\"page-header\">Dashboard</h1>\n      </div>\n      <!-- /.col-lg-12 -->\n  </div>\n  <!-- /.row -->\n  <div class=\"row\">\n      <div class=\"col-lg-3 col-md-6\">\n          <div class=\"panel panel-primary\">\n              <div class=\"panel-heading\">\n                  <div class=\"row\">\n                      <div class=\"col-xs-3\">\n                          <i class=\"fa fa-comments fa-5x\"></i>\n                      </div>\n                      <div class=\"col-xs-9 text-right\">\n                          <div class=\"huge\">26</div>\n                          <div>New Comments!</div>\n                      </div>\n                  </div>\n              </div>\n              <a href=\"#\">\n                  <div class=\"panel-footer\">\n                      <span class=\"pull-left\">View Details</span>\n                      <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                      <div class=\"clearfix\"></div>\n                  </div>\n              </a>\n          </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6\">\n          <div class=\"panel panel-green\">\n              <div class=\"panel-heading\">\n                  <div class=\"row\">\n                      <div class=\"col-xs-3\">\n                          <i class=\"fa fa-tasks fa-5x\"></i>\n                      </div>\n                      <div class=\"col-xs-9 text-right\">\n                          <div class=\"huge\">12</div>\n                          <div>New Tasks!</div>\n                      </div>\n                  </div>\n              </div>\n              <a href=\"#\">\n                  <div class=\"panel-footer\">\n                      <span class=\"pull-left\">View Details</span>\n                      <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                      <div class=\"clearfix\"></div>\n                  </div>\n              </a>\n          </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6\">\n          <div class=\"panel panel-yellow\">\n              <div class=\"panel-heading\">\n                  <div class=\"row\">\n                      <div class=\"col-xs-3\">\n                          <i class=\"fa fa-shopping-cart fa-5x\"></i>\n                      </div>\n                      <div class=\"col-xs-9 text-right\">\n                          <div class=\"huge\">124</div>\n                          <div>New Orders!</div>\n                      </div>\n                  </div>\n              </div>\n              <a href=\"#\">\n                  <div class=\"panel-footer\">\n                      <span class=\"pull-left\">View Details</span>\n                      <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                      <div class=\"clearfix\"></div>\n                  </div>\n              </a>\n          </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6\">\n          <div class=\"panel panel-red\">\n              <div class=\"panel-heading\">\n                  <div class=\"row\">\n                      <div class=\"col-xs-3\">\n                          <i class=\"fa fa-support fa-5x\"></i>\n                      </div>\n                      <div class=\"col-xs-9 text-right\">\n                          <div class=\"huge\">13</div>\n                          <div>Support Tickets!</div>\n                      </div>\n                  </div>\n              </div>\n              <a href=\"#\">\n                  <div class=\"panel-footer\">\n                      <span class=\"pull-left\">View Details</span>\n                      <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                      <div class=\"clearfix\"></div>\n                  </div>\n              </a>\n          </div>\n      </div>\n  </div>\n  <!-- /.row -->\n  <div class=\"row\">\n      <div class=\"col-lg-8\">\n          <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                  <i class=\"fa fa-bar-chart-o fa-fw\"></i> Area Chart Example\n                  <div class=\"pull-right\">\n                      <div class=\"btn-group\">\n                          <button type=\"button\" class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\">\n                              Actions\n                              <span class=\"caret\"></span>\n                          </button>\n                          <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n                              <li><a href=\"#\">Action</a>\n                              </li>\n                              <li><a href=\"#\">Another action</a>\n                              </li>\n                              <li><a href=\"#\">Something else here</a>\n                              </li>\n                              <li class=\"divider\"></li>\n                              <li><a href=\"#\">Separated link</a>\n                              </li>\n                          </ul>\n                      </div>\n                  </div>\n              </div>\n              <!-- /.panel-heading -->\n              <div class=\"panel-body\">\n                  <div id=\"morris-area-chart\"></div>\n              </div>\n              <!-- /.panel-body -->\n          </div>\n          <!-- /.panel -->\n          <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                  <i class=\"fa fa-bar-chart-o fa-fw\"></i> Bar Chart Example\n                  <div class=\"pull-right\">\n                      <div class=\"btn-group\">\n                          <button type=\"button\" class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\">\n                              Actions\n                              <span class=\"caret\"></span>\n                          </button>\n                          <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n                              <li><a href=\"#\">Action</a>\n                              </li>\n                              <li><a href=\"#\">Another action</a>\n                              </li>\n                              <li><a href=\"#\">Something else here</a>\n                              </li>\n                              <li class=\"divider\"></li>\n                              <li><a href=\"#\">Separated link</a>\n                              </li>\n                          </ul>\n                      </div>\n                  </div>\n              </div>\n              <!-- /.panel-heading -->\n              <div class=\"panel-body\">\n                  <div class=\"row\">\n                      <div class=\"col-lg-4\">\n                          <div class=\"table-responsive\">\n                              <table class=\"table table-bordered table-hover table-striped\">\n                                  <thead>\n                                      <tr>\n                                          <th>#</th>\n                                          <th>Date</th>\n                                          <th>Time</th>\n                                          <th>Amount</th>\n                                      </tr>\n                                  </thead>\n                                  <tbody>\n                                      <tr>\n                                          <td>3326</td>\n                                          <td>10/21/2013</td>\n                                          <td>3:29 PM</td>\n                                          <td>$321.33</td>\n                                      </tr>\n                                      <tr>\n                                          <td>3325</td>\n                                          <td>10/21/2013</td>\n                                          <td>3:20 PM</td>\n                                          <td>$234.34</td>\n                                      </tr>\n                                      <tr>\n                                          <td>3324</td>\n                                          <td>10/21/2013</td>\n                                          <td>3:03 PM</td>\n                                          <td>$724.17</td>\n                                      </tr>\n                                      <tr>\n                                          <td>3323</td>\n                                          <td>10/21/2013</td>\n                                          <td>3:00 PM</td>\n                                          <td>$23.71</td>\n                                      </tr>\n                                      <tr>\n                                          <td>3322</td>\n                                          <td>10/21/2013</td>\n                                          <td>2:49 PM</td>\n                                          <td>$8345.23</td>\n                                      </tr>\n                                      <tr>\n                                          <td>3321</td>\n                                          <td>10/21/2013</td>\n                                          <td>2:23 PM</td>\n                                          <td>$245.12</td>\n                                      </tr>\n                                      <tr>\n                                          <td>3320</td>\n                                          <td>10/21/2013</td>\n                                          <td>2:15 PM</td>\n                                          <td>$5663.54</td>\n                                      </tr>\n                                      <tr>\n                                          <td>3319</td>\n                                          <td>10/21/2013</td>\n                                          <td>2:13 PM</td>\n                                          <td>$943.45</td>\n                                      </tr>\n                                  </tbody>\n                              </table>\n                          </div>\n                          <!-- /.table-responsive -->\n                      </div>\n                      <!-- /.col-lg-4 (nested) -->\n                      <div class=\"col-lg-8\">\n                          <div id=\"morris-bar-chart\"></div>\n                      </div>\n                      <!-- /.col-lg-8 (nested) -->\n                  </div>\n                  <!-- /.row -->\n              </div>\n              <!-- /.panel-body -->\n          </div>\n          <!-- /.panel -->\n          <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                  <i class=\"fa fa-clock-o fa-fw\"></i> Responsive Timeline\n              </div>\n              <!-- /.panel-heading -->\n              <div class=\"panel-body\">\n                  <ul class=\"timeline\">\n                      <li>\n                          <div class=\"timeline-badge\"><i class=\"fa fa-check\"></i>\n                          </div>\n                          <div class=\"timeline-panel\">\n                              <div class=\"timeline-heading\">\n                                  <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                                  <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 11 hours ago via Twitter</small>\n                                  </p>\n                              </div>\n                              <div class=\"timeline-body\">\n                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.</p>\n                              </div>\n                          </div>\n                      </li>\n                      <li class=\"timeline-inverted\">\n                          <div class=\"timeline-badge warning\"><i class=\"fa fa-credit-card\"></i>\n                          </div>\n                          <div class=\"timeline-panel\">\n                              <div class=\"timeline-heading\">\n                                  <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                              </div>\n                              <div class=\"timeline-body\">\n                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.</p>\n                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>\n                              </div>\n                          </div>\n                      </li>\n                      <li>\n                          <div class=\"timeline-badge danger\"><i class=\"fa fa-bomb\"></i>\n                          </div>\n                          <div class=\"timeline-panel\">\n                              <div class=\"timeline-heading\">\n                                  <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                              </div>\n                              <div class=\"timeline-body\">\n                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>\n                              </div>\n                          </div>\n                      </li>\n                      <li class=\"timeline-inverted\">\n                          <div class=\"timeline-panel\">\n                              <div class=\"timeline-heading\">\n                                  <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                              </div>\n                              <div class=\"timeline-body\">\n                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!</p>\n                              </div>\n                          </div>\n                      </li>\n                      <li>\n                          <div class=\"timeline-badge info\"><i class=\"fa fa-save\"></i>\n                          </div>\n                          <div class=\"timeline-panel\">\n                              <div class=\"timeline-heading\">\n                                  <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                              </div>\n                              <div class=\"timeline-body\">\n                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>\n                                  <hr>\n                                  <div class=\"btn-group\">\n                                      <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n                                          <i class=\"fa fa-gear\"></i> <span class=\"caret\"></span>\n                                      </button>\n                                      <ul class=\"dropdown-menu\" role=\"menu\">\n                                          <li><a href=\"#\">Action</a>\n                                          </li>\n                                          <li><a href=\"#\">Another action</a>\n                                          </li>\n                                          <li><a href=\"#\">Something else here</a>\n                                          </li>\n                                          <li class=\"divider\"></li>\n                                          <li><a href=\"#\">Separated link</a>\n                                          </li>\n                                      </ul>\n                                  </div>\n                              </div>\n                          </div>\n                      </li>\n                      <li>\n                          <div class=\"timeline-panel\">\n                              <div class=\"timeline-heading\">\n                                  <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                              </div>\n                              <div class=\"timeline-body\">\n                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur nostrum sequi. Consequuntur, commodi.</p>\n                              </div>\n                          </div>\n                      </li>\n                      <li class=\"timeline-inverted\">\n                          <div class=\"timeline-badge success\"><i class=\"fa fa-graduation-cap\"></i>\n                          </div>\n                          <div class=\"timeline-panel\">\n                              <div class=\"timeline-heading\">\n                                  <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                              </div>\n                              <div class=\"timeline-body\">\n                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.</p>\n                              </div>\n                          </div>\n                      </li>\n                  </ul>\n              </div>\n              <!-- /.panel-body -->\n          </div>\n          <!-- /.panel -->\n      </div>\n      <!-- /.col-lg-8 -->\n      <div class=\"col-lg-4\">\n          <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                  <i class=\"fa fa-bell fa-fw\"></i> Notifications Panel\n              </div>\n              <!-- /.panel-heading -->\n              <div class=\"panel-body\">\n                  <div class=\"list-group\">\n                      <a href=\"#\" class=\"list-group-item\">\n                          <i class=\"fa fa-comment fa-fw\"></i> New Comment\n                          <span class=\"pull-right text-muted small\"><em>4 minutes ago</em>\n                          </span>\n                      </a>\n                      <a href=\"#\" class=\"list-group-item\">\n                          <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\n                          <span class=\"pull-right text-muted small\"><em>12 minutes ago</em>\n                          </span>\n                      </a>\n                      <a href=\"#\" class=\"list-group-item\">\n                          <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\n                          <span class=\"pull-right text-muted small\"><em>27 minutes ago</em>\n                          </span>\n                      </a>\n                      <a href=\"#\" class=\"list-group-item\">\n                          <i class=\"fa fa-tasks fa-fw\"></i> New Task\n                          <span class=\"pull-right text-muted small\"><em>43 minutes ago</em>\n                          </span>\n                      </a>\n                      <a href=\"#\" class=\"list-group-item\">\n                          <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\n                          <span class=\"pull-right text-muted small\"><em>11:32 AM</em>\n                          </span>\n                      </a>\n                      <a href=\"#\" class=\"list-group-item\">\n                          <i class=\"fa fa-bolt fa-fw\"></i> Server Crashed!\n                          <span class=\"pull-right text-muted small\"><em>11:13 AM</em>\n                          </span>\n                      </a>\n                      <a href=\"#\" class=\"list-group-item\">\n                          <i class=\"fa fa-warning fa-fw\"></i> Server Not Responding\n                          <span class=\"pull-right text-muted small\"><em>10:57 AM</em>\n                          </span>\n                      </a>\n                      <a href=\"#\" class=\"list-group-item\">\n                          <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n                          <span class=\"pull-right text-muted small\"><em>9:49 AM</em>\n                          </span>\n                      </a>\n                      <a href=\"#\" class=\"list-group-item\">\n                          <i class=\"fa fa-money fa-fw\"></i> Payment Received\n                          <span class=\"pull-right text-muted small\"><em>Yesterday</em>\n                          </span>\n                      </a>\n                  </div>\n                  <!-- /.list-group -->\n                  <a href=\"#\" class=\"btn btn-default btn-block\">View All Alerts</a>\n              </div>\n              <!-- /.panel-body -->\n          </div>\n          <!-- /.panel -->\n          <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                  <i class=\"fa fa-bar-chart-o fa-fw\"></i> Donut Chart Example\n              </div>\n              <div class=\"panel-body\">\n                  <div id=\"morris-donut-chart\"></div>\n                  <a href=\"#\" class=\"btn btn-default btn-block\">View Details</a>\n              </div>\n              <!-- /.panel-body -->\n          </div>\n          <!-- /.panel -->\n          <div class=\"chat-panel panel panel-default\">\n              <div class=\"panel-heading\">\n                  <i class=\"fa fa-comments fa-fw\"></i> Chat\n                  <div class=\"btn-group pull-right\">\n                      <button type=\"button\" class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\">\n                          <i class=\"fa fa-chevron-down\"></i>\n                      </button>\n                      <ul class=\"dropdown-menu slidedown\">\n                          <li>\n                              <a href=\"#\">\n                                  <i class=\"fa fa-refresh fa-fw\"></i> Refresh\n                              </a>\n                          </li>\n                          <li>\n                              <a href=\"#\">\n                                  <i class=\"fa fa-check-circle fa-fw\"></i> Available\n                              </a>\n                          </li>\n                          <li>\n                              <a href=\"#\">\n                                  <i class=\"fa fa-times fa-fw\"></i> Busy\n                              </a>\n                          </li>\n                          <li>\n                              <a href=\"#\">\n                                  <i class=\"fa fa-clock-o fa-fw\"></i> Away\n                              </a>\n                          </li>\n                          <li class=\"divider\"></li>\n                          <li>\n                              <a href=\"#\">\n                                  <i class=\"fa fa-sign-out fa-fw\"></i> Sign Out\n                              </a>\n                          </li>\n                      </ul>\n                  </div>\n              </div>\n              <!-- /.panel-heading -->\n              <div class=\"panel-body\">\n                  <ul class=\"chat\">\n                      <li class=\"left clearfix\">\n                          <span class=\"chat-img pull-left\">\n                              <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\" />\n                          </span>\n                          <div class=\"chat-body clearfix\">\n                              <div class=\"header\">\n                                  <strong class=\"primary-font\">Jack Sparrow</strong>\n                                  <small class=\"pull-right text-muted\">\n                                      <i class=\"fa fa-clock-o fa-fw\"></i> 12 mins ago\n                                  </small>\n                              </div>\n                              <p>\n                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                              </p>\n                          </div>\n                      </li>\n                      <li class=\"right clearfix\">\n                          <span class=\"chat-img pull-right\">\n                              <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\" />\n                          </span>\n                          <div class=\"chat-body clearfix\">\n                              <div class=\"header\">\n                                  <small class=\" text-muted\">\n                                      <i class=\"fa fa-clock-o fa-fw\"></i> 13 mins ago</small>\n                                  <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n                              </div>\n                              <p>\n                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                              </p>\n                          </div>\n                      </li>\n                      <li class=\"left clearfix\">\n                          <span class=\"chat-img pull-left\">\n                              <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\" />\n                          </span>\n                          <div class=\"chat-body clearfix\">\n                              <div class=\"header\">\n                                  <strong class=\"primary-font\">Jack Sparrow</strong>\n                                  <small class=\"pull-right text-muted\">\n                                      <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago</small>\n                              </div>\n                              <p>\n                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                              </p>\n                          </div>\n                      </li>\n                      <li class=\"right clearfix\">\n                          <span class=\"chat-img pull-right\">\n                              <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\" />\n                          </span>\n                          <div class=\"chat-body clearfix\">\n                              <div class=\"header\">\n                                  <small class=\" text-muted\">\n                                      <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago</small>\n                                  <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n                              </div>\n                              <p>\n                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                              </p>\n                          </div>\n                      </li>\n                  </ul>\n              </div>\n              <!-- /.panel-body -->\n              <div class=\"panel-footer\">\n                  <div class=\"input-group\">\n                      <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\" />\n                      <span class=\"input-group-btn\">\n                          <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\n                              Send\n                          </button>\n                      </span>\n                  </div>\n              </div>\n              <!-- /.panel-footer -->\n          </div>\n          <!-- /.panel .chat-panel -->\n      </div>\n      <!-- /.col-lg-4 -->\n  </div>\n  <!-- /.row -->\n</template>\n"; });
define('text!resources/elements/upload/upload.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${value}</h1>\n</template>"; });
define('text!resources/elements/login.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${value}</h1>\n</template>"; });
define('text!resources/elements/login/login.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"../../../app.css\"></require>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4\">\n        <div class=\"login-panel panel panel-default\">\n          <div class=\"panel-heading\">\n            <h2 class=\"panel-title text-center\">Announcing Fish Admin Panel</h2>\n          </div>\n          <div class=\"panel-body\">\n            <img src=\"http://vignette3.wikia.nocookie.net/spongebob/images/7/7e/Johnny_Elaine_in_Suction_Cup_Symphony.png/revision/latest?cb=20160522200947\" class=\"img-responsive center-block\"/>\n            <br />\n            <button click.delegate=\"login()\" class=\"btn btn-lg btn-success btn-block\">Login</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map