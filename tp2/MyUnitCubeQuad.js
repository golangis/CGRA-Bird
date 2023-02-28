import { CGFobject } from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";


/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);
        
        this.side1 = new MyQuad(scene);
        this.side2 = new MyQuad(scene);
        this.side3 = new MyQuad(scene);
        this.side4 = new MyQuad(scene);
        this.side5 = new MyQuad(scene);
        this.side6 = new MyQuad(scene);
        
		this.initBuffers();
    }
	
	initBuffers() {
		this.vertices = [
		];

		//Counter-clockwise reference of vertices
		this.indices = [
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

    display() {
        const PI = Math.PI
        
        
        // Side 1
        this.scene.pushMatrix()
        
        this.scene.translate(0, 0, 0.5)
        this.scene.scale(1, 1, 1)

        this.side1.display()

        this.scene.popMatrix()
        
        // Side 2
        this.scene.pushMatrix()
        
        this.scene.translate(0, 0, -0.5)
        this.scene.scale(1, 1, 1)
        this.scene.rotate(PI, 0, 1, 0)

        this.side2.display()

        this.scene.popMatrix()

        // Side 3
        this.scene.pushMatrix()
        
        this.scene.translate(0, 0.5, 0)
        this.scene.scale(1, 1, 1)
        this.scene.rotate(PI*1.5, 1, 0, 0)
        
        this.side3.display()

        this.scene.popMatrix()

        // Side 4
        this.scene.pushMatrix()
        
        this.scene.translate(0, -0.5, 0)
        this.scene.scale(1, 1, 1)
        this.scene.rotate(PI*0.5, 1, 0, 0)

        this.side4.display()

        this.scene.popMatrix()

        // Side 5
        this.scene.pushMatrix()
        
        this.scene.translate(0.5, 0, 0)
        this.scene.scale(1, 1, 1)
        this.scene.rotate(PI*0.5, 0, 1, 0)


        this.side5.display()

        this.scene.popMatrix()

        // Side 6
        this.scene.pushMatrix()
        
        this.scene.translate(-0.5, 0, 0)
        this.scene.scale(1, 1, 1)
        this.scene.rotate(PI*1.5, 0, 1, 0)


        this.side6.display()

        this.scene.popMatrix()
        
    }
}

