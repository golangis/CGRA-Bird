import { CGFobject } from '../../../../lib/CGF.js';
import { MySphere } from '../../MySphere.js'

export class BirdBody extends CGFobject {
  constructor(scene, appearence) {
    super(scene);
    this.body = new MySphere(scene, 40, 40, 40, false)
    this.appearence = appearence  
    }

    display() {
      this.scene.pushMatrix()
      this.appearence.apply()
      this.body.display()
      this.scene.popMatrix()
    }
  
}