import {CGFobject} from '../lib/CGF.js';
/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangleSmall1 extends CGFobject {
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
			0.25, 0.75, 	//0
			0.5, 0.5,		//1
			0.75, 0.75,		//2
			0.25, 0.75, 	//3
			0.5, 0.5,		//4
			0.75, 0.75,		//5
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

