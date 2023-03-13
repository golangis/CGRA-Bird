import {CGFobject} from '../lib/CGF.js';
/**
 * @constructor
 * @param scene - Reference to MyScene object
 * @param slices
 * @param stacks
 */

export class MyPrism extends CGFobject {
    constructor(scene, slices, stacks){
        super(scene);
        this.slices = slices;
        this.stacks = stacks;

    this.initBuffers();
    } 

	initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){
            for(var j = 0; j < this.stacks; j++){

                var h = j / (this.stacks) + 1 /(this.stacks);

                var sa=Math.sin(ang);
                var saa=Math.sin(ang+alphaAng);
                var ca=Math.cos(ang);
                var caa=Math.cos(ang+alphaAng);

                //1o triangulo (face lateral)
                this.vertices.push(ca, sa, h - 1/this.stacks);
                this.vertices.push(ca, sa, h);
                this.vertices.push(caa, saa, h - 1/this.stacks );

                //2o triangulo (face lateral)
                //this.vertices.push(caa, saa, 0); <- so p lembrar
                this.vertices.push(caa, saa, h);
                //this.vertices.push(ca, sa, 1 );  <- so p lembrar

                this.indices.push((4*(this.stacks*i+j)+2), (4*(this.stacks*i+j)+1) , (4*(this.stacks*i+j)));
                this.indices.push((4*(this.stacks*i+j)+2), (4*(this.stacks*i+j)+3) , (4*(this.stacks*i+j)+1));
            } 
            ang+=alphaAng;
        }
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    /**
     * Called when user interacts with GUI to change object's complexity.
     * @param {integer} complexity - changes number of slices
     */
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


