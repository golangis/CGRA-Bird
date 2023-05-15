import { CGFobject } from '../../../../lib/CGF.js';
import { MyTriangle } from '../../../tp1/MyTriangle.js';
import { MyQuad } from '../../../tp2/MyQuad.js';

export class BirdWing extends CGFobject {
  constructor(scene, appearence) {
    super(scene);
    this.wingRect1= new MyQuad(scene)
    this.wingTrian1 = new MyTriangle(scene)
    this.wingRect2= new MyQuad(scene)
    this.wingTrian2 = new MyTriangle(scene)

    this.appearence = appearence  
    }

    display() {
        // Right Wing Rectangle
        this.scene.pushMatrix()
        this.appearence.apply()
        this.scene.translate(-1.5, -2.3, -2)
        this.scene.rotate(Math.PI/2, 1, 0, 0)
        this.scene.rotate(Math.PI/8, 1, 0, 0)
        this.scene.scale(1.5, 1.5, 1)
        this.wingRect1.display()
        this.scene.popMatrix()

        // Left Wing Rectangle
        this.scene.pushMatrix()
        this.appearence.apply()
        this.scene.translate(-1.5, -2.3, 2)
        this.scene.rotate(-Math.PI/2, 1, 0, 0)
        this.scene.rotate(-Math.PI/8, 1, 0, 0)
        this.scene.scale(1.5, 1.5, 1)
        this.wingRect1.display()

        this.scene.popMatrix()
    }
  
}