/**
 * Author: Michael Hadley, mikewesthad.com
 * Althered by : Aaron Sprangers
 */

 import PreloadScene from './preloadScene.js';

 let cursors;
 let player;
 let maximumX=9800;
 let minimumX=20;
 let maximumY=7460;
 let minimumY=5;

 var preloadScene = new PreloadScene();
 
 class SceneSouthEastFoligno extends Phaser.Scene {
 
   constructor() {
     super({key : 'sceneSouthEastFoligno'});    
   }

init(data) {
  this.xpixel = data.xpixel;
  this.ypixel = data.ypixel;
   };

preload() {
  preloadScene;
}

create() {
//creating the map
  const map7 = this.make.tilemap({ key: "map7" });

//problem with 1 house in West
  const tileset1 = map7.addTilesetImage("45 GRADI", "ESTtiles1");
  const tileset2 = map7.addTilesetImage("castle1", "ESTtiles2");
  const tileset3 = map7.addTilesetImage("castle45GRADI", "ESTtiles3");
  const tileset4 = map7.addTilesetImage("CHIESA", "ESTtiles4");
  const tileset5 = map7.addTilesetImage("ESTERNO1", "ESTtiles5");
  const tileset6 = map7.addTilesetImage("ESTERNO2", "ESTtiles6");
  const tileset7 = map7.addTilesetImage("Inside_A5", "ESTtiles7");
  const tileset8 = map7.addTilesetImage("Inside_C", "ESTtiles8");
  const tileset9 = map7.addTilesetImage("muri1", "OVESTtiles9");
  const tileset10 = map7.addTilesetImage("muri2", "OVESTtiles10");
  const tileset11 = map7.addTilesetImage("MURI3", "ESTtiles11");
  const tileset12 = map7.addTilesetImage("Outside_A3", "OVESTtiles12");
  const tileset13 = map7.addTilesetImage("PAVIMENTI1", "ESTtiles13");
  const tileset14 = map7.addTilesetImage("PORTE1", "ESTtiles14");
  const tileset15 = map7.addTilesetImage("PORTE2", "ESTtiles15");
  const tileset16 = map7.addTilesetImage("PORTE45", "ESTtiles16");
  const tileset17 = map7.addTilesetImage("ROOF1", "ESTtiles17");
  const tileset18 = map7.addTilesetImage("ROOF2", "ESTtiles18");
  const tileset21 = map7.addTilesetImage("TETTI1", "ESTtiles21");
  const tileset23 = map7.addTilesetImage("AIUOLA", "ESTtiles23");
  const tileset24 = map7.addTilesetImage("ALBERI", "ESTtiles24");
  const tileset25 = map7.addTilesetImage("ancient doors", "ESTtiles25");
  const tileset26 = map7.addTilesetImage("BALCONI", "ESTtiles26");
  const tileset27 = map7.addTilesetImage("big windows", "ESTtiles27");
  const tileset28 = map7.addTilesetImage("GLASS DOORS", "ESTtiles28");
  const tileset29 = map7.addTilesetImage("ladders_45degrees", "ESTtiles29");
  const tileset30 = map7.addTilesetImage("METAL GEARS", "ESTtiles30");
  const tileset35 = map7.addTilesetImage("TETTI BASSI", "ESTtiles35");
  const tileset36 = map7.addTilesetImage("TETTI BASSI 2", "ESTtiles36");
  const tileset37 = map7.addTilesetImage("TETTI COMPLETI", "ESTtiles37");
  const tileset38 = map7.addTilesetImage("tetti frontali", "ESTtiles38");

// what tilesets are in which layers
  const belowLayer3 = map7.createLayer('STRADE', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18, tileset21, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset35, tileset36, tileset37, tileset38 ]); 
  const belowLayer2 = map7.createLayer('PIAZZE', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18, tileset21, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset35, tileset36, tileset37, tileset38 ]);  
  const belowLayer1 = map7.createLayer('SOPRA PIAZZE', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18, tileset21, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset35, tileset36, tileset37, tileset38 ]); 
  
  const worldLayer1 = map7.createLayer('SOTTO PALAZZI', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18, tileset21, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset35, tileset36, tileset37, tileset38 ]); 
  const worldLayer2 = map7.createLayer('BUILDINGS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18, tileset21, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset35, tileset36, tileset37, tileset38 ]); 
  const worldLayer3 = map7.createLayer('BUILDINGS 2', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18, tileset21, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset35, tileset36, tileset37, tileset38 ]); 
  const worldLayer4 = map7.createLayer('DEC.PALAZZI', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18, tileset21, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset35, tileset36, tileset37, tileset38 ]); 
  const worldLayer5 = map7.createLayer('decorazioni', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18, tileset21, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset35, tileset36, tileset37, tileset38 ]); 
  
  const aboveLayer1 = map7.createLayer('ROOFS OVER STREETS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18, tileset21, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset35, tileset36, tileset37, tileset38 ]); 

// inserting how to set the collisions
    worldLayer1.setCollisionByProperty({ collides: true });
    worldLayer2.setCollisionByProperty({ collides: true });
    worldLayer3.setCollisionByProperty({ collides: true });
    worldLayer4.setCollisionByProperty({ collides: true });
    worldLayer5.setCollisionByProperty({ collides: true });

// because there were some walltiles and such in these layers, I made them collide aswell

 aboveLayer1.setDepth(10); // is used for setting the dept of a layer, so the person playing it can for example walk underneath it

//declaring spawnpoint
  const spawnPoint = map7.findObject("Objects", obj => obj.name === "Spawn Point");
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
   this.physics.add.collider(player, worldLayer4);
   this.physics.add.collider(player, worldLayer5);

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
  .text(16, 16, 'Foligno South East', {
    font: "18px monospace",
    fill: "#000000",
    padding: { x: 20, y: 10 },
    backgroundColor: "#ffffff"
  })
  .setScrollFactor(0)
  .setDepth(30);

  const camera = this.cameras.main;
  camera.startFollow(player); //camera follows let player
  camera.setBounds(0, 0, map7.widthInPixels, map7.heightInPixels); //camerasize is mapsize (of gameconfig.)

  cursors = this.input.keyboard.createCursorKeys();

  this.physics.world.setBounds(0, 0, map7.widthInPixels, map7.heightInPixels, true, true, true, true);
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

  // If we were moving, pick and idle frame to use
    if (prevVelocity.x < 0) player.setTexture("BAsprites", "left002");
    else if (prevVelocity.x > 0) player.setTexture("BAsprites", "right002");
    else if (prevVelocity.y < 0) player.setTexture("BAsprites", "back002");
    else if (prevVelocity.y > 0) player.setTexture("BAsprites", "front002");
  } 
}

  end() {
      
  }
}

export default SceneSouthEastFoligno;
