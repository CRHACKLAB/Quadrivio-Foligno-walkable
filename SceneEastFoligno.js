/*
Author: Aaron Sprangers
 */
 import PreloadScene from './preloadScene.js';

 let cursors;
 let player;
 let minimumX=20;//coördinates where the player jumps to the map left of this map
 let maximumY=7460;//coördinates where the player jumps to the map below this map
 let minimumY=2; //coördinates where the player jumps to the map above this map

 var preloadScene = new PreloadScene();
 
 class SceneEastFoligno extends Phaser.Scene {
 
constructor() {
     super({key : 'sceneEastFoligno'}); 
  }

init(data) {//to make sure the player arrives at the right coördinates when switching maps
    this.xpixel = data.xpixel;
    this.ypixel = data.ypixel;
   };

preload() { //loads all the preloads from the preloadscene into this preload which enables smooth connection between the maps
    preloadScene;
  }

create() {
//creating the map
  const map2 = this.make.tilemap({ key: "map2" });

//uploading all the .png-files from preloadScene used for making the tilesets
  const tileset1 = map2.addTilesetImage("45 GRADI", "ESTtiles1");
  const tileset2 = map2.addTilesetImage("castle1", "ESTtiles2");
  const tileset3 = map2.addTilesetImage("castle45GRADI", "ESTtiles3");
  const tileset4 = map2.addTilesetImage("CHIESA", "ESTtiles4");
  const tileset5 = map2.addTilesetImage("ESTERNO1", "ESTtiles5");
  const tileset6 = map2.addTilesetImage("ESTERNO2", "ESTtiles6");
  const tileset7 = map2.addTilesetImage("Inside_A5", "ESTtiles7");
  const tileset8 = map2.addTilesetImage("Inside_C", "ESTtiles8");
  const tileset9 = map2.addTilesetImage("muri1", "ESTtiles9");
  const tileset10 = map2.addTilesetImage("muri2", "ESTtiles10");
  const tileset11 = map2.addTilesetImage("MURI3", "ESTtiles11");
  const tileset12 = map2.addTilesetImage("Outside_A3", "ESTtiles12");
  const tileset13 = map2.addTilesetImage("PAVIMENTI1", "ESTtiles13");
  const tileset14 = map2.addTilesetImage("PORTE1", "ESTtiles14");
  const tileset15 = map2.addTilesetImage("PORTE2", "ESTtiles15");
  const tileset16 = map2.addTilesetImage("PORTE45", "ESTtiles16");
  const tileset17 = map2.addTilesetImage("ROOF1", "ESTtiles17");
  const tileset18 = map2.addTilesetImage("ROOF2", "ESTtiles18");
  const tileset19 = map2.addTilesetImage("SF_Outside_A5", "ESTtiles19");
  const tileset20 = map2.addTilesetImage("STRADE", "ESTtiles20");
  const tileset21 = map2.addTilesetImage("TETTI1", "ESTtiles21");
  const tileset22 = map2.addTilesetImage("World_C", "ESTtiles22");
  const tileset23 = map2.addTilesetImage("AIUOLA", "ESTtiles23");
  const tileset24 = map2.addTilesetImage("ALBERI", "ESTtiles24");
  const tileset25 = map2.addTilesetImage("ancient doors", "ESTtiles25");
  const tileset26 = map2.addTilesetImage("BALCONI", "ESTtiles26");
  const tileset27 = map2.addTilesetImage("big windows", "ESTtiles27");
  const tileset28 = map2.addTilesetImage("GLASS DOORS", "ESTtiles28");
  const tileset29 = map2.addTilesetImage("ladders_45degrees", "ESTtiles29");
  const tileset30 = map2.addTilesetImage("METAL GEARS", "ESTtiles30");
  const tileset33 = map2.addTilesetImage("rosoni piccoli", "ESTtiles33");
  const tileset34 = map2.addTilesetImage("Statua Garibaldi", "ESTtiles34");
  const tileset35 = map2.addTilesetImage("TETTI BASSI", "ESTtiles35");
  const tileset36 = map2.addTilesetImage("TETTI BASSI 2", "ESTtiles36");
  const tileset37 = map2.addTilesetImage("TETTI COMPLETI", "ESTtiles37");
  const tileset38 = map2.addTilesetImage("tetti frontali", "ESTtiles38");
  const tileset39 = map2.addTilesetImage("VARIE", "ESTtiles39");

// what tilesets are in which layers
  const belowLayer3 = map2.createLayer('Livello tile 6', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39 ]); 
  const belowLayer2 = map2.createLayer('PLAZAS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39 ]); 
  const belowLayer1 = map2.createLayer('STREETS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39 ]); 

  const worldLayer2 = map2.createLayer('BUILDINGS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39 ]); 
  const worldLayer1 = map2.createLayer('DETAILS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39 ]); 
  const worldLayer3 = map2.createLayer('Livello tile 7', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39 ]); 

  const aboveLayer2 = map2.createLayer('ROOFS OVER STREETS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39 ]); 
  const aboveLayer1 = map2.createLayer('DETAILS OVER STREETS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39 ]); 
  const aboveLayer3 = map2.createLayer('DETAILS OVER STREETS 2', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39 ]); 

// inserting how to set the collisions
   worldLayer1.setCollisionByProperty({ collides: true });
   worldLayer2.setCollisionByProperty({ collides: true });
   worldLayer3.setCollisionByProperty({ collides: true });

//is used for setting the dept of a layer, so the person playing it can for example walk underneath it
  aboveLayer1.setDepth(10);
  aboveLayer2.setDepth(10);
  aboveLayer3.setDepth(10);

//declaring spawnpoint
  const spawnPoint = map2.findObject("Objects", obj => obj.name === "Spawn Point");
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

  this.add // tells you in what part of the map you are in this moment
  .text(16, 16, 'Foligno East', {
    font: "18px monospace",
    fill: "#000000",
    padding: { x: 20, y: 10 },
    backgroundColor: "#ffffff"
  })
  .setScrollFactor(0)
  .setDepth(30);

  const camera = this.cameras.main;
  camera.startFollow(player); //camera follows let player
  camera.setBounds(0, 0, map2.widthInPixels, map2.heightInPixels); //camerasize is mapsize (of gameconfig.)

  // makes it possible to move around the map with the arrow keys
  cursors = this.input.keyboard.createCursorKeys();

  // create boundries of the map 
  this.physics.world.setBounds(0, 0, map2.widthInPixels, map2.heightInPixels, true, true, true, true);
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

    if(player.x<minimumX){
      this.goWest();
    }

    if(player.y>maximumY){
      this.goSouth();
    }

    if(player.y<minimumY){
      this.goNorth();
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

goWest() {// jumps the player to other map
  this.scene.start('sceneMiddleFoligno', { xpixel: 9800, ypixel:player.y });
  }

goSouth() {// jumps the player to other map
    this.scene.start('sceneSouthEastFoligno', { xpixel: player.x, ypixel:25 });
  }

goNorth() {// jumps the player to other map

  }
}

export default SceneEastFoligno;
