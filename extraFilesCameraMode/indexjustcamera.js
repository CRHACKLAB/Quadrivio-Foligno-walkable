/**
 * Author: Michael Hadley, mikewesthad.com
 * Althered by : Aaron Sprangers
 */


const config = {
  type: Phaser.AUTO,
  width: "100%",
  height: "100%",
  parent: "game-container",
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);
let controls;
let player;
let showDebug = false;

function preload() { //normally finished
  this.load.image("tiles1", "../assets/MAPPA FOLIGNO RPG/TILES/tilesets/45 GRADI.png");
  this.load.image("tiles2", "../assets/MAPPA FOLIGNO RPG/TILES/tilesets/castle1.png");
  this.load.image("tiles3", "../assets/MAPPA FOLIGNO RPG/TILES/tilesets/castle45GRADI.png");
  this.load.image("tiles4", "../assets/MAPPA FOLIGNO RPG/TILES/oaz5u3y9.png");
  this.load.image("tiles5", "../assets/MAPPA FOLIGNO RPG/TILES/tilesets/SF_Outside_B.png");
  this.load.image("tiles6", "../assets/MAPPA FOLIGNO RPG/TILES/tilesets/Outside_B.png");
  this.load.image("tiles7", "../assets/MAPPA FOLIGNO RPG/TILES/tilesets/Inside_A5.png");
  this.load.image("tiles8", "../assets/MAPPA FOLIGNO RPG/TILES/tilesets/Inside_C.png");
  this.load.image("tiles9", "../assets/MAPPA FOLIGNO RPG/TILES/tilesets/muri1.png");
  this.load.image("tiles10", "../assets/MAPPA FOLIGNO RPG/TILES/tilesets/muri2.png");
  this.load.image("tiles11", "../assets/MAPPA FOLIGNO RPG/TILES/tilesets/Inside_A4.png");
  this.load.image("tiles12", "../assets/MAPPA FOLIGNO RPG/TILES/Outside_A3.png");
  this.load.image("tiles13", "../assets/MAPPA FOLIGNO RPG/TILES/tilesets/Outside_A5.png");
  this.load.image("tiles14", "../assets/MAPPA FOLIGNO RPG/TILES/!Door1.png");
  this.load.image("tiles15", "../assets/MAPPA FOLIGNO RPG/TILES/Lighthouse.png");
  this.load.image("tiles16", "../assets/MAPPA FOLIGNO RPG/TILES/PORTE45.png");
  this.load.image("tiles17", "../assets/MAPPA FOLIGNO RPG/TILES/roofs/basic_roofs1+2_recolor2.png");
  this.load.image("tiles18", "../assets/MAPPA FOLIGNO RPG/TILES/roofs/basic_roofs1+2_Candacis.png");
  this.load.image("tiles19", "../assets/MAPPA FOLIGNO RPG/TILES/tilesets/SF_Outside_A5.png");
  this.load.image("tiles20", "../assets/MAPPA FOLIGNO RPG/TILES/STRADE.png");
  this.load.image("tiles21", "../assets/MAPPA FOLIGNO RPG/TILES/tilesets/Outside_C.png");
  this.load.image("tiles22", "../assets/MAPPA FOLIGNO RPG/TILES/tilesets/World_C.png");

  this.load.tilemapTiledJSON("map", "../assets/MAPPA FOLIGNO RPG/QUADRIVIO.json");
}

