import { CGFobject, CGFappearance } from "../lib/CGF.js";
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


        // My Diamond
        this.diamondMaterial = new CGFappearance(this.scene);
        this.diamondMaterial.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.diamondMaterial.setDiffuse(0, 0, 0, 1.0);
        this.diamondMaterial.setSpecular(0, 1.0, 0, 1.0);
        this.diamondMaterial.setShininess(1.0);
        
        // My Parallelogram
        this.parallelogramMaterial = new CGFappearance(this.scene);
        this.parallelogramMaterial.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.parallelogramMaterial.setDiffuse(0, 0, 0, 1.0);
        this.parallelogramMaterial.setSpecular(1.0, 1.0, 0, 1.0);
        this.parallelogramMaterial.setShininess(1.0);

        // My Triangle
        this.triangleMaterial = new CGFappearance(this.scene);
        this.triangleMaterial.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.triangleMaterial.setDiffuse(0, 0, 0, 1.0);
        this.triangleMaterial.setSpecular(1.0, 156/255, 210/255, 1.0);
        this.triangleMaterial.setShininess(1.0);

        // My Triangle Small 1
        this.triangle_small1Material = new CGFappearance(this.scene);
        this.triangle_small1Material.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.triangle_small1Material.setDiffuse(0, 0, 0, 1.0);
        this.triangle_small1Material.setSpecular(170/255, 79/255, 194/255, 1.0);
        this.triangle_small1Material.setShininess(1.0);
        
        // My Triangle Small 2
        this.triangle_small2Material = new CGFappearance(this.scene);
        this.triangle_small2Material.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.triangle_small2Material.setDiffuse(0, 0, 0, 1.0);
        this.triangle_small2Material.setSpecular(1.0, 20/255, 20/255, 1.0);
        this.triangle_small2Material.setShininess(1.0);

        // My Triangle Big 2
        this.triangle_big1Material = new CGFappearance(this.scene);
        this.triangle_big1Material.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.triangle_big1Material.setDiffuse(0, 0, 0, 1.0);
        this.triangle_big1Material.setSpecular(0.0, 156/255, 1.0, 1.0);
        this.triangle_big1Material.setShininess(1.0);

        // My Triangle Big 2
        this.triangle_big2Material = new CGFappearance(this.scene);
        this.triangle_big2Material.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.triangle_big2Material.setDiffuse(0, 0, 0, 1.0);
        this.triangle_big2Material.setSpecular(1.0, 156/255, 0.0, 1.0);
        this.triangle_big2Material.setShininess(1.0);        
        
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
        
        const SQRT2 = Math.sqrt(2)
        const PI = Math.PI
        
        let Tx = 0
        let Ty = SQRT2/2
        let Tz = 0
        
        let ang = 0.25*PI
        
        
        let diamond_translate = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            Tx, Ty, Tz, 1
        ]

        let diamond_rotate = [
            Math.cos(ang), -Math.sin(ang), 0, 0,
            Math.sin(ang), Math.cos(ang), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]
        
        
        // Diamond
        this.scene.pushMatrix()

        this.scene.multMatrix(diamond_translate)
        this.scene.multMatrix(diamond_rotate)
        
        //this.diamondMaterial.apply();
        this.diamond.display()

        this.scene.popMatrix()

        // Parallelogram
        this.scene.pushMatrix()
        
        this.scene.translate(-SQRT2/2-SQRT2+1, SQRT2-1, 0)
        this.scene.scale(-1, 1, 1)
        //this.scene.rotate(PI, 1, 0, 0)

        this.parallelogramMaterial.apply();
        this.parallelogram.display()

        this.scene.popMatrix()

        // Triangle
        this.scene.pushMatrix()
        
        this.scene.translate(1+SQRT2/2, 1- (2-SQRT2), 0)
        this.scene.scale(1, 1, 1);

        this.triangleMaterial.apply()
        this.triangle.display()

        this.scene.popMatrix()

        // Triangle Small 1
        this.scene.pushMatrix()
        
        this.scene.translate(-2*SQRT2+1-2, SQRT2/2+SQRT2-1, 0)
        this.scene.scale(1, 1, 1);
        this.scene.rotate(0.75*PI, 0, 0, 1);

        this.triangle_small1Material.apply()
        this.triangle_small1.display()

        this.scene.popMatrix()

        // Triangle Small 2
        this.scene.pushMatrix()
        
        this.scene.translate(-SQRT2, SQRT2/2, 0)
        this.scene.scale(1, 1, 1);
        this.scene.rotate(1.75*PI, 0, 0, 1);

        this.triangle_small2Material.apply()
        this.triangle_small2.display()

        this.scene.popMatrix()

        // Triangle Big 1
        this.scene.pushMatrix()
        
        this.scene.translate(3*SQRT2/2, 0, 0)
        this.scene.scale(1, 1, 1);
        this.scene.rotate(1.75*PI, 0, 0, 1);

        this.triangle_big1Material.apply()
        this.triangle_big1.display()

        this.scene.popMatrix()

        // Triangle Big 2
        this.scene.pushMatrix()
        
        this.scene.translate(3*SQRT2/2 + 2*SQRT2, -SQRT2/2, 0)
        this.scene.scale(1, 1, 1);
        this.scene.rotate(0.75*PI, 0, 0, 1);


        this.triangle_big2Material.apply()
        this.triangle_big2.display()

        this.scene.popMatrix()
    }
}

