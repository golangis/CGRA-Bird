import {CGFobject} from '../lib/CGF.js';
/**
 * MySphere
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MySphere extends CGFobject {
	constructor(scene, slices, stacks, radius, insideOut) {
		super(scene);

        this.slices = slices
        this.stacks = stacks
        this.radius = radius
        this.insideOut = insideOut
		this.initBuffers();
	}
	
	initBuffers() {
        this.vertices = [
            0, this.radius, 0,   // 0
            0, -this.radius, 0,  // 1
        ]

        this.normals = [
            0, 1, 0,
            0, -1, 0,
        ]

        //Counter-clockwise reference of vertices
		this.indices = [];

        this.texCoords = [
            0.5, 0,
            0.5, 1,
        ];

        let width_angle = 2 * Math.PI / this.slices;
        let height_angle = Math.PI / this.stacks;

        // top hat
        for (let index = 0; index < this.slices+1; index++) {
            this.vertices.push(this.radius * Math.sin(height_angle) * Math.cos(index*width_angle))
            this.vertices.push(this.radius * Math.cos(height_angle))
            this.vertices.push(this.radius * Math.sin(height_angle) * Math.sin(index*width_angle))
            
            this.normals.push(
                Math.cos(index*width_angle) * (this.insideOut? -1 : 1),
                Math.cos(height_angle) * (this.insideOut? -1 : 1),
                Math.sin(index*width_angle) * (this.insideOut? -1 : 1)
            )
            
            if (index == this.slices) {
                this.texCoords.push(0)
                this.texCoords.push(0)
                continue
            }

            if (this.insideOut) {
                this.indices.push(0)
                this.indices.push(index+2)
            } else {
                this.indices.push(index+2)
                this.indices.push(0)
            }
            this.indices.push(index+3)

            this.texCoords.push(1-index/this.slices)
            this.texCoords.push(index == 0 ? 0 : 1/this.stacks)
        }

        let cur = 2

        for (let stack = 2; stack < this.stacks; stack++) {
            for (let index = 0; index < this.slices + 1; index++) {
                this.vertices.push(this.radius * Math.sin(stack*height_angle) * Math.cos(index*width_angle))
                this.vertices.push(this.radius * Math.cos(stack*height_angle))
                this.vertices.push(this.radius * Math.sin(stack*height_angle) * Math.sin(index*width_angle))

                console.log(this.scaleFactor)

                this.normals.push(
                    Math.cos(index*width_angle) * (this.insideOut? -1 : 1) ,
                    Math.cos(stack*height_angle) * (this.insideOut? -1 : 1),
                    Math.sin(index*width_angle) * (this.insideOut? -1 : 1)
                )

                if (index == this.slices) {
                    if (stack == this.stacks-1) {
                        this.texCoords.push(0)
                        this.texCoords.push(1)
                    } else {
                        this.texCoords.push(0)
                        this.texCoords.push(stack/this.stacks)
                    }
                    continue
                }
                if (this.insideOut) {
                    this.indices.push((cur+index)+this.slices+2)
                    this.indices.push((cur+index))
                } else {
                    this.indices.push((cur+index))
                    this.indices.push((cur+index)+this.slices+2)
                }
                this.indices.push((cur+index)+this.slices+1)

                if (this.insideOut) {
                    this.indices.push((cur+index)+1)
                    this.indices.push((cur+index))
                } else {
                    this.indices.push((cur+index))
                    this.indices.push((cur+index)+1)
                }
                this.indices.push((cur+index)+this.slices+2)

                if (stack == this.stacks-1) {
                    this.texCoords.push(1- index/this.slices)
                    this.texCoords.push(index == 0 ? 1 : stack/this.stacks)
                } else {
                    this.texCoords.push(1-index/this.slices)
                    this.texCoords.push(stack/this.stacks)
                }
            }
            cur += this.slices + 1
        }

        let lastFirstPoint = (this.stacks-2) * (this.slices+1) + 2

        // bottom hat
        for (let index = 0; index < this.slices+1; index++) {
            if (index == this.slices) {
                continue
            }
            if (this.insideOut) {
                this.indices.push(lastFirstPoint+index+1)
                this.indices.push(lastFirstPoint+index)
            } else {
                this.indices.push(lastFirstPoint+index)
                this.indices.push(lastFirstPoint+index+1)
            }
            this.indices.push(1)
        }


		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

