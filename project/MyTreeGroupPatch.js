import { CGFobject } from '../lib/CGF.js';
import { MyBillboard } from "./MyBillboard.js";

/**
 * MyTreeGroupPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTreeGroupPatch extends CGFobject {
	constructor(scene, x, z) {
		super(scene);
        this.x = x;
        this.z = z;
        
        this.trees = []

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.trees.push(new MyBillboard(scene, this.x + i*8 + (Math.floor(Math.random() * 4) / 4 - 0.5), 0, this.z + j*8 + (Math.floor(Math.random() * 4) / 4 - 0.5), Math.PI/16 * (Math.random() * 6 - 3)))
            }
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

