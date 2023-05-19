import { CGFobject } from '../../lib/CGF.js';
import { MySphere } from '../MySphere.js'

export class MyBirdEgg extends CGFobject {
  constructor(scene, appearence) {
    super(scene);
    this.birdEggDown = new MySphere(scene, 40, 40, 4, false, Math.PI)
    this.birdEggUp = new MySphere(scene, 40, 40, 4, false, Math.PI)
    this.appearence = appearence  
    }

    display() {
      this.scene.pushMatrix()
      this.appearence.apply()
      this.scene.rotate(Math.PI/2, 1, 0, 0)
      this.birdEggDown.display()
      this.scene.rotate(-Math.PI, 1, 0, 0)
      this.scene.scale(1, 1, 1.8)
      this.birdEggUp.display()
      this.scene.popMatrix()
    }
  
}