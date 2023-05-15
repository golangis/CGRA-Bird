import { CGFobject } from '../../../../lib/CGF.js';
import { MyCone } from '../../../tp3/MyCone.js'

export class BirdTail extends CGFobject {
  constructor(scene, appearence) {
    super(scene);
    this.tail = new MyCone(scene, 20, 20)
    this.appearence = appearence  
    }

    display() {        
        this.scene.pushMatrix()
        this.appearence.apply()
        this.scene.translate(-2.5, -2.7, 0)
        this.scene.rotate(Math.PI/2, 0, 0, 1)
        this.scene.scale(0.5, 1.6, 0.5) 
        this.tail.display()
        this.scene.popMatrix()
    }
  
}