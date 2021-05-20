/**
 * Author: Michael Hadley, mikewesthad.com
 * Althered by : Aaron Sprangers
 */
 import StartSceneMiddleFoligno from "./StartSceneMiddleFoligno.js";
 import SceneEastFoligno from "./SceneEastFoligno.js";
 import SceneWestFoligno from "./SceneWestFoligno.js";
 import SceneNordFoligno from "./SceneNordFoligno.js";
 import SceneMiddleFoligno from "./SceneMiddleFoligno.js";

 import SceneSouthFoligno from "./SceneSouthFoligno.js";

 import PreloadScene from './preloadScene.js';
 

 // Our game scene
var startSceneMiddleFoligno = new StartSceneMiddleFoligno();
var sceneEastFoligno = new SceneEastFoligno();
var sceneWestFoligno = new SceneWestFoligno();
var sceneNordFoligno = new SceneNordFoligno();
var sceneMiddleFoligno = new SceneMiddleFoligno();

var sceneSouthFoligno = new SceneSouthFoligno();

var preloadScene = new PreloadScene();

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#000",
  parent: "game-container",
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      enableBody: true
    }
  }
};

const game = new Phaser.Game(config);
let cursors;
let player;
let showDebug = false;

// load scenes
game.scene.add('preloadScene', preloadScene);
game.scene.add("startSceneMiddleFoligno", startSceneMiddleFoligno, player);
game.scene.add('sceneEastFoligno', sceneEastFoligno, player);
game.scene.add('sceneWestFoligno', sceneWestFoligno, player);
game.scene.add('sceneNordFoligno', sceneNordFoligno, player);
game.scene.add("sceneMiddleFoligno", sceneMiddleFoligno, player);
game.scene.add("sceneSouthFoligno", sceneSouthFoligno, player);

// start title
game.scene.start('preloadScene');



  

