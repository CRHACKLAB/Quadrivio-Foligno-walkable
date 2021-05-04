/**
 * Author: Michael Hadley, mikewesthad.com
 * Althered by : Aaron Sprangers
 */

 let cursors;
 let player;
 let showDebug = false;
 
 class SceneWestFoligno extends Phaser.Scene {
 
   constructor() {
     super({key : 'sceneWestFoligno'});
         
   }
     
 
   init(data) {

    this.xpixel = data.xpixel;
    this.ypixel = data.ypixel;
 
   };

   preload() { //normally finished

  // this.load.image("tiles1", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/45 GRADI.png");
  // this.load.image("tiles2", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/castle1.png");
  // this.load.image("tiles3", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/castle45GRADI.png");
  // this.load.image("tiles4", "assets/MAPPA FOLIGNO RPG EST/TILES/oaz5u3y9.png");
  // this.load.image("tiles5", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/SF_Outside_B.png");
  // this.load.image("tiles6", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/Outside_B.png");
  // this.load.image("tiles7", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/Inside_A5.png");
  // this.load.image("tiles8", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/Inside_C.png");
  // this.load.image("tiles9", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/muri1.png");
  // this.load.image("tiles10", "assets/MAPPA FOLIGNO RPG OVEST/TILES/tilesets/muri2.png");
  // this.load.image("tiles11", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/Inside_A4.png");
  // this.load.image("tiles12", "assets/MAPPA FOLIGNO RPG OVEST/TILES/Outside_A3.png");
  // this.load.image("tiles13", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/Outside_A5.png");
  // this.load.image("tiles14", "assets/MAPPA FOLIGNO RPG EST/TILES/!Door1.png");
  // this.load.image("tiles15", "assets/MAPPA FOLIGNO RPG EST/TILES/Lighthouse.png");
  // this.load.image("tiles16", "assets/MAPPA FOLIGNO RPG EST/TILES/PORTE45.png");
  // this.load.image("tiles17", "assets/MAPPA FOLIGNO RPG EST/TILES/roofs/basic_roofs1+2_recolor2.png");
  // this.load.image("tiles18", "assets/MAPPA FOLIGNO RPG EST/TILES/roofs/basic_roofs1+2_Candacis.png");
  // this.load.image("tiles19", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/SF_Outside_A5.png");
  // this.load.image("tiles20", "assets/MAPPA FOLIGNO RPG EST/TILES/STRADE.png");
  // this.load.image("tiles21", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/Outside_C.png");
  // this.load.image("tiles22", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/World_C.png");
  // this.load.image("tiles23", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/AIUOLA.png");
  // this.load.image("tiles24", "assets/MAPPA FOLIGNO RPG EST/TILES/ALBERI.png");
  // this.load.image("tiles25", "assets/MAPPA FOLIGNO RPG EST/TILES/ancient doors.png");
  // this.load.image("tiles26", "assets/MAPPA FOLIGNO RPG EST/TILES/BALCONI.png");
  // this.load.image("tiles27", "assets/MAPPA FOLIGNO RPG EST/TILES/big windows.png");
  // this.load.image("tiles28", "assets/MAPPA FOLIGNO RPG EST/TILES/GLASS DOORS.png");
  // this.load.image("tiles29", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/ladders_45degrees.png");
  // this.load.image("tiles30", "assets/MAPPA FOLIGNO RPG EST/TILES/METAL GEARS.png");
  // this.load.image("tiles31", "assets/MAPPA FOLIGNO RPG EST/QUADRIVIO EST.png");
  // this.load.image("tiles32", "assets/MAPPA FOLIGNO RPG EST/QUADRIVIO2.jpg");
  // this.load.image("tiles33", "assets/MAPPA FOLIGNO RPG EST/TILES/rosoni piccoli.png");
  // this.load.image("tiles34", "assets/MAPPA FOLIGNO RPG EST/Statua Garibaldi.png");
  // this.load.image("tiles35", "assets/MAPPA FOLIGNO RPG EST/TILES/TETTI BASSI.png");
  // this.load.image("tiles36", "assets/MAPPA FOLIGNO RPG EST/TILES/TETTI BASSI 2.png");
  // this.load.image("tiles37", "assets/MAPPA FOLIGNO RPG EST/TILES/TETTI COMPLETI.png");
  // this.load.image("tiles38", "assets/MAPPA FOLIGNO RPG EST/TILES/tetti frontali.png");
  // this.load.image("tiles39", "assets/MAPPA FOLIGNO RPG OVEST/TILES/VARIE.png");
  // this.load.image("tiles40", "assets/MAPPA FOLIGNO RPG OVEST/TILES/roofs1.png");

  // this.load.tilemapTiledJSON("map3", "assets/MAPPA FOLIGNO RPG OVEST/QUADRIVIO-OVEST.json");

}

create() {

  //creating the map
  const map3 = this.make.tilemap({ key: "map3" });

  //uploading all the .png-files used for making the tilesets !! I'm hereeeeee
  const tileset1 = map3.addTilesetImage("45 GRADI", "ESTtiles1");
  const tileset2 = map3.addTilesetImage("castle1", "ESTtiles2");
  const tileset3 = map3.addTilesetImage("castle45GRADI", "ESTtiles3");
  const tileset4 = map3.addTilesetImage("CHIESA", "ESTtiles4");
  const tileset5 = map3.addTilesetImage("ESTERNO1", "ESTtiles5");
  const tileset6 = map3.addTilesetImage("ESTERNO2", "ESTtiles6");
  const tileset7 = map3.addTilesetImage("Inside_A5", "ESTtiles7");
  const tileset8 = map3.addTilesetImage("Inside_C", "ESTtiles8");
  const tileset9 = map3.addTilesetImage("muri1", "ESTtiles9");
  const tileset10 = map3.addTilesetImage("muri2", "OVESTtiles10");
  const tileset11 = map3.addTilesetImage("MURI3", "ESTtiles11");
  const tileset12 = map3.addTilesetImage("Outside_A3", "OVESTtiles12");
  const tileset13 = map3.addTilesetImage("PAVIMENTI1", "ESTtiles13");
  const tileset14 = map3.addTilesetImage("PORTE1", "ESTtiles14");
  const tileset15 = map3.addTilesetImage("PORTE2", "ESTtiles15");
  const tileset16 = map3.addTilesetImage("PORTE45", "ESTtiles16");
  const tileset17 = map3.addTilesetImage("ROOF1", "ESTtiles17");
  const tileset18 = map3.addTilesetImage("ROOF2", "ESTtiles18");
  const tileset19 = map3.addTilesetImage("SF_Outside_A5", "ESTtiles19");
  const tileset20 = map3.addTilesetImage("STRADE", "ESTtiles20");
  const tileset21 = map3.addTilesetImage("TETTI1", "ESTtiles21");
  const tileset22 = map3.addTilesetImage("World_C", "ESTtiles22");
  const tileset23 = map3.addTilesetImage("AIUOLA", "ESTtiles23");
  const tileset24 = map3.addTilesetImage("ALBERI", "ESTtiles24");
  const tileset25 = map3.addTilesetImage("ancient doors", "ESTtiles25");
  const tileset26 = map3.addTilesetImage("BALCONI", "ESTtiles26");
  const tileset27 = map3.addTilesetImage("big windows", "ESTtiles27");
  const tileset28 = map3.addTilesetImage("GLASS DOORS", "ESTtiles28");
  const tileset29 = map3.addTilesetImage("ladders_45degrees", "ESTtiles29");
  const tileset30 = map3.addTilesetImage("METAL GEARS", "ESTtiles30");
  const tileset31 = map3.addTilesetImage("QUADRIVIO EST", "ESTtiles31");
  const tileset32 = map3.addTilesetImage("QUADRIVIO2", "ESTtiles32");
  const tileset33 = map3.addTilesetImage("rosoni piccoli", "ESTtiles33");
  const tileset34 = map3.addTilesetImage("Statua Garibaldi", "ESTtiles34");
  const tileset35 = map3.addTilesetImage("TETTI BASSI", "ESTtiles35");
  const tileset36 = map3.addTilesetImage("TETTI BASSI 2", "ESTtiles36");
  const tileset37 = map3.addTilesetImage("TETTI COMPLETI", "ESTtiles37");
  const tileset38 = map3.addTilesetImage("tetti frontali", "ESTtiles38");
  const tileset39 = map3.addTilesetImage("VARIE", "OVESTtiles39");
  const tileset40 = map3.addTilesetImage("roofs1", "OVESTtiles40");



  // what tilesets are in which layers
  const belowLayer3 = map3.createLayer('Livello tile 6', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset31, tileset32, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39, tileset40 ]); 
  const belowLayer2 = map3.createLayer('PIAZZE', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset31, tileset32, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39, tileset40  ]); 
  const belowLayer = map3.createLayer('STRADE', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset31, tileset32, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39, tileset40  ]); 
  const belowLayer4 = map3.createLayer('BASE', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset31, tileset32, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39, tileset40  ]); 



  const worldLayer2 = map3.createLayer('BUILDINGS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset31, tileset32, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39, tileset40  ]); 
  const worldLayer = map3.createLayer('DETAILS', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset31, tileset32, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39, tileset40  ]); 
  const worldLayer3 = map3.createLayer('DETAILS 2', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22, tileset23, tileset24, tileset25, tileset26, tileset27, tileset28, tileset29, tileset30, tileset31, tileset32, tileset33, tileset34, tileset35, tileset36, tileset37, tileset38, tileset39, tileset40  ]); 

