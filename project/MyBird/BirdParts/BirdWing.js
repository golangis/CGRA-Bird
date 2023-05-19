import { CGFobject, CGFappearance, CGFtexture } from '../../../../lib/CGF.js';
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
      this.wingTexture = new CGFtexture(this.scene, './images/bird/wing.jpg')
      this.wingAppearence = new CGFappearance(this.scene);
      this.wingAppearence.setAmbient(0.1, 0.1, 0.1, 1);
      this.wingAppearence.setTexture(this.wingTexture)
      this.wingAppearence.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        // Right Wing Rectangle
        this.scene.pushMatrix()
        this.scene.translate(-1.5, -2.3, -2)
        this.scene.rotate(Math.PI/2, 1, 0, 0)
        this.scene.rotate(Math.PI/8, 1, 0, 0)
        this.scene.scale(1.5, 1.5, 1)
        this.wingAppearence.apply()
        this.wingRect1.display()
        this.scene.popMatrix()

        // Left Wing Rectangle
        this.scene.pushMatrix()
        this.scene.translate(-1.5, -2.3, 2)
        this.scene.rotate(-Math.PI/2, 1, 0, 0)
        this.scene.rotate(-Math.PI/8, 1, 0, 0)
        this.scene.scale(1.5, 1.5, 1)
        this.wingAppearence.apply()
        this.wingRect2.display()
        this.scene.popMatrix()

        // Right Wing Triangle
        this.scene.pushMatrix()
        this.scene.translate(-1.5, -2, 3.65)
        this.scene.scale(0.75, 1.5, 1)
        this.scene.rotate(Math.PI/2, 1, 0, 0)
        this.wingAppearence.apply()
        this.wingTrian1.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
        this.scene.translate(-1.5, -2, 3.65)
        this.scene.scale(0.75, 1.5, 1)
        this.scene.rotate(Math.PI/2, 1, 0, 0)
        this.scene.rotate(Math.PI/2, 1 ,0 , 0)
        this.scene.rotate(Math.PI, 0, 1, 0)
        this.scene.rotate(Math.PI/2, 0, 0, 1)
        this.scene.rotate(-Math.PI/2, 0, 1, 0)
        this.wingAppearence.apply()
        this.wingTrian1.display()
        this.scene.popMatrix()


        // Left Wing Triangle
        this.scene.pushMatrix()
        this.scene.translate(-1.5, -2, -3.65)
        this.scene.scale(0.75, 1.5, 1)
        this.scene.rotate(-Math.PI/2, 1, 0, 0)
        this.wingAppearence.apply()
        this.wingTrian2.display()
        this.scene.popMatrix()

        this.scene.pushMatrix()
+       this.scene.translate(-1.5, -2, -3.65)
        this.scene.scale(0.75, 1.5, 1)
        this.scene.rotate(-Math.PI/2, 1, 0, 0)
        this.scene.rotate(-Math.PI/2, 1 ,0 , 0)
        this.scene.rotate(-Math.PI, 0, 1, 0)
        this.scene.rotate(-Math.PI/2, 0, 0, 1)
        this.scene.rotate(-Math.PI/2, 0, 1, 0)
        this.scene.rotate(Math.PI, 0, 0, -1)
        this.wingAppearence.apply()
        this.wingTrian2.display()
        this.scene.popMatrix()

    }
  
}