/**
 * Author: Michael Hadley, mikewesthad.com
 * Althered by : Aaron Sprangers
 */

 let cursors;
 let player;
 let showDebug = false;
 
 class SceneEastFoligno extends Phaser.Scene {
 
   constructor() {
     super({key : 'sceneEastFoligno'});
         
   }
     
 
   init() {
 
   };

   preload() { //normally finished

  this.load.image("tiles1", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/45 GRADI.png");
  this.load.image("tiles2", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/castle1.png");
  this.load.image("tiles3", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/castle45GRADI.png");
  this.load.image("tiles4", "assets/MAPPA FOLIGNO RPG EST/TILES/oaz5u3y9.png");
  this.load.image("tiles5", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/SF_Outside_B.png");
  this.load.image("tiles6", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/Outside_B.png");
  this.load.image("tiles7", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/Inside_A5.png");
  this.load.image("tiles8", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/Inside_C.png");
  this.load.image("tiles9", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/muri1.png");
  this.load.image("tiles10", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/muri2.png");
  this.load.image("tiles11", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/Inside_A4.png");
  this.load.image("tiles12", "assets/MAPPA FOLIGNO RPG EST/TILES/Outside_A3.png");
  this.load.image("tiles13", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/Outside_A5.png");
  this.load.image("tiles14", "assets/MAPPA FOLIGNO RPG EST/TILES/!Door1.png");
  this.load.image("tiles15", "assets/MAPPA FOLIGNO RPG EST/TILES/Lighthouse.png");
  this.load.image("tiles16", "assets/MAPPA FOLIGNO RPG EST/TILES/PORTE45.png");
  this.load.image("tiles17", "assets/MAPPA FOLIGNO RPG EST/TILES/roofs/basic_roofs1+2_recolor2.png");
  this.load.image("tiles18", "assets/MAPPA FOLIGNO RPG EST/TILES/roofs/basic_roofs1+2_Candacis.png");
  this.load.image("tiles19", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/SF_Outside_A5.png");
  this.load.image("tiles20", "assets/MAPPA FOLIGNO RPG EST/TILES/STRADE.png");
  this.load.image("tiles21", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/Outside_C.png");
  this.load.image("tiles22", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/World_C.png");
  this.load.image("tiles23", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/AIUOLA.png");
  this.load.image("tiles24", "assets/MAPPA FOLIGNO RPG EST/TILES/ALBERI.png");
  this.load.image("tiles25", "assets/MAPPA FOLIGNO RPG EST/TILES/ancient doors.png");
  this.load.image("tiles26", "assets/MAPPA FOLIGNO RPG EST/TILES/BALCONI.png");
  this.load.image("tiles27", "assets/MAPPA FOLIGNO RPG EST/TILES/big windows.png");
  this.load.image("tiles28", "assets/MAPPA FOLIGNO RPG EST/TILES/GLASS DOORS.png");
  this.load.image("tiles29", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/ladders_45degrees.png");
  this.load.image("tiles30", "assets/MAPPA FOLIGNO RPG EST/TILES/METAL GEARS.png");
  this.load.image("tiles31", "assets/MAPPA FOLIGNO RPG EST/QUADRIVIO EST.png");
  this.load.image("tiles32", "assets/MAPPA FOLIGNO RPG EST/QUADRIVIO2.jpg");
  this.load.image("tiles33", "assets/MAPPA FOLIGNO RPG EST/TILES/rosoni piccoli.png");
  this.load.image("tiles34", "assets/MAPPA FOLIGNO RPG EST/Statua Garibaldi.png");
  this.load.image("tiles35", "assets/MAPPA FOLIGNO RPG EST/TILES/TETTI BASSI.png");
  this.load.image("tiles36", "assets/MAPPA FOLIGNO RPG EST/TILES/TETTI BASSI 2.png");
  this.load.image("tiles37", "assets/MAPPA FOLIGNO RPG EST/TILES/TETTI COMPLETI.png");
  this.load.image("tiles38", "assets/MAPPA FOLIGNO RPG EST/TILES/tetti frontali.png");
  this.load.image("tiles39", "assets/MAPPA FOLIGNO RPG EST/TILES/VARIE.png");

  this.load.tilemapTiledJSON("map", "assets/MAPPA FOLIGNO RPG EST/QUADRIVIO-EST.json");

  this.load.atlas('BAsprites', 'assets/atlas/BeatriceArzittu.png', 'assets/atlas/BAsprites.json');

}

create() {

  //creating the map
  const map = this.make.tilemap({ key: "map" });

  //uploading all the .png-files used for making the tilesets !! I'm hereeeeee
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
  const tileset23 = map.addTilesetImage("AIUOLA", "tiles23");
  const tileset24 = map.addTilesetImage("ALBERI", "tiles24");
  const tileset25 = map.addTilesetImage("ancient doors", "tiles25");
  const tileset26 = map.addTilesetImage("BALCONI", "tiles26");
  const tileset27 = map.addTilesetImage("big windows", "tiles27");
  const tileset28 = map.addTilesetImage("GLASS DOORS", "tiles28");
  const tileset29 = map.addTilesetImage("ladders_45degrees", "tiles29");
  const tileset30 = map.addTilesetImage("METAL GEARS", "tiles30");
  const tileset31 = map.addTilesetImage("QUADRIVIO EST", "tiles31");
  const tileset32 = map.addTilesetImage("QUADRIVIO2", "tiles32");
  const tileset33 = map.addTilesetImage("rosoni piccoli", "tiles33");
  const tileset34 = map.addTilesetImage("Statua Garibaldi", "tiles34");
  const tileset35 = map.addTilesetImage("TETTI BASSI", "tiles35");
  const tileset36 = map.addTilesetImage("TETTI BASSI 2", "tiles36");
  const tileset37 = map.addTilesetImage("TETTI COMPLETI", "tiles37");
  const tileset38 = map.addTilesetImage("tetti frontali", "tiles38");
  const tileset39 = map.addTilesetImage("VARIE", "tiles39");



  // what tilesets are in which layers
  const belowLayer = map.createLayer('STREET', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset31, tileset32, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39 ]); 
  const belowLayer2 = map.createLayer('PIAZZE', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset31, tileset32, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39 ]); 
  const belowLayer3 = map.createLayer('Livello tile 6', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset31, tileset32, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39 ]); 

  const worldLayer = map.createLayer('DETAILS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset31, tileset32, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39 ]); 
  const worldLayer2 = map.createLayer('BUILDINGS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset31, tileset32, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39 ]); 
  const worldLayer3 = map.createLayer('Livello tile 7', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset31, tileset32, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39 ]); 

//inserting how to set the collisions
  worldLayer.setCollisionByProperty({ collides: true });
  worldLayer2.setCollisionByProperty({ collides: true });
  worldLayer3.setCollisionByProperty({ collides: true });

// because there were some walltiles and such in these layers, I made them collide aswell
  belowLayer.setCollisionByProperty({ collides: true });
  belowLayer2.setCollisionByProperty({ collides: true });
  belowLayer3.setCollisionByProperty({ collides: true });

  //aboveLayer.setDepth(10); -> is used for setting the dept of a layer, so the person playing it can for example walk underneath it

  //declaring spawnpoint
  const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");
  
  // Create a sprite with physics enabled via the physics system. The image used for the sprite has
  // a bit of whitespace, so I'm using setSize & setOffset to control the size of the player's body.

player = this.physics.add
.sprite(spawnPoint.x, spawnPoint.y, "BAsprites", "front002")
.setSize(30, 40)
.setOffset(0, 24);

  // Watch the player and worldLayer for collisions, for the duration of the scene:
  this.physics.add.collider(player, worldLayer);
  this.physics.add.collider(player, worldLayer2);
  this.physics.add.collider(player, worldLayer3);

  //because there were some walltiles and such in these layers, I made them collide aswell
  this.physics.add.collider(player, belowLayer); 
  this.physics.add.collider(player, belowLayer2);

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

  const camera = this.cameras.main;
  camera.startFollow(player); //camera follows let player
  camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels); //camerasize is mapsize (of gameconfig.)

  cursors = this.input.keyboard.createCursorKeys();

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

  // Debug graphics - Under Construction
  
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

export default SceneEastFoligno;
