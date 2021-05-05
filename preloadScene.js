export default class PreloadScene extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'preloadScene' });
    }

    preload ()
    {
		var progressBar = this.add.graphics();
	var progressBox = this.add.graphics();
	progressBox.fillStyle(0x222222, 0.8);
	progressBox.fillRect(240, 270, 320, 50);
	
	var width = this.cameras.main.width;
	var height = this.cameras.main.height;
	var loadingText = this.make.text({
		x: width / 2,
		y: height / 2 - 50,
		text: 'Loading...',
		style: {
			font: '20px monospace',
			fill: '#ffffff'
		}
	});
	loadingText.setOrigin(0.5, 0.5);
	
	var percentText = this.make.text({
		x: width / 2,
		y: height / 2 - 5,
		text: '0%',
		style: {
			font: '18px monospace',
			fill: '#ffffff'
		}
	});
	percentText.setOrigin(0.5, 0.5);
	
	var assetText = this.make.text({
		x: width / 2,
		y: height / 2 + 50,
		text: '',
		style: {
			font: '18px monospace',
			fill: '#ffffff'
		}
	});

	assetText.setOrigin(0.5, 0.5);
	
	this.load.on('progress', function (value) {
		percentText.setText(parseInt(value * 100) + '%');
		progressBar.clear();
		progressBar.fillStyle(0xffffff, 1);
		progressBar.fillRect(250, 280, 300 * value, 30);
	});
	
	this.load.on('fileprogress', function (file) {
		assetText.setText('Loading asset: ' + file.key);
	});

	this.load.on('complete', function () {
		progressBar.destroy();
		progressBox.destroy();
		loadingText.destroy();
		percentText.destroy();
		assetText.destroy();
	});
	
	for (var i = 0; i < 5000; i++) {

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

		this.load.image("ESTtiles1", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/45 GRADI.png");
		this.load.image("ESTtiles2", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/castle1.png");
		this.load.image("ESTtiles3", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/castle45GRADI.png");
		this.load.image("ESTtiles4", "assets/MAPPA FOLIGNO RPG EST/TILES/oaz5u3y9.png");
		this.load.image("ESTtiles5", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/SF_Outside_B.png");
		this.load.image("ESTtiles6", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/Outside_B.png");
		this.load.image("ESTtiles7", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/Inside_A5.png");
		this.load.image("ESTtiles8", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/Inside_C.png");
		this.load.image("ESTtiles9", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/muri1.png");
		this.load.image("ESTtiles10", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/muri2.png");
		this.load.image("ESTtiles11", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/Inside_A4.png");
		this.load.image("ESTtiles12", "assets/MAPPA FOLIGNO RPG EST/TILES/Outside_A3.png");
		this.load.image("ESTtiles13", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/Outside_A5.png");
		this.load.image("ESTtiles14", "assets/MAPPA FOLIGNO RPG EST/TILES/!Door1.png");
		this.load.image("ESTtiles15", "assets/MAPPA FOLIGNO RPG EST/TILES/Lighthouse.png");
		this.load.image("ESTtiles16", "assets/MAPPA FOLIGNO RPG EST/TILES/PORTE45.png");
		this.load.image("ESTtiles17", "assets/MAPPA FOLIGNO RPG EST/TILES/roofs/basic_roofs1+2_recolor2.png");
		this.load.image("ESTtiles18", "assets/MAPPA FOLIGNO RPG EST/TILES/roofs/basic_roofs1+2_Candacis.png");
		this.load.image("ESTtiles19", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/SF_Outside_A5.png");
		this.load.image("ESTtiles20", "assets/MAPPA FOLIGNO RPG EST/TILES/STRADE.png");
		this.load.image("ESTtiles21", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/Outside_C.png");
		this.load.image("ESTtiles22", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/World_C.png");
		this.load.image("ESTtiles23", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/AIUOLA.png");
		this.load.image("ESTtiles24", "assets/MAPPA FOLIGNO RPG EST/TILES/ALBERI.png");
		this.load.image("ESTtiles25", "assets/MAPPA FOLIGNO RPG EST/TILES/ancient doors.png");
		this.load.image("ESTtiles26", "assets/MAPPA FOLIGNO RPG EST/TILES/BALCONI.png");
		this.load.image("ESTtiles27", "assets/MAPPA FOLIGNO RPG EST/TILES/big windows.png");
		this.load.image("ESTtiles28", "assets/MAPPA FOLIGNO RPG EST/TILES/GLASS DOORS.png");
		this.load.image("ESTtiles29", "assets/MAPPA FOLIGNO RPG EST/TILES/tilesets/ladders_45degrees.png");
		this.load.image("ESTtiles30", "assets/MAPPA FOLIGNO RPG EST/TILES/METAL GEARS.png");
		this.load.image("ESTtiles31", "assets/MAPPA FOLIGNO RPG EST/QUADRIVIO EST.png");
		this.load.image("ESTtiles32", "assets/MAPPA FOLIGNO RPG EST/QUADRIVIO2.jpg");
		this.load.image("ESTtiles33", "assets/MAPPA FOLIGNO RPG EST/TILES/rosoni piccoli.png");
		this.load.image("ESTtiles34", "assets/MAPPA FOLIGNO RPG EST/Statua Garibaldi.png");
		this.load.image("ESTtiles35", "assets/MAPPA FOLIGNO RPG EST/TILES/TETTI BASSI.png");
		this.load.image("ESTtiles36", "assets/MAPPA FOLIGNO RPG EST/TILES/TETTI BASSI 2.png");
		this.load.image("ESTtiles37", "assets/MAPPA FOLIGNO RPG EST/TILES/TETTI COMPLETI.png");
		this.load.image("ESTtiles38", "assets/MAPPA FOLIGNO RPG EST/TILES/tetti frontali.png");
		this.load.image("ESTtiles39", "assets/MAPPA FOLIGNO RPG EST/TILES/VARIE.png");

		this.load.image("OVESTtiles39", "assets/MAPPA FOLIGNO RPG OVEST/TILES/VARIE.png");
		this.load.image("OVESTtiles40", "assets/MAPPA FOLIGNO RPG OVEST/TILES/roofs1.png");
		this.load.image("OVESTtiles12", "assets/MAPPA FOLIGNO RPG OVEST/TILES/Outside_A3.png");
		this.load.image("OVESTtiles10", "assets/MAPPA FOLIGNO RPG OVEST/TILES/tilesets/muri2.png");
		this.load.image("OVESTtiles9", "assets/MAPPA FOLIGNO RPG OVEST/TILES/tilesets/muri1.png");

		this.load.tilemapTiledJSON("startmap", "assets/MAPPA FOLIGNO RPG/QUADRIVIO.json");
		this.load.tilemapTiledJSON("map2", "assets/MAPPA FOLIGNO RPG EST/QUADRIVIO-EST.json");
		this.load.tilemapTiledJSON("map3", "assets/MAPPA FOLIGNO RPG OVEST/QUADRIVIO-OVEST.json");

		this.load.atlas('BAsprites', 'assets/atlas/BeatriceArzittu.png', 'assets/atlas/BAsprites.json');
	}
	  
    }

    create ()
    {
		console.log('preload completed.');
        this.scene.start('startSceneMiddleFoligno');
    }
}


