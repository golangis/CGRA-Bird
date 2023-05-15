import { CGFobject } from '../../lib/CGF.js';
import { MySphere } from '../MySphere.js'

export class MyBirdEgg extends CGFobject {
  constructor(scene, appearence) {
    super(scene);
    this.birdEgg = new MySphere(scene, 40, 40, 4, false)
    this.appearence = appearence  
    }

    display() {
      this.scene.pushMatrix()
      this.appearence.apply()
      this.scene.scale(0.4, 0.6, 0.4)
      this.birdEgg.display()
      this.scene.popMatrix()
    }
  
}