/**
 * Author: Michael Hadley, mikewesthad.com
 * Althered by : Aaron Sprangers
 */

let cursors;
let player;
let showDebug = false;

class StartSceneMiddleFoligno extends Phaser.Scene {

	constructor() {
		super({key : 'startSceneMiddleFoligno'});
        
	}
    

	init() {
	};

  preload() { //normally finished

  this.load.image("tiles1", "assets/MAPPA FOLIGNO RPG/TILES/tilesets/45 GRADI.png");
  this.load.image("tiles2", "assets/MAPPA FOLIGNO RPG/TILES/tilesets/castle1.png");
  this.load.image("tiles3", "assets/MAPPA FOLIGNO RPG/TILES/tilesets/castle45GRADI.png");
  this.load.image("tiles4", "assets/MAPPA FOLIGNO RPG/TILES/oaz5u3y9.png");
  this.load.image("tiles5", "assets/MAPPA FOLIGNO RPG/TILES/tilesets/SF_Outside_B.png");
  this.load.image("tiles6", "assets/MAPPA FOLIGNO RPG/TILES/tilesets/Outside_B.png");
  this.load.image("tiles7", "assets/MAPPA FOLIGNO RPG/TILES/tilesets/Inside_A5.png");
  this.load.image("tiles8", "assets/MAPPA FOLIGNO RPG/TILES/tilesets/Inside_C.png");
  this.load.image("tiles9", "assets/MAPPA FOLIGNO RPG/TILES/tilesets/muri1.png");
  this.load.image("tiles10", "assets/MAPPA FOLIGNO RPG/TILES/tilesets/muri2.png");
  this.load.image("tiles11", "assets/MAPPA FOLIGNO RPG/TILES/tilesets/Inside_A4.png");
  this.load.image("tiles12", "assets/MAPPA FOLIGNO RPG/TILES/Outside_A3.png");
  this.load.image("tiles13", "assets/MAPPA FOLIGNO RPG/TILES/tilesets/Outside_A5.png");
  this.load.image("tiles14", "assets/MAPPA FOLIGNO RPG/TILES/!Door1.png");
  this.load.image("tiles15", "assets/MAPPA FOLIGNO RPG/TILES/Lighthouse.png");
  this.load.image("tiles16", "assets/MAPPA FOLIGNO RPG/TILES/PORTE45.png");
  this.load.image("tiles17", "assets/MAPPA FOLIGNO RPG/TILES/roofs/basic_roofs1+2_recolor2.png");
  this.load.image("tiles18", "assets/MAPPA FOLIGNO RPG/TILES/roofs/basic_roofs1+2_Candacis.png");
  this.load.image("tiles19", "assets/MAPPA FOLIGNO RPG/TILES/tilesets/SF_Outside_A5.png");
  this.load.image("tiles20", "assets/MAPPA FOLIGNO RPG/TILES/STRADE.png");
  this.load.image("tiles21", "assets/MAPPA FOLIGNO RPG/TILES/tilesets/Outside_C.png");
  this.load.image("tiles22", "assets/MAPPA FOLIGNO RPG/TILES/tilesets/World_C.png");

  this.load.tilemapTiledJSON("startmap", "assets/MAPPA FOLIGNO RPG/QUADRIVIO.json");

  this.load.atlas('BAsprites', 'assets/atlas/BeatriceArzittu.png', 'assets/atlas/BAsprites.json');

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
  const tileset11 = startmap.addTilesetImage("MURI3", "tiles11");
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

  // what tilesets are in which layers
  const belowLayer = startmap.createLayer('STREET', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22 ]); 
  const belowLayer2 = startmap.createLayer('PIAZZE', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22 ]); 

  const worldLayer = startmap.createLayer('CASE', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22 ]); 
  const worldLayer2 = startmap.createLayer('PORTE E FINESTRE', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22 ]); 
  const worldLayer3 = startmap.createLayer('DETTAGLI', [  tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10, tileset11, tileset12, tileset13, tileset14, tileset15, tileset16, tileset17, tileset18,tileset19, tileset20, tileset21, tileset22 ]); 

//inserting how to set the collisions
  worldLayer.setCollisionByProperty({ collides: true });
  worldLayer2.setCollisionByProperty({ collides: true });
  worldLayer3.setCollisionByProperty({ collides: true });

  // because there were some walltiles and such in these layers, I made them collide aswell
  belowLayer.setCollisionByProperty({ collides: true });
  belowLayer2.setCollisionByProperty({ collides: true });

  belowLayer.setDepth(2);
  belowLayer2.setDepth(1);



  //declaring spawnpoint
  const spawnPoint = startmap.findObject("Objects", obj => obj.name === "Spawn Point");
  
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
  camera.setBounds(0, 0, startmap.widthInPixels, startmap.heightInPixels); //camerasize is mapsize (of gameconfig.)

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

    if(player.x>9800){
      this.goEast();
    }

    if(player.x<5){
      this.goWest();
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
  this.scene.start('sceneEastFoligno', { xpixel: 5, ypixel:player.y });
  }

goWest() {
  this.scene.start('sceneWestFoligno', { xpixel: 9770, ypixel:player.y });
  }


}

export default StartSceneMiddleFoligno;
