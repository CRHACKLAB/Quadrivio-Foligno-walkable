/**
 * Author: Michael Hadley, mikewesthad.com
 * Althered by : Aaron Sprangers
 */

 import PreloadScene from './preloadScene.js';

 let cursors;
 let player;
 let maximumX=9800;
 let minimumX=20;
 let minimumY=5;

 var preloadScene = new PreloadScene();
 
 class SceneSouthFoligno extends Phaser.Scene {
 
   constructor() {
     super({key : 'sceneSouthFoligno'});    
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
  const map5 = this.make.tilemap({ key: "map5" });

//problem with 1 house in West
  const tileset3 = map5.addTilesetImage("castle45GRADI", "ESTtiles3");
  const tileset4 = map5.addTilesetImage("CHIESA", "ESTtiles4");
  const tileset5 = map5.addTilesetImage("ESTERNO1", "ESTtiles5");
  const tileset6 = map5.addTilesetImage("ESTERNO2", "ESTtiles6");
  const tileset7 = map5.addTilesetImage("Inside_A5", "ESTtiles7");
  const tileset9 = map5.addTilesetImage("muri1", "OVESTtiles9");
  const tileset10 = map5.addTilesetImage("muri2", "OVESTtiles10");
  const tileset11 = map5.addTilesetImage("MURI3", "ESTtiles11");
  const tileset13 = map5.addTilesetImage("PAVIMENTI1", "ESTtiles13");
  const tileset15 = map5.addTilesetImage("PORTE2", "ESTtiles15");
  const tileset16 = map5.addTilesetImage("PORTE45", "ESTtiles16");
  const tileset18 = map5.addTilesetImage("ROOF2", "ESTtiles18");
  const tileset19 = map5.addTilesetImage("SF_Outside_A5", "ESTtiles19");
  const tileset21 = map5.addTilesetImage("TETTI1", "ESTtiles21");
  const tileset23 = map5.addTilesetImage("AIUOLA", "ESTtiles23");
  const tileset24 = map5.addTilesetImage("ALBERI", "ESTtiles24");
  const tileset36 = map5.addTilesetImage("TETTI BASSI 2", "ESTtiles36");
  const tileset37 = map5.addTilesetImage("TETTI COMPLETI", "ESTtiles37");
  const tileset38 = map5.addTilesetImage("tetti frontali", "ESTtiles38");

// what tilesets are in which layers
  const belowLayer1 = map5.createLayer('PIAZZE', [  tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset10, tileset11, tileset13, tileset15, tileset16, tileset18,tileset19, tileset21, tileset23, tileset24, tileset36, tileset37, tileset38  ]); 
  const belowLayer2 = map5.createLayer('SOPRA PIAZZE', [  tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset10, tileset11, tileset13, tileset15, tileset16, tileset18,tileset19, tileset21, tileset23, tileset24, tileset36, tileset37, tileset38  ]);  
  const belowLayer3 = map5.createLayer('STRADE', [  tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset10, tileset11, tileset13, tileset15, tileset16, tileset18,tileset19, tileset21, tileset23, tileset24, tileset36, tileset37, tileset38  ]); 
  
  const worldLayer1 = map5.createLayer('STREET', [  tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset10, tileset11, tileset13, tileset15, tileset16, tileset18,tileset19, tileset21, tileset23, tileset24, tileset36, tileset37, tileset38  ]); 
  const worldLayer2 = map5.createLayer('SOTTO TETTI', [  tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset10, tileset11, tileset13, tileset15, tileset16, tileset18,tileset19, tileset21, tileset23, tileset24, tileset36, tileset37, tileset38  ]); 
  const worldLayer3 = map5.createLayer('SOTTOPALAZZI', [  tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset10, tileset11, tileset13, tileset15, tileset16, tileset18,tileset19, tileset21, tileset23, tileset24, tileset36, tileset37, tileset38  ]); 
  const worldLayer4 = map5.createLayer('BUILDINGS', [  tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset10, tileset11, tileset13, tileset15, tileset16, tileset18,tileset19, tileset21, tileset23, tileset24, tileset36, tileset37, tileset38  ]); 
  const worldLayer5 = map5.createLayer('SOTTO DECORAZIONI', [  tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset10, tileset11, tileset13, tileset15, tileset16, tileset18,tileset19, tileset21, tileset23, tileset24, tileset36, tileset37, tileset38  ]); 
  const worldLayer6 = map5.createLayer('DEC.PALAZZI', [  tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset10, tileset11, tileset13, tileset15, tileset16, tileset18,tileset19, tileset21, tileset23, tileset24, tileset36, tileset37, tileset38  ]); 
  const worldLayer7 = map5.createLayer('DECORATIONS', [  tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset10, tileset11, tileset13, tileset15, tileset16, tileset18,tileset19, tileset21, tileset23, tileset24, tileset36, tileset37, tileset38  ]); 
  
  const aboveLayer1 = map5.createLayer('ROOFS OVER STREETS', [  tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset10, tileset11, tileset13, tileset15, tileset16, tileset18,tileset19, tileset21, tileset23, tileset24, tileset36, tileset37, tileset38  ]); 
  const aboveLayer2 = map5.createLayer('DECORATIONS OVER STREETS', [  tileset3, tileset4, tileset5, tileset6, tileset7, tileset9, tileset10, tileset11, tileset13, tileset15, tileset16, tileset18,tileset19, tileset21, tileset23, tileset24, tileset36, tileset37, tileset38  ]); 


// inserting how to set the collisions
    worldLayer1.setCollisionByProperty({ collides: true });
    worldLayer2.setCollisionByProperty({ collides: true });
    worldLayer3.setCollisionByProperty({ collides: true });
    worldLayer4.setCollisionByProperty({ collides: true });
    worldLayer5.setCollisionByProperty({ collides: true });
    worldLayer6.setCollisionByProperty({ collides: true });
    worldLayer7.setCollisionByProperty({ collides: true });

// because there were some walltiles and such in these layers, I made them collide aswell

 aboveLayer1.setDepth(10); // is used for setting the dept of a layer, so the person playing it can for example walk underneath it
 aboveLayer2.setDepth(10);

//declaring spawnpoint
  const spawnPoint = map5.findObject("Objects", obj => obj.name === "Spawn Point");
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
   this.physics.add.collider(player, worldLayer6);
   this.physics.add.collider(player, worldLayer7);


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
  .text(16, 16, 'Foligno South', {
    font: "18px monospace",
    fill: "#000000",
    padding: { x: 20, y: 10 },
    backgroundColor: "#ffffff"
  })
  .setScrollFactor(0)
  .setDepth(30);

  const camera = this.cameras.main;
  camera.startFollow(player); //camera follows let player
  camera.setBounds(0, 0, map5.widthInPixels, map5.heightInPixels); //camerasize is mapsize (of gameconfig.)

  cursors = this.input.keyboard.createCursorKeys();

  this.physics.world.setBounds(0, 0, map5.widthInPixels, map5.heightInPixels, true, true, true, true);
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
    this.scene.start('sceneSouthEastFoligno', { xpixel: 35, ypixel:player.y });
  }

goWest() {
    this.scene.start('sceneSouthWestFoligno', { xpixel: 9800, ypixel:player.y });
  }

goNord() {
    this.scene.start('sceneMiddleFoligno', { xpixel: player.x, ypixel:7430 });
  }

}

export default SceneSouthFoligno;
