import { CGFobject } from '../../../../lib/CGF.js';
import { MySphere } from '../../MySphere.js'

export class BirdBody extends CGFobject {
  constructor(scene, appearence) {
    super(scene);
    this.body = new MySphere(scene, 40, 40, 1.5, false)
    this.appearence = appearence  
    }

    display() {
      this.scene.pushMatrix()
      this.appearence.apply()
      this.scene.scale(1.3, 1, 1.2)
      this.body.display()
      this.scene.popMatrix()
    }
  
}