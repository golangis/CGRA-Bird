import { CGFobject } from '../../../../lib/CGF.js';
import { MySphere } from '../../MySphere.js'

export class BirdEye extends CGFobject {
  constructor(scene, appearence) {
    super(scene);
    this.eye = new MySphere(scene, 10, 10, 0.3, false)
    this.appearence = appearence  
    }

    display() {
      this.scene.pushMatrix()
      this.appearence.apply()
      this.scene.translate(2, 1.5, 0.5)
      this.scene.rotate(Math.PI, 0, 1, 0)
      this.scene.rotate(-Math.PI/8, 0, 1, 0)
      this.scene.rotate(Math.PI/2, 1, 0, 0)
      this.eye.display()
      this.scene.popMatrix()

      this.scene.pushMatrix()
      this.appearence.apply()
      this.scene.translate(2, 1.5, -0.5)
      this.scene.rotate(3*Math.PI/2, 1, 0, 0)
      this.scene.rotate(Math.PI/8, 0, 0, 1)
      this.scene.rotate(Math.PI, 0, 1, 0)
      this.eye.display()
      this.scene.popMatrix()
    }
  
}