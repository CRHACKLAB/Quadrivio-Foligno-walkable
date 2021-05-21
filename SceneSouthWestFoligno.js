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
 
 class SceneSouthWestFoligno extends Phaser.Scene {
 
   constructor() {
     super({key : 'sceneSouthWestFoligno'});    
   }

init(data) {
  //this.xpixel = data.xpixel;
  //this.ypixel = data.ypixel;
   };

preload() {
  preloadScene;
}

create() {
//creating the map
  const map6 = this.make.tilemap({ key: "map6" });

//problem with 1 house in West
  const tileset1 = map6.addTilesetImage("45 GRADI", "ESTtiles1");
  const tileset2 = map6.addTilesetImage("castle1", "ESTtiles2");
  const tileset3 = map6.addTilesetImage("castle45GRADI", "ESTtiles3");
  const tileset4 = map6.addTilesetImage("CHIESA", "ESTtiles4");
  const tileset5 = map6.addTilesetImage("ESTERNO1", "ESTtiles5");
  const tileset6 = map6.addTilesetImage("ESTERNO2", "ESTtiles6");
  const tileset7 = map6.addTilesetImage("Inside_A5", "ESTtiles7");
  const tileset9 = map6.addTilesetImage("muri1", "OVESTtiles9");
  const tileset11 = map6.addTilesetImage("MURI3", "ESTtiles11");
  const tileset13 = map6.addTilesetImage("PAVIMENTI1", "ESTtiles13");
  const tileset14 = map6.addTilesetImage("PORTE1", "ESTtiles14");
  const tileset15 = map6.addTilesetImage("PORTE2", "ESTtiles15");
  const tileset16 = map6.addTilesetImage("PORTE45", "ESTtiles16");
  const tileset18 = map6.addTilesetImage("ROOF2", "ESTtiles18");
  const tileset19 = map6.addTilesetImage("SF_Outside_A5", "ESTtiles19");
  const tileset20 = map6.addTilesetImage("STRADE", "ESTtiles20");
  const tileset21 = map6.addTilesetImage("TETTI1", "ESTtiles21");
  const tileset22 = map6.addTilesetImage("World_C", "ESTtiles22");
  const tileset23 = map6.addTilesetImage("AIUOLA", "ESTtiles23");
  const tileset24 = map6.addTilesetImage("ALBERI", "ESTtiles24");
  const tileset25 = map6.addTilesetImage("ancient doors", "ESTtiles25");
  const tileset26 = map6.addTilesetImage("BALCONI", "ESTtiles26");
  const tileset27 = map6.addTilesetImage("big windows", "ESTtiles27");
  const tileset28 = map6.addTilesetImage("GLASS DOORS", "ESTtiles28");
  const tileset33 = map6.addTilesetImage("rosoni piccoli", "ESTtiles33");
  const tileset35 = map6.addTilesetImage("TETTI BASSI", "ESTtiles35");
  const tileset36 = map6.addTilesetImage("TETTI BASSI 2", "ESTtiles36");
  const tileset38 = map6.addTilesetImage("tetti frontali", "ESTtiles38");
  const tileset39 = map6.addTilesetImage("VARIE", "OVESTtiles39");
  const tileset40 = map6.addTilesetImage("roofs1", "OVESTtiles40");

// what tilesets are in which layers
  const belowLayer3 = map6.createLayer('STRADE', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset11, tileset13, tileset14, tileset15, tileset16, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset33, tileset35, tileset36, tileset38, tileset39, tileset40 ]); 
  const belowLayer2 = map6.createLayer('PIAZZE', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset11, tileset13, tileset14, tileset15, tileset16, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset33, tileset35, tileset36, tileset38, tileset39, tileset40 ]); 
  const belowLayer1 = map6.createLayer('SOTTO PIAZZE', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset11, tileset13, tileset14, tileset15, tileset16, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset33, tileset35, tileset36, tileset38, tileset39, tileset40 ]);  
  
  const worldLayer1 = map6.createLayer('SOTTOPALAZZI', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset11, tileset13, tileset14, tileset15, tileset16, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset33, tileset35, tileset36, tileset38, tileset39, tileset40 ]);  
  const worldLayer2 = map6.createLayer('BUILDINGS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset11, tileset13, tileset14, tileset15, tileset16, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset33, tileset35, tileset36, tileset38, tileset39, tileset40 ]);  
  const worldLayer3 = map6.createLayer('PALAZZI', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset11, tileset13, tileset14, tileset15, tileset16, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset33, tileset35, tileset36, tileset38, tileset39, tileset40 ]); 
  const worldLayer4 = map6.createLayer('DEC.PALAZZI', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset11, tileset13, tileset14, tileset15, tileset16, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset33, tileset35, tileset36, tileset38, tileset39, tileset40 ]);  
  const worldLayer5 = map6.createLayer('DECORATIONS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset11, tileset13, tileset14, tileset15, tileset16, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset33, tileset35, tileset36, tileset38, tileset39, tileset40 ]);  
  
  const aboveLayer1 = map6.createLayer('ROOFS OVER STREETS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset11, tileset13, tileset14, tileset15, tileset16, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset33, tileset35, tileset36, tileset38, tileset39, tileset40 ]);  
  const aboveLayer2 = map6.createLayer('DECORATIONS OVER STREETS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset11, tileset13, tileset14, tileset15, tileset16, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset33, tileset35, tileset36, tileset38, tileset39, tileset40 ]);  




// inserting how to set the collisions
    worldLayer1.setCollisionByProperty({ collides: true });
    worldLayer2.setCollisionByProperty({ collides: true });
    worldLayer3.setCollisionByProperty({ collides: true });
    worldLayer4.setCollisionByProperty({ collides: true });
    worldLayer5.setCollisionByProperty({ collides: true });

// because there were some walltiles and such in these layers, I made them collide aswell

 aboveLayer1.setDepth(10); // is used for setting the dept of a layer, so the person playing it can for example walk underneath it
 aboveLayer2.setDepth(10);

//declaring spawnpoint
  const spawnPoint = map6.findObject("Objects", obj => obj.name === "Spawn Point");
  //spawnPoint.x=this.xpixel;
  //spawnPoint.y=this.ypixel;
  
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

 //because there were some walltiles and such in these layers, I made them collide aswell
//   this.physics.add.collider(player, belowLayer1); 
//   this.physics.add.collider(player, belowLayer2);
//   this.physics.add.collider(player, belowLayer3);

//   this.physics.add.collider(player, aboveLayer1); 
//   this.physics.add.collider(player, aboveLayer2);

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
  .text(16, 16, 'Foligno South West', {
    font: "18px monospace",
    fill: "#000000",
    padding: { x: 20, y: 10 },
    backgroundColor: "#ffffff"
  })
  .setScrollFactor(0)
  .setDepth(30);

  const camera = this.cameras.main;
  camera.startFollow(player); //camera follows let player
  camera.setBounds(0, 0, map6.widthInPixels, map6.heightInPixels); //camerasize is mapsize (of gameconfig.)

  cursors = this.input.keyboard.createCursorKeys();

  this.physics.world.setBounds(0, 0, map6.widthInPixels, map6.heightInPixels, true, true, true, true);
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

export default SceneSouthWestFoligno;