function create() {

  //creating the map
  const map = this.make.tilemap({ key: "map" });

  //uploading all the .png-files used for making the tilesets
  const tileset1 = map.addTilesetImage("45 GRADI", "tiles1");
  const tileset2 = map.addTilesetImage("castle1", "tiles2");
  const tileset3 = map.addTilesetImage("castle45GRADI", "tiles3");
  const tileset4 = map.addTilesetImage("CHIESA", "tiles4");
  const tileset5 = map.addTilesetImage("ESTERNO1", "tiles5");
  const tileset6 = map.addTilesetImage("ESTERNO2", "tiles6");
  const tileset7 = map.addTilesetImage("Inside_A5", "tiles7");
  const tileset8 = map.addTilesetImage("Inside_C", "tiles8");
  const tileset9 = map.addTilesetImage("muri1", "tiles9");
  const tileset10 = map.addTilesetImage("muri2", "tiles10");
  const tileset11 = map.addTilesetImage("MURI3", "tiles11");
  const tileset12 = map.addTilesetImage("Outside_A3", "tiles12");
  const tileset13 = map.addTilesetImage("PAVIMENTI1", "tiles13");
  const tileset14 = map.addTilesetImage("PORTE1", "tiles14");
  const tileset15 = map.addTilesetImage("PORTE2", "tiles15");
  const tileset16 = map.addTilesetImage("PORTE45", "tiles16");
  const tileset17 = map.addTilesetImage("ROOF1", "tiles17");
  const tileset18 = map.addTilesetImage("ROOF2", "tiles18");
  const tileset19 = map.addTilesetImage("SF_Outside_A5", "tiles19");
  const tileset20 = map.addTilesetImage("STRADE", "tiles20");
  const tileset21 = map.addTilesetImage("TETTI1", "tiles21");
  const tileset22 = map.addTilesetImage("World_C", "tiles22");

  // what tilesets are in which layers
  const belowLayer = map.createLayer('STREET', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22 ]); 
  const belowLayer2 = map.createLayer('PIAZZE', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22 ]); 

  const worldLayer = map.createLayer('CASE', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22 ]); 
  const worldLayer2 = map.createLayer('PORTE E FINESTRE', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22 ]); 
  const worldLayer3 = map.createLayer('DETTAGLI', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22 ]); 

//inserting how to set the collisions
  worldLayer.setCollisionByProperty({ collides: true });
  worldLayer2.setCollisionByProperty({ collides: true });
  worldLayer3.setCollisionByProperty({ collides: true });

  // because there were some walltiles and such in these layers, I made them collide aswell
  belowLayer.setCollisionByProperty({ collides: true });
  belowLayer2.setCollisionByProperty({ collides: true });

  //aboveLayer.setDepth(10); -> is used for setting the dept of a layer, so the person playing it can for example walk underneath it


  //declaring spawnpoint
  const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");

  // Watch the player and worldLayer for collisions, for the duration of the scene:
  this.physics.add.collider(player, worldLayer);
  this.physics.add.collider(player, worldLayer2);
  this.physics.add.collider(player, worldLayer3);

  //because there were some walltiles and such in these layers, I made them collide aswell
  this.physics.add.collider(player, belowLayer); 
  this.physics.add.collider(player, belowLayer2);
  
  const camera = this.cameras.main;
  // Set up the arrows to control the camera
  const cursors = this.input.keyboard.createCursorKeys();
  controls = new Phaser.Cameras.Controls.FixedKeyControl({
    camera: camera,
    left: cursors.left,
    right: cursors.right,
    up: cursors.up,
    down: cursors.down,
    speed: 0.5
  });

   // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
   camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

  ////////cursors = this.input.keyboard.createCursorKeys();

  // Help text that has a "fixed" position on the screen
  this.add
    .text(16, 16, 'Arrow keys to move', {
      font: "18px monospace",
      fill: "#000000",
      padding: { x: 20, y: 10 },
      backgroundColor: "#ffffff"
    })
    .setScrollFactor(0)
    .setDepth(30);

  this.add
    .text(1300, 16, "Welcome to\nAndrea's Foligno", {
      font: "18px monospace",
      fill: "#000000",
      padding: { x: 20, y: 10 },
      backgroundColor: "#ffffff"
    })
    .setScrollFactor(0)
    .setDepth(30);

}

function update(time, delta) {
    // Apply the controls to the camera each update tick of the game
    controls.update(delta);
}