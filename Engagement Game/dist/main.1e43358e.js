// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"src/CST.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = void 0;
var CST = {
  SCENES: {
    COPY: "COPY",
    LOAD: "LOAD",
    MENU: "MENU",
    INTRO: "INTRO",
    GAME: "GAME",
    WIN: "WIN"
  }
};
exports.CST = CST;
},{}],"src/scenes/LoadScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LoadScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(LoadScene, _Phaser$Scene);

  function LoadScene() {
    _classCallCheck(this, LoadScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadScene).call(this, {
      key: _CST.CST.SCENES.LOAD
    }));
  }

  _createClass(LoadScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {
      var _this = this;

      //set screen resolution to: 800x600
      //load images, spritesheets, and sound
      this.load.image("menu_BG", "./assets/menu_BG.png");
      this.load.image("logo", "./assets/menu_logo.png");
      this.load.image("play_button", "./assets/play_button.png");
      this.load.image("op_button", "./assets/op_button.png");
      this.load.image("rose_icon", "./assets/rose_icon.png");
      this.load.image("stage", "./assets/stage.png");
      this.load.image("ground", "./assets/ground_R.png");
      this.load.image("landing", "./assets/landing.png");
      this.load.image("ramp", "./assets/ramp.png");
      this.load.image("wall", "./assets/plat_wall.png");
      this.load.image("portal", "./assets/portal.png");
      this.load.image("ball", "./assets/pokeball.png");
      this.load.image("life1", "./assets/life_Neck1.png");
      this.load.image("life2", "./assets/life_Neck2.png");
      this.load.image("life3", "./assets/life_Neck3.png");
      this.load.image("winScreen", "./assets/winscreen.png");
      this.load.image("textBox", "./assets/text_box.png");
      this.load.image("textBox2", "./assets/text_box2.png");
      this.load.audio("menu_bgm", "./assets/MainMenuMusic.m4a");
      this.load.audio("game_bgm", "./assets/InGameMusic.m4a");
      this.load.audio("jump", "./assets/Jump.m4a");
      this.load.audio("sBall_bgm", "./assets/Attack.m4a");
      this.load.audio("pDie", "./assets/PlayerDeath.m4a");
      /*this.load.audio("win_music", "./assets/win_music.mp3");*/

      this.load.spritesheet("brandon", "./assets/Brandon_R.png", {
        frameWidth: 32,
        frameHeight: 32
      });
      this.load.spritesheet("kerra", "./assets/Kerra_R.png", {
        frameWidth: 32,
        frameHeight: 32
      });
      this.load.spritesheet("clown", "./assets/Clown.png", {
        frameWidth: 32,
        frameHeight: 32
      });
      this.load.spritesheet("spider", "./assets/Spider.png", {
        frameWidth: 32,
        frameHeight: 32
      });
      this.load.spritesheet("rose", "./assets/Rose.png", {
        frameWidth: 32,
        frameHeight: 32
      }); //Create a loading bar

      var loadingBar = this.add.graphics({
        fillStyle: {
          color: 0x9400D3 //purple loading fill

        }
      });
      /*
      Loader Events:
          complete = when done loading everything
          progress - loader number progress in decimal
      */

      this.load.on("progress", function (percent) {
        loadingBar.fillRect(0, _this.game.renderer.height / 2, _this.game.renderer.width * percent, 50);
        console.log(percent * 100 + "%");
        console.log("done");
      });
    }
  }, {
    key: "create",
    value: function create() {
      this.scene.start(_CST.CST.SCENES.MENU);
    }
  }]);

  return LoadScene;
}(Phaser.Scene);

exports.LoadScene = LoadScene;
},{"../CST":"src/CST.js"}],"src/scenes/MenuScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var actionBtn, startBtn, stopBtn, shutdown, music;

var MenuScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);

  function MenuScene() {
    _classCallCheck(this, MenuScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuScene).call(this, {
      key: _CST.CST.SCENES.MENU
    }));
  }

  _createClass(MenuScene, [{
    key: "init",
    value: function init() {
      var canvas = this.sys.game.canvas;
      var fullscreen = this.sys.game.device.fullscreen;

      if (!fullscreen.available) {
        return;
      }

      startBtn = document.createElement('button');
      stopBtn = document.createElement('button');
      startBtn.textContent = 'Start Fullscreen';
      stopBtn.textContent = 'Stop Fullscreen';
      canvas.parentNode.appendChild(startBtn);
      canvas.parentNode.appendChild(stopBtn);
      startBtn.addEventListener('click', function () {
        if (document.fullscreenElement) {
          return;
        }

        canvas[fullscreen.request]();
      });
      stopBtn.addEventListener('click', function () {
        document[fullscreen.cancel]();
      });
    }
  }, {
    key: "create",
    value: function create() {
      //create images (a-z order)
      var menuBG = this.add.image(0, 0, "menu_BG").setOrigin(0); //menu background

      this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.2, "logo").setScale(.9); //Video Game Logo
      //Play Button

      var playBtn = this.add.image(400, 400, "play_button").setScale(.5); //create sprites

      var rose_icon = this.add.image(300, 6, "rose").setScale(.05); //create audio, disable pauseblur

      music = this.sound.add("menu_bgm");
      music.play({
        loop: true
      }); //create animation
      //make image buttons interactive

      actionBtn = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes = 90);
      playBtn.setInteractive();
      playBtn.on("pointerover", function () {
        console.log("hovahh");
      });
      playBtn.on("pointerout", function () {
        console.log("out");
      });
    }
  }, {
    key: "update",
    value: function update() {
      if (actionBtn.isDown) {
        music.stop();
        this.scene.start(_CST.CST.SCENES.GAME);
      }
    }
  }]);

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;
},{"../CST":"src/CST.js"}],"src/scenes/CopyScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CopyScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(CopyScene, _Phaser$Scene);

  function CopyScene() {
    _classCallCheck(this, CopyScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(CopyScene).call(this, {
      key: _CST.CST.SCENES.COPY
    }));
  }

  return CopyScene;
}(Phaser.Scene);

exports.CopyScene = CopyScene;
},{"../CST":"src/CST.js"}],"src/scenes/IntroScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntroScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var IntroScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(IntroScene, _Phaser$Scene);

  function IntroScene() {
    _classCallCheck(this, IntroScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(IntroScene).call(this, {
      key: _CST.CST.SCENES.INTRO
    }));
  }

  _createClass(IntroScene, [{
    key: "create",
    value: function create() {}
  }]);

  return IntroScene;
}(Phaser.Scene);

exports.IntroScene = IntroScene;
},{"../CST":"src/CST.js"}],"src/scenes/GameScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var player,
    platforms,
    walls,
    portal,
    cursors,
    kerra,
    score = 0,
    scoreTxt,
    lives = 3,
    lifeTxt,
    lifeImage,
    roses,
    enemies,
    eWallOne,
    eWallTwo,
    sBtn,
    sBall,
    name,
    bubbleTxt,
    music;

var GameScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(GameScene, _Phaser$Scene);

  function GameScene() {
    _classCallCheck(this, GameScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameScene).call(this, {
      key: _CST.CST.SCENES.GAME
    }));
  }

  _createClass(GameScene, [{
    key: "create",
    value: function create() {
      this.add.image(400, 300, "stage"); //Stage Background
      //Stage Background Music

      music = this.sound.add("game_bgm");
      music.play({
        loop: true
      });
      scoreTxt = this.add.text(16, 16, 'score: 0', {
        fontSize: '32px',
        fill: '#fff'
      });
      lifeTxt = this.add.text(300, 16, "Lives Left:", {
        fontSize: "32px",
        fill: "#fff"
      }); //Platforms

      platforms = this.physics.add.staticGroup(); //Creating Platform Object Static Group
      //Floor 1

      platforms.create(50, 490, "ground").setScale(.2).refreshBody();
      platforms.create(280, 490, "ground").setScale(.2).refreshBody();
      platforms.create(510, 490, "ground").setScale(.2).refreshBody();
      platforms.create(740, 440, "ground").setScale(.2).refreshBody(); //Floor 2

      platforms.create(510, 390, "ground").setScale(.2).refreshBody();
      platforms.create(280, 390, "ground").setScale(.2).refreshBody();
      platforms.create(50, 345, "ground").setScale(.2).refreshBody(); //Floor 3

      platforms.create(280, 293, "ground").setScale(.2).refreshBody();
      platforms.create(510, 293, "ground").setScale(.2).refreshBody();
      platforms.create(740, 245, "ground").setScale(.2).refreshBody(); //Floor 4

      platforms.create(510, 200, "ground").setScale(.2).refreshBody();
      platforms.create(280, 200, "ground").setScale(.2).refreshBody();
      platforms.create(50, 150, "ground").setScale(.2).refreshBody(); //Floor 5

      platforms.create(510, 100, "ground").setScale(.2).refreshBody();
      platforms.create(280, 100, "ground").setScale(.2).refreshBody();
      platforms.create(700, 100, "ground").setScale(.2).refreshBody(); //Walls

      walls = this.physics.add.staticGroup(); //Floor 1

      walls.create(200, 455, "wall").setVisible(false);
      walls.create(360, 455, "wall").setVisible(false);
      walls.create(430, 455, "wall").setVisible(false);
      walls.create(590, 455, "wall").setVisible(false); //Floor 2

      walls.create(200, 355, "wall").setVisible(false);
      walls.create(360, 355, "wall").setVisible(false);
      walls.create(430, 355, "wall").setVisible(false);
      walls.create(590, 355, "wall").setVisible(false); //Floor 3

      walls.create(200, 260, "wall").setVisible(false);
      walls.create(360, 260, "wall").setVisible(false);
      walls.create(430, 260, "wall").setVisible(false);
      walls.create(590, 260, "wall").setVisible(false); //Floor 4

      walls.create(200, 165, "wall").setVisible(false);
      walls.create(360, 165, "wall").setVisible(false);
      walls.create(430, 165, "wall").setVisible(false);
      walls.create(590, 165, "wall").setVisible(false); //Floor 5

      walls.create(190, 65, "wall").setVisible(false);
      walls.create(360, 65, "wall").setVisible(false);
      walls.create(430, 65, "wall").setVisible(false);
      walls.create(590, 65, "wall").setVisible(false); //Portal

      portal = walls.create(750, 60, "portal"); //Brandon

      player = this.physics.add.sprite(50, 200, "brandon"); //Player

      player.setBounce(0.2);
      player.setCollideWorldBounds(true); //Brandon's Animations

      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers("brandon", {
          start: 0,
          end: 2
        }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers("brandon", {
          start: 4,
          end: 7
        }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: 'turn',
        frames: this.anims.generateFrameNumbers("brandon", {
          start: 3,
          end: 3
        }),
        frameRate: 10,
        repeat: -1
      }); //Kerra

      kerra = this.physics.add.sprite(650, 0, "kerra");
      kerra.setCollideWorldBounds(true);
      this.physics.add.collider(kerra, platforms);
      bubbleTxt; //Enemies

      enemies = this.physics.add.group();
      this.physics.add.collider(enemies, platforms);
      this.physics.add.overlap(enemies, walls, changeDirection, null, this); //Floor 1

      enemies.create(280, 450, 'clown');
      enemies.create(550, 450, 'spider'); //Floor 2

      enemies.create(280, 360, 'spider');
      enemies.create(550, 360, 'clown'); //Floor 3

      enemies.create(280, 250, 'clown');
      enemies.create(550, 250, 'spider'); //Floor 4

      enemies.create(280, 150, 'spider');
      enemies.create(550, 150, 'clown'); //Floor 5

      enemies.create(280, 50, 'clown').setScale(1.5);
      enemies.create(250, 50, 'clown').setScale(1.5);
      enemies.create(500, 50, 'spider').setScale(1.5);
      enemies.create(550, 50, 'spider').setScale(1.5);
      enemies.setVelocityX(-50); //Collectables 24 Roses

      roses = this.physics.add.group(); //Floor 1

      roses.create(90, 450, 'rose');
      roses.create(250, 450, 'rose');
      roses.create(350, 450, 'rose');
      roses.create(490, 450, 'rose');
      roses.create(580, 450, 'rose');
      roses.create(750, 400, 'rose'); //Floor 2

      roses.create(580, 360, 'rose');
      roses.create(490, 360, 'rose');
      roses.create(350, 360, 'rose');
      roses.create(250, 360, 'rose');
      roses.create(90, 300, 'rose'); //Floor 3

      roses.create(250, 250, 'rose');
      roses.create(350, 250, 'rose');
      roses.create(490, 250, 'rose');
      roses.create(580, 250, 'rose');
      roses.create(750, 200, 'rose'); //Floor 4

      roses.create(580, 150, 'rose');
      roses.create(490, 150, 'rose');
      roses.create(350, 150, 'rose');
      roses.create(250, 150, 'rose'); //Floor 5

      roses.create(65, 50, 'rose');
      roses.create(350, 50, 'rose');
      roses.create(580, 50, 'rose');
      roses.create(490, 50, 'rose');
      roses.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
      });
      sBall = this.physics.add.group();
      this.physics.add.collider(sBall, platforms);
      this.physics.add.collider(roses, platforms);
      this.physics.add.collider(sBall, enemies, killE, null, this);
      this.physics.add.overlap(player, roses, collectRose, null, this);
      this.physics.add.overlap(player, portal, gameWin, null, this);

      function gameWin(player, portal) {
        if (score == 2400) {
          music.stop();
          this.scene.start(_CST.CST.SCENES.WIN);
        }
      }

      function collectRose(player, rose) {
        rose.disableBody(true, true);
        score += 100;
        scoreTxt.setText('Score: ' + score);
      }

      function killE(sBall, enemies) {
        enemies.disableBody(true, true);
      }

      function changeDirection(enemies, walls) {
        enemies.body.velocity.x *= -1;
      }

      sBtn = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes = 32);
      cursors = this.input.keyboard.createCursorKeys();
    }
  }, {
    key: "update",
    value: function update() {
      if (cursors.left.isDown) {
        player.setVelocityX(-160);
        player.anims.play('left', true);
      } else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play('right', true);
      } else {
        player.setVelocityX(0);
        player.anims.play('turn');
      }

      if (score < 2400) {
        bubbleTxt = this.add.image(670, 40, "textBox").setScale(.45);
      } else {
        bubbleTxt = this.add.image(670, 40, "textBox2").setScale(.45);
      } //ShootBall


      if (cursors.left.isDown && sBtn.isDown) {
        sBall.create(player.x + 20, player.y, "ball");
        sBall.setVelocityX(-200);
        this.sound.play("sBall_bgm");
      } else if (cursors.right.isDown && sBtn.isDown) {
        sBall.create(player.x + 20, player.y, "ball");
        sBall.setVelocityX(200);
        this.sound.play("sBall_bgm");
      } //Jump


      if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-240);
        this.sound.play("jump");
      }

      if (score === 2400) {
        kerra.setFrame(3); //kerra.x = player.x - 20;
      } else {
        kerra.setFrame(7);
      } //Enemies Patrol
      //Brandon Spawn Check


      if (player.y > 400) {
        this.physics.add.collider(player, platforms); //Collision Checker     
      }

      if (player.y > 550) {
        this.sound.play("pDie");
        player.x = 50;
        player.y = 450;
        lives--;
        console.log(lives);
      }
    }
  }]);

  return GameScene;
}(Phaser.Scene);

