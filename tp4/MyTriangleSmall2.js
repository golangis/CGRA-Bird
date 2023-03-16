import {CGFobject} from '../lib/CGF.js';
/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangleSmall2 extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0
			0, 1, 0,	//1
			1, 0, 0,	//2
			-1, 0, 0,	//3
			0, 1, 0,	//4
			1, 0, 0,	//5
		];

		this.texCoords=[
			0, 0, 	//0
			0.25, 0.25,		//1
			0, 0.5,		//2
			0, 0, 	//3
			0.25, 0.25,		//4
			0, 0.5,		//5
		]

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
		]

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 2, 1,
			4, 5, 3,
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

