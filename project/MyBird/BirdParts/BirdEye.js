import { CGFobject } from '../../../../lib/CGF.js';
import { MySphere } from '../../MySphere.js'

export class BirdEye extends CGFobject {
  constructor(scene, appearence) {
    super(scene);
    this.eye = new MySphere(scene, 10, 10, 0.5, false)
    this.appearence = appearence  
    }

    display() {
      this.scene.pushMatrix()
      this.appearence.apply()
      this.eye.display()
      this.scene.popMatrix()
    }
  
}