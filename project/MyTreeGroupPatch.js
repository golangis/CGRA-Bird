import { CGFobject, CGFappearance, CGFtexture, CGFshader } from '../lib/CGF.js';
import { MyBillboard } from "./MyBillboard.js";

/**
 * MyTreeGroupPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTreeGroupPatch extends CGFobject {
	constructor(scene, x, y, z) {
		super(scene);
        
        this.trees = []

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.trees.push(new MyBillboard(scene, i*2 + (Math.floor(Math.random() * 4) / 4 - 0.5), 0, j*2 + (Math.floor(Math.random() * 4) / 4 - 0.5)))
            }
        }

        this.x = x;
        this.y = y;
        this.z = z;
    }

    display() {

        // Quad
        this.scene.pushMatrix()
        
        this.scene.translate(this.x, this.y, this.z)

        for (let i = 0; i < this.trees.length; i++) {
            this.trees[i].display()
        }

        this.scene.popMatrix()
    }
}

