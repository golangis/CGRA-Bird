import { CGFobject, CGFappearance, CGFtexture } from '../../../lib/CGF.js';
import { MyCone } from '../../../tp3/MyCone.js'

export class BirdTail extends CGFobject {
  constructor(scene, appearence) {
    super(scene);
    this.tail = new MyCone(scene, 20, 20)
    this.appearence = appearence  
      this.tailTexture = new CGFtexture(this.scene, './images/bird/head.jpg')
      this.tailAppearance = new CGFappearance(this.scene);
      this.tailAppearance.setAmbient(0.1, 0.1, 0.1, 1);
      this.tailAppearance.setTexture(this.tailTexture)
      this.tailAppearance.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {        
        this.scene.pushMatrix()
        this.scene.translate(-1.2, 0.2, 0)
        this.scene.rotate(Math.PI/2, 0, 0, 1)
        this.scene.scale(0.5, 1.6, 0.5) 
        this.tailAppearance.apply()
        this.tail.display()
        this.scene.popMatrix()
    }
  
}