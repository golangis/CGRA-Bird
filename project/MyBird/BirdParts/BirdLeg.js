import { CGFobject } from '../../../../lib/CGF.js';
import { MyCylinder } from '../../../project/MyCylinder.js'
import { MyTriangle } from '../../../project/MyTriangle.js';

export class BirdLeg extends CGFobject {
  constructor(scene, appearence) {
    super(scene);
    this.leg1 = new MyCylinder(scene, 10, 10)
    this.leg2 = new MyCylinder(scene, 10, 10)
    this.paw1 = new MyTriangle(scene)
    this.paw2 = new MyTriangle(scene)

    this.appearence = appearence  
    }

    display() {
        // Right leg
        this.scene.pushMatrix()
        this.appearence.apply()
        this.scene.translate(0, -1, -0.5)
        this.scene.rotate(Math.PI/2, 1, 0, 0)
        this.scene.scale(0.15, 0.15, 1)
        this.leg1.display()
        this.scene.popMatrix()

        // left leg
        this.scene.pushMatrix()
        this.scene.translate(0, -1, 0.5)
        this.scene.rotate(Math.PI/2, 1, 0, 0)
        this.scene.scale(0.15, 0.15, 1)
        this.leg2.display()
        this.scene.popMatrix()

        // Right Paw
        this.scene.pushMatrix()
        this.scene.translate(0, -2, -0.5)
        this.scene.scale(1, 1, .3)
        this.scene.rotate(Math.PI/4, 0 ,1 , 0)
        this.scene.rotate(Math.PI/2, 1 ,0 , 0)
        this.scene.translate(0.6, 0.6, 0)
        this.paw1.display()

        this.scene.popMatrix()
        this.scene.pushMatrix()
        this.scene.translate(0, -2, -0.5)
        this.scene.scale(1, 1, .3)
        this.scene.rotate(Math.PI/4, 0 ,1 , 0)
        this.scene.rotate(Math.PI/2, 1 ,0 , 0)
        this.scene.rotate(Math.PI, 0, 1, 0)
        this.scene.rotate(Math.PI/2, 0, 0, 1)
        this.scene.translate(0.6, 0.6, 0)
        this.paw1.display()

        this.scene.popMatrix()

        // Left Paw
        this.scene.pushMatrix()
        this.scene.translate(0, -2, 0.5)
        this.scene.scale(1, 1, .3)
        this.scene.rotate(Math.PI/4, 0 ,1 , 0)
        this.scene.rotate(Math.PI/2, 1 ,0 , 0)
        this.scene.translate(0.6, 0.6, 0)
        this.paw2.display()

        this.scene.popMatrix()
        this.scene.pushMatrix()
        this.scene.translate(0, -2, 0.5)
        this.scene.scale(1, 1, .3)
        this.scene.rotate(Math.PI/4, 0 ,1 , 0)
        this.scene.rotate(Math.PI/2, 1 ,0 , 0)
        this.scene.rotate(Math.PI, 0, 1, 0)
        this.scene.rotate(Math.PI/2, 0, 0, 1)
        this.scene.translate(0.6, 0.6, 0)
        this.paw2.display()

        this.scene.popMatrix()
    }
  
}