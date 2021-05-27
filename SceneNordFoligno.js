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

 var preloadScene = new PreloadScene();
 
 class SceneNordFoligno extends Phaser.Scene {
 
   constructor() {
     super({key : 'sceneNordFoligno'});    
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
  const map4 = this.make.tilemap({ key: "map4" });

//problem with 1 house in West
  const tileset1 = map4.addTilesetImage("45 GRADI", "ESTtiles1");
  const tileset2 = map4.addTilesetImage("castle1", "ESTtiles2");
  const tileset3 = map4.addTilesetImage("castle45GRADI", "ESTtiles3");
  const tileset4 = map4.addTilesetImage("CHIESA", "ESTtiles4");
  const tileset5 = map4.addTilesetImage("ESTERNO1", "ESTtiles5");
  const tileset6 = map4.addTilesetImage("ESTERNO2", "ESTtiles6");
  const tileset7 = map4.addTilesetImage("Inside_A5", "ESTtiles7");
  const tileset8 = map4.addTilesetImage("Inside_C", "ESTtiles8");
  const tileset9 = map4.addTilesetImage("muri1", "OVESTtiles9");
  const tileset10 = map4.addTilesetImage("muri2", "OVESTtiles10");
  const tileset11 = map4.addTilesetImage("MURI3", "ESTtiles11");
  const tileset12 = map4.addTilesetImage("Outside_A3", "OVESTtiles12");
  const tileset13 = map4.addTilesetImage("PAVIMENTI1", "ESTtiles13");
  const tileset14 = map4.addTilesetImage("PORTE1", "ESTtiles14");
  const tileset15 = map4.addTilesetImage("PORTE2", "ESTtiles15");
  const tileset16 = map4.addTilesetImage("PORTE45", "ESTtiles16");
  const tileset17 = map4.addTilesetImage("ROOF1", "ESTtiles17");
  const tileset18 = map4.addTilesetImage("ROOF2", "ESTtiles18");
  const tileset19 = map4.addTilesetImage("SF_Outside_A5", "ESTtiles19");
  const tileset20 = map4.addTilesetImage("STRADE", "ESTtiles20");
  const tileset21 = map4.addTilesetImage("TETTI1", "ESTtiles21");
  const tileset22 = map4.addTilesetImage("World_C", "ESTtiles22");
  const tileset23 = map4.addTilesetImage("AIUOLA", "ESTtiles23");
  const tileset24 = map4.addTilesetImage("ALBERI", "ESTtiles24");
  const tileset25 = map4.addTilesetImage("ancient doors", "ESTtiles25");
  const tileset26 = map4.addTilesetImage("BALCONI", "ESTtiles26");
  const tileset27 = map4.addTilesetImage("big windows", "ESTtiles27");
  const tileset28 = map4.addTilesetImage("GLASS DOORS", "ESTtiles28");
  const tileset29 = map4.addTilesetImage("ladders_45degrees", "ESTtiles29");
  const tileset30 = map4.addTilesetImage("METAL GEARS", "ESTtiles30");
  const tileset33 = map4.addTilesetImage("rosoni piccoli", "ESTtiles33");
  const tileset34 = map4.addTilesetImage("Statua Garibaldi", "ESTtiles34");
  const tileset35 = map4.addTilesetImage("TETTI BASSI", "ESTtiles35");
  const tileset36 = map4.addTilesetImage("TETTI BASSI 2", "ESTtiles36");
  const tileset37 = map4.addTilesetImage("TETTI COMPLETI", "ESTtiles37");
  const tileset38 = map4.addTilesetImage("tetti frontali", "ESTtiles38");
  const tileset39 = map4.addTilesetImage("VARIE", "OVESTtiles39");
  const tileset40 = map4.addTilesetImage("roofs1", "OVESTtiles40");

// what tilesets are in which layers
  const belowLayer3 = map4.createLayer('Livello tile 6', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39, tileset40 ]); 
  const belowLayer2 = map4.createLayer('PIAZZE', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39, tileset40  ]); 
  const belowLayer1 = map4.createLayer('STRADE', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39, tileset40  ]); 
  
  const worldLayer2 = map4.createLayer('BUILDINGS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39, tileset40  ]); 
  const worldLayer1 = map4.createLayer('DETAILS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39, tileset40  ]); 
  const worldLayer3 = map4.createLayer('DETAILS 2', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39, tileset40  ]); 

  const aboveLayer1 = map4.createLayer('ROOFS OVER STREETS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39, tileset40  ]); 
  const aboveLayer2 = map4.createLayer('DETAILS OVER STREETS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39, tileset40  ]); 


// inserting how to set the collisions
   worldLayer1.setCollisionByProperty({ collides: true });
   worldLayer2.setCollisionByProperty({ collides: true });
   worldLayer3.setCollisionByProperty({ collides: true });

// because there were some walltiles and such in these layers, I made them collide aswell

aboveLayer1.setDepth(10); // is used for setting the dept of a layer, so the person playing it can for example walk underneath it
aboveLayer2.setDepth(10);

//declaring spawnpoint
  const spawnPoint = map4.findObject("Objects", obj => obj.name === "Spawn Point");
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
  this.physics.add.collider(player, belowLayer3);

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
  .text(16, 16, 'Foligno North', {
    font: "18px monospace",
    fill: "#000000",
    padding: { x: 20, y: 10 },
    backgroundColor: "#ffffff"
  })
  .setScrollFactor(0)
  .setDepth(30);

  const camera = this.cameras.main;
  camera.startFollow(player); //camera follows let player
  camera.setBounds(0, 0, map4.widthInPixels, map4.heightInPixels); //camerasize is mapsize (of gameconfig.)

  cursors = this.input.keyboard.createCursorKeys();

  this.physics.world.setBounds(0, 0, map4.widthInPixels, map4.heightInPixels, true, true, true, true);
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

     if(player.y>maximumY){
      this.goSouth();
     }
     if(player.y<minimumX){
      this.goWest();
     }
     if(player.y>maximumX){
      this.goEast();
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
  goSouth() {
     this.scene.start('sceneMiddleFoligno', { xpixel: player.x, ypixel: 50 });
   }
  goEast() {

  }
  goWest() {

  }
}

export default SceneNordFoligno;
