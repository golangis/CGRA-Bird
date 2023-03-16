import {CGFobject} from '../lib/CGF.js';
/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			1, 0, 0,	//1
			1, 1, 0,	//2
			2, 0, 0,	//3
			2, 1, 0,	//4
			3, 1, 0,    //5
			0, 0, 0,	//6
			1, 0, 0,	//7
			1, 1, 0,	//8
			2, 0, 0,	//9
			2, 1, 0,	//10
			3, 1, 0,    //11
		];

		this.texCoords=[
			0.25, 0.75, //0
			0.5, 0.75,	//1
			0.5, 1,		//2
			0.75, 0.75,	//3
			0.75, 1,	//4
			1, 1,		//5
			0.25, 0.75, //6
			0.5, 0.75,	//7
			0.5, 1,		//8
			0.75, 0.75,	//9
			0.75, 1,	//10
			1, 1,		//11
		]

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
		]

		//Counter-clockwise reference of vertices
		this.indices = [
			2, 1, 0,
			2, 4, 1,
            4, 3, 1,
            4, 5, 3,
			6, 7, 8,
			7, 10, 8,
            7, 9, 10,
            9, 11, 10
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

