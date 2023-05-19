import { CGFobject, CGFappearance, CGFtexture} from '../../../lib/CGF.js';
import { MySphere } from '../../MySphere.js'

export class BirdBody extends CGFobject {
  constructor(scene, appearence) {
    super(scene);
    this.body = new MySphere(scene, 40, 40, 1.5, false)
    this.frontFur = new MySphere(scene, 40, 40, 1.5, false, Math.PI)
    this.appearence = appearence  
      this.frontTexture = new CGFtexture(this.scene, './images/bird/frontFur.png')
      this.frontAppearance = new CGFappearance(this.scene);
      this.frontAppearance.setTexture(this.frontTexture)

      this.frontAppearance.setTextureWrap('REPEAT', 'REPEAT');
}
  

    display() {
      this.scene.pushMatrix()
      this.appearence.apply()
      this.scene.scale(1.3, 1, 1.2)
      this.body.display()
      this.scene.popMatrix()

      this.scene.pushMatrix()
      this.appearence.apply()
      this.scene.translate(0.5, 0, 0)
      this.scene.scale(1.05, 0.7, 0.8)
      this.scene.rotate(Math.PI/2, 0, 1, 0)
      this.frontAppearance.apply() 
      this.frontFur.display()

      this.scene.popMatrix()
    }
}
