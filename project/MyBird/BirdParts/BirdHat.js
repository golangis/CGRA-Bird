import { CGFobject } from '../../../../lib/CGF.js';
import { MyCone } from '../../../tp3/MyCone.js'
import { MySphere } from '../../MySphere.js'

export class BirdHat extends CGFobject {
  constructor(scene, appearence) {
    super(scene);
    this.hat = new MyCone(scene, 20, 20)
    this.pompom = new MySphere(scene, 40, 40, 0.2, false)
    this.appearence = appearence  
    }

    display() {        
        this.scene.pushMatrix()
        this.appearence.apply()
        this.scene.translate(1.3, 1.9, 0)
        this.scene.scale(0.7, 1, 0.7) 
        this.hat.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.appearence.apply()
        this.scene.translate(1.3, 2.9, 0)
        this.pompom.display()
    }
  
}