exports.GameScene = GameScene;
},{"../CST":"src/CST.js"}],"src/scenes/WinScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WinScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var WinScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(WinScene, _Phaser$Scene);

  function WinScene() {
    _classCallCheck(this, WinScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(WinScene).call(this, {
      key: _CST.CST.SCENES.WIN
    }));
  }

  _createClass(WinScene, [{
    key: "create",
    value: function create() {
      this.add.image(400, 300, "winScreen");
    }
  }, {
    key: "update",
    value: function update() {}
  }]);

  return WinScene;
}(Phaser.Scene);

exports.WinScene = WinScene;
},{"../CST":"src/CST.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

var _LoadScene = require("./scenes/LoadScene");

var _MenuScene = require("./scenes/MenuScene");

var _CopyScene = require("./scenes/CopyScene");

var _IntroScene = require("./scenes/IntroScene");

var _GameScene = require("./scenes/GameScene");

var _WinScene = require("./scenes/WinScene");

var game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 500
      },
      debug: false
    }
  },
  scene: [_LoadScene.LoadScene, _MenuScene.MenuScene, _CopyScene.CopyScene, _IntroScene.IntroScene, _GameScene.GameScene, _WinScene.WinScene]
});
},{"./scenes/LoadScene":"src/scenes/LoadScene.js","./scenes/MenuScene":"src/scenes/MenuScene.js","./scenes/CopyScene":"src/scenes/CopyScene.js","./scenes/IntroScene":"src/scenes/IntroScene.js","./scenes/GameScene":"src/scenes/GameScene.js","./scenes/WinScene":"src/scenes/WinScene.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55802" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.map