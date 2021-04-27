/**
 * Author: Michael Hadley, mikewesthad.com
 * Althered by : Aaron Sprangers
 */
 import StartSceneMiddleFoligno from "./StartSceneMiddleFoligno.js";
 import SceneEastFoligno from "./SceneEastFoligno.js";
 import SceneMiddleFoligno from "./SceneMiddleFoligno";
 import SceneWestFoligno from "./SceneWestFoligno";

 // Our game scene
var startSceneMiddleFoligno = new StartSceneMiddleFoligno();
var sceneEastFoligno = new SceneEastFoligno();
var sceneMiddleFoligno = new SceneMiddleFoligno();
var sceneWestFoligno = new SceneWestFoligno();

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
      gravity: { y: 0 }
    }
  }
};

const game = new Phaser.Game(config);
let cursors;
let player;
let showDebug = false;

// load scenes
game.scene.add("startSceneMiddleFoligno", startSceneMiddleFoligno, player);
game.scene.add('sceneEastFoligno', sceneEastFoligno, player);
game.scene.add("sceneMiddleFoligno", sceneMiddleFoligno, player);
game.scene.add("sceneWestFoligno", sceneWestFoligno, player);

// start title
game.scene.start('startSceneMiddleFoligno');



  

