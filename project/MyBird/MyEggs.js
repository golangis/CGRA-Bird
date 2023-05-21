import { CGFappearance, CGFobject, CGFtexture } from '../../../lib/CGF.js'
import { MyBirdEgg } from './MyBirdEgg.js'

export class MyEggs extends CGFobject {
    constructor(scene, num) {
      super(scene)
      this.createEggs(num)
    }


    createEggs(num) {
        this.eggs = []
        for (let i = 0; i < num; i++) {
            this.appearance = new CGFappearance(this.scene);
            this.appearance.setAmbient(0, 0, 0, 1);
            this.appearance.setDiffuse(1, 1, 1, 1);
            this.appearance.setSpecular(0, 0, 0, 0);
            this.appearance.setShininess(10)
            this.texture = new CGFtexture(this.scene, "./images/textures/egg/egg" + i%4 +".png")
            this.appearance.setTexture(this.texture);  
            let newBirdEgg = new MyBirdEgg(this.scene, this.appearance)  
            this.eggs.push(newBirdEgg)
        }

    }

    display() {
        this.appearance.apply()
        this.eggs[0].scene.translate(60, -66, 20)
        this.eggs[0].display()
        this.eggs[1].scene.translate(15, 0, 20)
        this.eggs[1].display()
        this.eggs[2].scene.translate(24, 0, -60)
        this.eggs[2].display()
        this.eggs[3].scene.translate(-10, 0, 20)
        this.eggs[3].display()
        };
    }
