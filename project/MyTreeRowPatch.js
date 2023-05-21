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

        this.x = x;
        this.z = z;
        
        for (let i = 0; i < 6; i++) {
            this.trees.push(new MyBillboard(scene, this.x + i*8 + (Math.floor(Math.random() * 4) / 4 - 0.5), 0, this.z + (Math.floor(Math.random() * 4) / 4 - 0.5), Math.PI/16 * (Math.random() * 6 - 3)))
        }

    }

    display() {

        // Quad
        this.scene.pushMatrix()

        for (let i = 0; i < this.trees.length; i++) {
            this.trees[i].display()
        }

        this.scene.popMatrix()
    }
}

