import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-0.5, 0.5, 0.5,		//0
			-0.5, -0.5, 0.5,	//1
			-0.5, 0.5, -0.5,	//2
			-0.5, -0.5, -0.5,	//3
			0.5, 0.5, 0.5,		//4
			0.5, -0.5, 0.5,		//5
			0.5, 0.5, -0.5,		//6
			0.5, -0.5, -0.5,	//7
			0.5, 0.5, -0.5, 	//8
			-0.5, 0.5, -0.5, 	//9
			0.5, -0.5, -0.5, 	//10
			-0.5, -0.5, -0.5, 	//11
			0.5, 0.5, 0.5, 		//12
			-0.5, 0.5, 0.5, 	//13
			0.5, -0.5, 0.5, 	//14
			-0.5, -0.5, 0.5, 	//15
			0.5, -0.5, 0.5, 	//16
			-0.5, -0.5, 0.5, 	//17
			0.5, -0.5, -0.5, 	//18
			-0.5, -0.5, -0.5, 	//19
			0.5, 0.5, 0.5, 		//20
			-0.5, 0.5, 0.5, 	//21
			0.5, 0.5, -0.5, 	//22
			-0.5, 0.5, -0.5, 	//23

		];

		this.normals = [
			-1, 0, 0, 	// 0
			-1, 0, 0, 	// 1
			-1, 0, 0, 	// 2
			-1, 0, 0, 	// 3
			1, 0, 0, 	// 4
			1, 0, 0, 	// 5
			1, 0, 0, 	// 6
			1, 0, 0, 	// 7
			0, 0, -1, 	// 8
			0, 0, -1, 	// 9
			0, 0, -1, 	// 10
			0, 0, -1, 	// 11
			0, 0, 1,	// 12
			0, 0, 1,	// 13
			0, 0, 1,	// 14
			0, 0, 1,	// 15
			0, -1, 0,	// 16
			0, -1, 0,	// 17
			0, -1, 0,	// 18
			0, -1, 0,	// 19
			0, 1, 0,	// 20
			0, 1, 0,	// 21
			0, 1, 0,	// 22
			0, 1, 0,	// 23
		]

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 2, 3,
			1, 0, 3,
			7, 6, 4,
			7, 4, 5,
			8, 10, 11,
			9, 8, 11,
			15, 14, 12,
			15, 12, 13,
			19, 18, 16,
			19, 16, 17,
			20, 22, 23,
			21, 20, 23,
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

