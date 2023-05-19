import { CGFobject, CGFappearance, CGFtexture} from '../../../lib/CGF.js';
import { MyCone } from '../../../tp3/MyCone.js'
import { MySphere } from '../../MySphere.js'

export class BirdHat extends CGFobject {
  constructor(scene, appearence) {
    super(scene);
    this.hat = new MyCone(scene, 20, 20)
    this.appearence = appearence  
        this.hatTexture = new CGFtexture(this.scene, './images/bird/hat.png')
        this.hatAppearance = new CGFappearance(this.scene);
        this.hatAppearance.setTexture(this.hatTexture)
        this.hatAppearance.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {        
        this.scene.pushMatrix()

        this.scene.translate(1.3, 1.9, 0)
        this.scene.scale(0.7, 1, 0.7)
        this.hatAppearance.apply() 
        this.hat.display()
        this.scene.popMatrix()
    }
  
}