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

		this.load.image("tiles1", "assets/QuadrivioAssets/TILES/tilesets/45 GRADI.png");
		this.load.image("tiles2", "assets/QuadrivioAssets/TILES/tilesets/castle1.png");
		this.load.image("tiles3", "assets/QuadrivioAssets/TILES/tilesets/castle45GRADI.png");
		this.load.image("tiles4", "assets/QuadrivioAssets/TILES/oaz5u3y9.png");
		this.load.image("tiles5", "assets/QuadrivioAssets/TILES/tilesets/SF_Outside_B.png");
		this.load.image("tiles6", "assets/QuadrivioAssets/TILES/tilesets/Outside_B.png");
		this.load.image("tiles7", "assets/QuadrivioAssets/TILES/tilesets/Inside_A5.png");
		this.load.image("tiles8", "assets/QuadrivioAssets/TILES/tilesets/Inside_C.png");
		this.load.image("tiles9", "assets/QuadrivioAssets/TILES/tilesets/muri1.png");
		this.load.image("tiles10", "assets/QuadrivioAssets/TILES/tilesets/muri2.png");
		this.load.image("tiles11", "assets/QuadrivioAssets/TILES/tilesets/Inside_A4.png");
		this.load.image("tiles12", "assets/QuadrivioAssets/TILES/Outside_A3.png");
		this.load.image("tiles13", "assets/QuadrivioAssets/TILES/tilesets/Outside_A5.png");
		this.load.image("tiles14", "assets/QuadrivioAssets/TILES/!Door1.png");
		this.load.image("tiles15", "assets/QuadrivioAssets/TILES/Lighthouse.png");
		this.load.image("tiles16", "assets/QuadrivioAssets/TILES/PORTE45.png");
		this.load.image("tiles17", "assets/QuadrivioAssets/roofs/basic_roofs1+2_recolor2.png");
		this.load.image("tiles18", "assets/QuadrivioAssets/roofs/basic_roofs1+2_Candacis.png");
		this.load.image("tiles19", "assets/QuadrivioAssets/TILES/tilesets/SF_Outside_A5.png");
		this.load.image("tiles20", "assets/QuadrivioAssets/TILES/STRADE.png");
		this.load.image("tiles21", "assets/QuadrivioAssets/TILES/tilesets/Outside_C.png");
		this.load.image("tiles22", "assets/QuadrivioAssets/TILES/tilesets/World_C.png");

		this.load.image("ESTtiles1", "assets/QuadrivioAssets/TILES/tilesets/45 GRADI.png");
		this.load.image("ESTtiles2", "assets/QuadrivioAssets/TILES/tilesets/castle1.png");
		this.load.image("ESTtiles3", "assets/QuadrivioAssets/TILES/tilesets/castle45GRADI.png");
		this.load.image("ESTtiles4", "assets/QuadrivioAssets/TILES/oaz5u3y9.png");
		this.load.image("ESTtiles5", "assets/QuadrivioAssets/TILES/tilesets/SF_Outside_B.png");
		this.load.image("ESTtiles6", "assets/QuadrivioAssets/TILES/tilesets/Outside_B.png");
		this.load.image("ESTtiles7", "assets/QuadrivioAssets/TILES/tilesets/Inside_A5.png");
		this.load.image("ESTtiles8", "assets/QuadrivioAssets/TILES/tilesets/Inside_C.png");
		this.load.image("ESTtiles9", "assets/QuadrivioAssets/TILES/tilesets/muri1.png");
		this.load.image("ESTtiles10", "assets/QuadrivioAssets/TILES/tilesets/muri2.png");
		this.load.image("ESTtiles11", "assets/QuadrivioAssets/TILES/tilesets/Inside_A4.png");
		this.load.image("ESTtiles12", "assets/QuadrivioAssets/TILES/Outside_A3.png");
		this.load.image("ESTtiles13", "assets/QuadrivioAssets/TILES/tilesets/Outside_A5.png");
		this.load.image("ESTtiles14", "assets/QuadrivioAssets/TILES/!Door1.png");
		this.load.image("ESTtiles15", "assets/QuadrivioAssets/TILES/Lighthouse.png");
		this.load.image("ESTtiles16", "assets/QuadrivioAssets/TILES/PORTE45.png");
		this.load.image("ESTtiles17", "assets/QuadrivioAssets/roofs/basic_roofs1+2_recolor2.png");
		this.load.image("ESTtiles18", "assets/QuadrivioAssets/roofs/basic_roofs1+2_Candacis.png");
		this.load.image("ESTtiles19", "assets/QuadrivioAssets/TILES/tilesets/SF_Outside_A5.png");
		this.load.image("ESTtiles20", "assets/QuadrivioAssets/TILES/STRADE.png");
		this.load.image("ESTtiles21", "assets/QuadrivioAssets/TILES/tilesets/Outside_C.png");
		this.load.image("ESTtiles22", "assets/QuadrivioAssets/TILES/tilesets/World_C.png");
		this.load.image("ESTtiles23", "assets/QuadrivioAssets/TILES/tilesets/AIUOLA.png");
		this.load.image("ESTtiles24", "assets/QuadrivioAssets/TILES/ALBERI.png");
		this.load.image("ESTtiles25", "assets/QuadrivioAssets/TILES/ancient doors.png");
		this.load.image("ESTtiles26", "assets/QuadrivioAssets/TILES/BALCONI.png");
		this.load.image("ESTtiles27", "assets/QuadrivioAssets/TILES/big windows.png");
		this.load.image("ESTtiles28", "assets/QuadrivioAssets/TILES/GLASS DOORS.png");
		this.load.image("ESTtiles29", "assets/QuadrivioAssets/TILES/tilesets/ladders_45degrees.png");
		this.load.image("ESTtiles30", "assets/QuadrivioAssets/TILES/METAL GEARS.png");
		this.load.image("ESTtiles33", "assets/QuadrivioAssets/TILES/rosoni piccoli.png");
		this.load.image("ESTtiles34", "assets/QuadrivioAssets/Statua Garibaldi.png");
		this.load.image("ESTtiles35", "assets/QuadrivioAssets/TILES/TETTI BASSI.png");
		this.load.image("ESTtiles36", "assets/QuadrivioAssets/TILES/TETTI BASSI 2.png");
		this.load.image("ESTtiles37", "assets/QuadrivioAssets/TILES/TETTI COMPLETI.png");
		this.load.image("ESTtiles38", "assets/QuadrivioAssets/TILES/tetti frontali.png");
		this.load.image("ESTtiles39", "assets/QuadrivioAssets/TILES/VARIE.png");

		this.load.image("OVESTtiles39", "assets/QuadrivioAssets/TILES/VARIE.png");
		this.load.image("OVESTtiles40", "assets/QuadrivioAssets/TILES/roofs1.png");
		this.load.image("OVESTtiles12", "assets/QuadrivioAssets/TILES/Outside_A3.png");
		this.load.image("OVESTtiles10", "assets/QuadrivioAssets/TILES/tilesets/muri2.png");
		this.load.image("OVESTtiles9", "assets/QuadrivioAssets/TILES/tilesets/muri1.png");

		this.load.tilemapTiledJSON("startmap", "assets/QuadrivioAssets/QUADRIVIO.json");
		this.load.tilemapTiledJSON("map2", "assets/QuadrivioAssets/QUADRIVIO-EST.json");
		this.load.tilemapTiledJSON("map3", "assets/QuadrivioAssets/QUADRIVIO-OVEST.json");
		this.load.tilemapTiledJSON("map4", "assets/QuadrivioAssets/QUADRIVIO-NORD.json");
		this.load.tilemapTiledJSON("map5", "assets/QuadrivioAssets/QUADRIVIO-SUD.json");
		this.load.tilemapTiledJSON("map6", "assets/QuadrivioAssets/QUADRIVIO-SUDOVEST.json");
		this.load.tilemapTiledJSON("map7", "assets/QuadrivioAssets/QUADRIVIO-SUDEST.json");

		this.load.atlas('BAsprites', 'assets/atlas/BeatriceArzittu.png', 'assets/atlas/BAsprites.json');
	}
	  
    }

    create ()
    {
		console.log('preload completed.');
        this.scene.start('sceneSouthWestFoligno');
    }
}


