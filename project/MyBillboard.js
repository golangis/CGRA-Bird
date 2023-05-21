import { CGFobject, CGFappearance, CGFtexture, CGFshader } from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";

/**
 * MyBillboard
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyBillboard extends CGFobject {
	constructor(scene, x, y, z) {
		super(scene);
        
        this.quad = new MyQuad(scene);

        this.x = x;
        this.y = y + 0.5; // the 0.5 are due to the quad height
        this.z = z;

        this.texture = new CGFtexture(scene, "images/billboardtree.png");
        this.appearance = new CGFappearance(scene);
        this.appearance.setTexture(this.texture);
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');

        
    }

    display() {

        // Quad
        this.scene.pushMatrix()
        
        this.scene.translate(this.x, this.y, this.z)

        this.scene.activeShader.setUniformsValues(
            { 
                cameraPosition: [this.scene.camera.position[0], this.scene.camera.position[1], this.scene.camera.position[2]],
                selfPosition: [this.x, this.y, this.z],
            })

        this.appearance.apply();
        this.quad.display()

        this.scene.popMatrix()
    }
}

