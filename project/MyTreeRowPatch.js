import { CGFobject } from '../lib/CGF.js';
import { MyBillboard } from "./MyBillboard.js";

/**
 * MyTreeRowPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTreeRowPatch extends CGFobject {
	constructor(scene, x, z) {
		super(scene);
        
        this.trees = []

        for (let i = 0; i < 6; i++) {
            this.trees.push(new MyBillboard(scene, i*2 + (Math.floor(Math.random() * 4) / 4 - 0.5), 0, (Math.floor(Math.random() * 4) / 4 - 0.5)))
        }

        this.x = x;
        this.z = z;
    }

    display() {

        // Quad
        this.scene.pushMatrix()
        
        this.scene.translate(this.x, 0, this.z)

        for (let i = 0; i < this.trees.length; i++) {
            this.trees[i].display()
        }

        this.scene.popMatrix()
    }
}

