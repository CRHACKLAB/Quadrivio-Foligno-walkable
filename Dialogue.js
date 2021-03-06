/*
Author: Aaron Sprangers
 */

import PreloadScene from './preloadScene.js';

var preloadScene = new PreloadScene();

var conversationCounter = 0;

class Dialogue extends Phaser.Scene {

	constructor() {
		super({key : 'dialogue'}); 
	}   

preload ()  {
  preloadScene;
}
 
create () {

  const backgroundImage = this.add.image(0, 0,'background').setOrigin(0, 0);  
  backgroundImage.setScale(2, 0.8);  
  const characterImage1 = this.add.image(275, 50,'Char1Happy').setOrigin(0, 0); 
  const characterImage2 = this.add.image(500, 50,'Char4NormalSchool').setOrigin(0, 0); 
  const characterImage3 = this.add.image(100, 50,'Char2NormalSchoolMirror').setOrigin(0, 0); 

  characterImage1.setScale(1.5, 1.5); 
  characterImage2.setScale(1.5, 1.5); 
  characterImage3.setScale(1.5, 1.5); 

  const charactertextImage = this.add.image(-70, 300,'Char1Happy').setOrigin(0, 0);  
  charactertextImage.setScale(1.3, 1.3);
  charactertextImage.setDepth(1);

  var rect1 = this.add.rectangle(420, 500, 650, 148, 0);

  rect1.alpha = 0.5;

  this.label = this.add.text(200, 450, '', {
    font: "18px monospace",
    fill: "#ffffff"
  })
  .setScrollFactor(0)
  .setDepth(30)
  .setWordWrapWidth(520);

  this.typewriteTextWrapped("Hello there ! I am Aaron's first creation.");
  this.input.on('pointerdown', () => this.nextText());


}

typewriteText(text)
{
	const length = text.length
	let i = 0
	this.time.addEvent({
		callback: () => {
			this.label.text += text[i]
			++i
		},
		repeat: length - 1,
		delay: 50
	})
}

typewriteTextWrapped(text)
{
	const lines = this.label.getWrappedText(text)
	const wrappedText = lines.join('\n')

	this.typewriteText(wrappedText)
}

nextText()
{
  this.label.destroy();

  this.label = this.add.text(200, 450, '', {
    font: "18px monospace",
    fill: "#ffffff"
  })
  .setScrollFactor(0)
  .setDepth(30)
  .setWordWrapWidth(520);

  switch (conversationCounter) {
    case 0:
      this.typewriteTextWrapped('This is the first conversation in the game.');
      conversationCounter+=1;
      break;
    case 1:
      this.typewriteTextWrapped("That's actually all I have to say for now.");
      conversationCounter+=1;
      break;
    case 2:
      this.typewriteTextWrapped('Goodluck on your journey!');
      conversationCounter+=1;
      break;
    case 3:
      this.scene.start('sceneMiddleFoligno', { xpixel: 7220, ypixel: 1922 });
        conversationCounter=0;
      break;
    default:
      break;
  }
}

}

export default Dialogue;
