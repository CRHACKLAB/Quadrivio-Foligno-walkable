/*
Author: Aaron Sprangers
 */

import PreloadScene from './preloadScene.js';

let cursors;
let player;
let maximumX=9800;
let minimumX=20;
let maximumY=6800;
let minimumY=2;

var preloadScene = new PreloadScene();

class SceneMiddleFoligno extends Phaser.Scene {

	constructor() {
		super({key : 'sceneMiddleFoligno'});
        
	}
    

	init(data) {
      this.xpixel = data.xpixel;
      this.ypixel = data.ypixel;
	};

  preload() { 
    preloadScene;
    this.load.image("Enrico maestrini", "assets/CHARACTERS/Enrico maestrini.png");
  }

create() {

//creating the map
  const startmap = this.make.tilemap({ key: "startmap" });

//uploading all the .png-files used for making the tilesets
  const tileset1 = startmap.addTilesetImage("45 GRADI", "tiles1");
  const tileset2 = startmap.addTilesetImage("castle1", "tiles2");
  const tileset3 = startmap.addTilesetImage("castle45GRADI", "tiles3");
  const tileset4 = startmap.addTilesetImage("CHIESA", "tiles4");
  const tileset5 = startmap.addTilesetImage("ESTERNO1", "tiles5");
  const tileset6 = startmap.addTilesetImage("ESTERNO2", "tiles6");
  const tileset7 = startmap.addTilesetImage("Inside_A5", "tiles7");
  const tileset8 = startmap.addTilesetImage("Inside_C", "tiles8");
  const tileset9 = startmap.addTilesetImage("muri1", "tiles9");
  const tileset10 = startmap.addTilesetImage("muri2", "tiles10");
  const tileset11 = startmap.addTilesetImage("Inside_A4", "ESTtiles11");
  const tileset12 = startmap.addTilesetImage("Outside_A3", "tiles12");
  const tileset13 = startmap.addTilesetImage("PAVIMENTI1", "tiles13");
  const tileset14 = startmap.addTilesetImage("PORTE1", "tiles14");
  const tileset15 = startmap.addTilesetImage("PORTE2", "tiles15");
  const tileset16 = startmap.addTilesetImage("PORTE45", "tiles16");
  const tileset17 = startmap.addTilesetImage("ROOF1", "tiles17");
  const tileset18 = startmap.addTilesetImage("ROOF2", "tiles18");
  const tileset19 = startmap.addTilesetImage("SF_Outside_A5", "tiles19");
  const tileset20 = startmap.addTilesetImage("STRADE", "tiles20");
  const tileset21 = startmap.addTilesetImage("TETTI1", "tiles21");
  const tileset22 = startmap.addTilesetImage("World_C", "tiles22");
  const Enrico = startmap.addTilesetImage("Enrico maestrini", "Enrico maestrini");

// what tilesets are in which layers
const belowLayer1 = startmap.createLayer('STREET', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22 ]); 
const belowLayer2 = startmap.createLayer('PLAZAS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22 ]); 

const worldLayer1 = startmap.createLayer('BUILDINGS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, Enrico ]); 
const worldLayer2 = startmap.createLayer('DETAILS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22 ]); 
const worldLayer3 = startmap.createLayer('DOORS AND WINDOWS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22 ]); 

const aboveLayer1 = startmap.createLayer('ROOFS OVER STREETS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22 ]); 
const aboveLayer2 = startmap.createLayer('DETAILS OVER STREETS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22 ]);

//inserting how to set the collisions
worldLayer1.setCollisionByProperty({ collides: true });
worldLayer2.setCollisionByProperty({ collides: true });
worldLayer3.setCollisionByProperty({ collides: true });

aboveLayer1.setDepth(10); // is used for setting the dept of a layer, so the person playing it can for example walk underneath it
aboveLayer2.setDepth(10);
//declaring spawnpoint
  const spawnPoint = startmap.findObject("Objects", obj => obj.name === "Spawn Point");
    spawnPoint.x=this.xpixel;
    spawnPoint.y=this.ypixel;
  
// Create a sprite with physics enabled via the physics system. The image used for the sprite has
// a bit of whitespace, so I'm using setSize & setOffset to control the size of the player's body.
  player = this.physics.add
  .sprite(spawnPoint.x, spawnPoint.y, "BAsprites", "front002")
  .setSize(30, 40)
  .setOffset(0, 24);

// Watch the player and worldLayer for collisions, for the duration of the scene:
  this.physics.add.collider(player, worldLayer1);
  this.physics.add.collider(player, worldLayer2);
  this.physics.add.collider(player, worldLayer3);

//because there were some walltiles and such in these layers, I made them collide aswell
  this.physics.add.collider(player, belowLayer1); 
  this.physics.add.collider(player, belowLayer2);

  this.physics.add.collider(player, aboveLayer1); 
  this.physics.add.collider(player, aboveLayer2);

// Create the player's walking animations from the texture atlas. These are stored in the global
// animation manager so any sprite can access them.
  const anims = this.anims;
  anims.create({
    key: "BA-left-walk",
    frames: anims.generateFrameNames("BAsprites", {
      prefix: "left",
      start: 1,
      end: 3,
      zeroPad: 3
    }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: "BA-right-walk",
    frames: anims.generateFrameNames("BAsprites", {
      prefix: "right",
      start: 1,
      end: 3,
      zeroPad: 3
    }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: "BA-front-walk",
    frames: anims.generateFrameNames("BAsprites", {
      prefix: "front",
      start: 1,
      end: 3,
      zeroPad: 3
    }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: "BA-back-walk",
    frames: anims.generateFrameNames("BAsprites", {
      prefix: "back",
      start: 1,
      end: 3,
      zeroPad: 3
    }),
    frameRate: 10,
    repeat: -1
  });

  this.add
  .text(16, 16, 'Foligno Middle', {
    font: "18px monospace",
    fill: "#000000",
    padding: { x: 20, y: 10 },
    backgroundColor: "#ffffff"
  })
  .setScrollFactor(0)
  .setDepth(30);

  const camera = this.cameras.main;
  camera.startFollow(player); //camera follows let player
  camera.setBounds(0, 0, startmap.widthInPixels, startmap.heightInPixels); //camerasize is mapsize (of gameconfig.)

  cursors = this.input.keyboard.createCursorKeys();

  this.physics.world.setBounds(0, 0, startmap.widthInPixels, startmap.heightInPixels, true, true, true, true);
  player.body.collideWorldBounds=true;
}

update(time, delta) {
  const speed = 375;
  const prevVelocity = player.body.velocity.clone();

// Stop any previous movement from the last frame
  player.body.setVelocity(0);

// Horizontal movement
  if (cursors.left.isDown) {
    player.body.setVelocityX(-speed);
  } else if (cursors.right.isDown) {
    player.body.setVelocityX(speed);
  }

// Vertical movement
  if (cursors.up.isDown) {
    player.body.setVelocityY(-speed);
  } else if (cursors.down.isDown) {
    player.body.setVelocityY(speed);
  }

// Normalize and scale the velocity so that player can't move faster along a diagonal
  player.body.velocity.normalize().scale(speed);

// Update the animation last and give left/right animations precedence over up/down animations
  if (cursors.left.isDown) {
    player.anims.play("BA-left-walk", true);
  } else if (cursors.right.isDown) {
    player.anims.play("BA-right-walk", true);
  } else if (cursors.up.isDown) {
    player.anims.play("BA-back-walk", true);
  } else if (cursors.down.isDown) {
    player.anims.play("BA-front-walk", true);
  } else {
    player.anims.stop();

    if(player.x>maximumX){
      this.goEast();
    }

    if(player.x<minimumX){
      this.goWest();
    }

    if(player.y<minimumY){
      this.goNord();
    }

    if(player.x>=7200 && player.x<=7245 && player.y>=1918 && player.y<=1925){
      this.input.keyboard.once('keydown-S', () => this.talkStuff());
    }

// If we were moving, pick and idle frame to use
    if (prevVelocity.x < 0) player.setTexture("BAsprites", "left002");
    else if (prevVelocity.x > 0) player.setTexture("BAsprites", "right002");
    else if (prevVelocity.y < 0) player.setTexture("BAsprites", "back002");
    else if (prevVelocity.y > 0) player.setTexture("BAsprites", "front002");
  }
}

  end() {		
  }

  goEast() {
    this.scene.start('sceneEastFoligno', { xpixel: 35, ypixel:player.y });
  }

  goWest() {
    this.scene.start('sceneWestFoligno', { xpixel: 9800, ypixel:player.y });
  }

  goNord() {
    this.scene.start('sceneNordFoligno', { xpixel: player.x, ypixel:7440 });
  }

  talkStuff() {
    console.log("Hello, I am Enrico");
    this.scene.start('dialogue');
  }
}

export default SceneMiddleFoligno;
