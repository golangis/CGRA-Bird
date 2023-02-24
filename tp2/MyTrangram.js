import { CGFobject } from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleBig } from "./MyTriangleBig.js";


/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
        
        this.diamond = new MyDiamond(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangle = new MyTriangle(scene);
        this.triangle_small1 = new MyTriangleSmall(scene);
        this.triangle_small2 = new MyTriangleSmall(scene);
        this.triangle_big1 = new MyTriangleBig(scene);
        this.triangle_big2 = new MyTriangleBig(scene);
        
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
        // Diamond
        this.scene.pushMatrix()

        this.diamond.display()

        this.scene.popMatrix()

        // this.parallelogram.display()
        // this.triangle.display()
        // this.triangle_small1.display()
        // this.triangle_small2.display()
        // this.triangle_big1.display()
        // this.triangle_big2.display()
    }
}

