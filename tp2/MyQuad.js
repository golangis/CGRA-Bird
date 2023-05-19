import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyQuad extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.normals = [];
        this.texCoords = []
		this.vertices = [
			-0.5, 0.5, 0,	//0
			-0.5, -0.5, 0,	//1
			0.5, -0.5, 0,	//2
			0.5, 0.5, 0		//3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 3,
			1, 2, 3,
			3, 2, 1,
			3, 1, 0
		];

		this.vertices.push(0,1,0);
        this.normals.push(0,1,0);
        this.texCoords.push(0.5, 0.5)

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

