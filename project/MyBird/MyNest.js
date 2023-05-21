import { CGFobject} from '../../../lib/CGF.js';
import { MySphere } from '../MySphere.js'

export class MyNest extends CGFobject {
  constructor(scene, appearence) {
    super(scene);
      this.nest = new MySphere(scene, 40, 40, 7, false, Math.PI)
      this.nestUp = new MySphere(scene, 40, 40, 7, true, Math.PI)
      this.appearence = appearence

      this.eggs = []
    }


    display() {
      this.scene.pushMatrix()
      this.appearence.apply()
      this.scene.rotate(Math.PI/2, 1, 0, 0)
      this.scene.scale(0.3, 0.3, 0.24)
      this.nest.display()
      this.nestUp.display()
      this.scene.popMatrix()
    }
  
}