//inserting how to set the collisions
   worldLayer.setCollisionByProperty({ collides: true });
   worldLayer2.setCollisionByProperty({ collides: true });
   worldLayer3.setCollisionByProperty({ collides: true });

// // because there were some walltiles and such in these layers, I made them collide aswell
   belowLayer.setCollisionByProperty({ collides: true });
   belowLayer2.setCollisionByProperty({ collides: true });
   belowLayer3.setCollisionByProperty({ collides: true });
   belowLayer4.setCollisionByProperty({ collides: true });

  //aboveLayer.setDepth(10); -> is used for setting the dept of a layer, so the person playing it can for example walk underneath it

  //declaring spawnpoint
  const spawnPoint = map3.findObject("Objects", obj => obj.name === "Spawn Point");
  spawnPoint.x=this.xpixel;
  spawnPoint.y=this.ypixel;
  
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
  this.physics.add.collider(player, belowLayer3);
  this.physics.add.collider(player, belowLayer3);

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
  camera.setBounds(0, 0, map3.widthInPixels, map3.heightInPixels); //camerasize is mapsize (of gameconfig.)

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

    if(player.x>9770){
      this.goEast();
      console.log(player.x);

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
  this.scene.start('sceneMiddleFoligno', { xpixel: 15, ypixel:player.y });
   }
  
  
}

export default SceneWestFoligno;
