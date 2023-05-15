import { CGFobject} from '../../../lib/CGF.js';
import { MySphere } from '../../MySphere.js'

export class BirdBeak extends CGFobject {
  constructor(scene, appearence) {
    super(scene);
    this.birdBeak = new MySphere(scene, 40, 40, 0.3, false, Math.PI)
    this.birdBeakBelow = new MySphere(scene, 40, 40, 0.3, true, Math.PI)
    this.appearence = appearence  
    }

    display() {
      this.scene.pushMatrix()
      this.appearence.apply()
      this.scene.translate(2.2, 1.2, 0)
      this.scene.rotate(-Math.PI/2, 1, 0, 0)
      this.scene.rotate(Math.PI / 5, 0, 1, 0)
      this.birdBeak.display()
      this.birdBeakBelow.display()
      this.scene.popMatrix()
    }
  
}