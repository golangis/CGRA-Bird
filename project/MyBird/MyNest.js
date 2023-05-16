import { CGFobject} from '../../../lib/CGF.js';
import { MySphere } from '../MySphere.js'

export class MyNest extends CGFobject {
  constructor(scene, appearence) {
    super(scene);
    this.nest = new MySphere(scene, 40, 40, 4, false, Math.PI)
    this.nestUp = new MySphere(scene, 40, 40, 4, true, Math.PI)
    this.appearence = appearence  
    }

    display() {
      this.scene.pushMatrix()
      this.appearence.apply()
      this.scene.translate(2.2, 1.2, 0)
      this.scene.rotate(Math.PI/2, 1, 0, 0)
      this.scene.scale(1, 1, 0.8)
      this.nest.display()
      this.nestUp.display()
      this.scene.popMatrix()
    }
  
}