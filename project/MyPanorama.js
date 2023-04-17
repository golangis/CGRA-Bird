import { CGFobject, CGFappearance, CGFtexture } from "../lib/CGF.js";
import { MySphere } from './MySphere.js';
/**
 * MyPanorama
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyPanorama extends CGFobject {
	constructor(scene, texture, slices, stacks, radius) {
		super(scene);

        this.sphere = new MySphere(scene, slices, stacks, radius, true)

        this.panoramaTexture = new CGFtexture(scene, texture);
        this.panoramaAppearance = new CGFappearance(scene);
        this.panoramaAppearance.setTexture(this.panoramaTexture);
        this.panoramaAppearance.setTextureWrap('REPEAT', 'REPEAT');

		this.initBuffers();
	}
	
	initBuffers() {
	}

    display() {
        this.panoramaAppearance.apply();
        // this.sphere.enableNormalViz()
        this.sphere.display();
    }
}

