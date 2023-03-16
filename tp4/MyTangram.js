import { CGFobject, CGFappearance, CGFtexture } from "../lib/CGF.js";
import { MyDiamond } from "./MyDiamond.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyTriangleSmall1 } from "./MyTriangleSmall1.js";
import { MyTriangleSmall2 } from "./MyTriangleSmall2.js";
import { MyTriangleBig1 } from "./MyTriangleBig1.js";
import { MyTriangleBig2 } from "./MyTriangleBig2.js";


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
        this.triangle_small1 = new MyTriangleSmall1(scene);
        this.triangle_small2 = new MyTriangleSmall2(scene);
        this.triangle_big1 = new MyTriangleBig1(scene);
        this.triangle_big2 = new MyTriangleBig2(scene);


        // My Diamond
        this.diamondMaterial = new CGFappearance(this.scene);
        this.diamondMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.diamondMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.diamondMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.diamondMaterial.setShininess(1.0);
        this.diamondMaterial.loadTexture('images/tangram.png');
        this.diamondMaterial.setTextureWrap('REPEAT', 'REPEAT')
        
        // My Parallelogram
        this.parallelogramMaterial = new CGFappearance(this.scene);
        this.parallelogramMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.parallelogramMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.parallelogramMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.parallelogramMaterial.setShininess(1.0);
        this.parallelogramMaterial.loadTexture('images/tangram.png');
        this.parallelogramMaterial.setTextureWrap('REPEAT', 'REPEAT')

        // My Triangle
        this.triangleMaterial = new CGFappearance(this.scene);
        this.triangleMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.triangleMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.triangleMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.triangleMaterial.setShininess(1.0);
        this.triangleMaterial.loadTexture('images/tangram.png');
        this.triangleMaterial.setTextureWrap('REPEAT', 'REPEAT')

        // My Triangle Small 1
        this.triangle_small1Material = new CGFappearance(this.scene);
        this.triangle_small1Material.setAmbient(0.1, 0.1, 0.1, 1);
        this.triangle_small1Material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.triangle_small1Material.setSpecular(0.1, 0.1, 0.1, 1);
        this.triangle_small1Material.setShininess(1.0);
        this.triangle_small1Material.loadTexture('images/tangram.png');
        this.triangle_small1Material.setTextureWrap('REPEAT', 'REPEAT')
        
        // My Triangle Small 2
        this.triangle_small2Material = new CGFappearance(this.scene);
        this.triangle_small2Material.setAmbient(0.1, 0.1, 0.1, 1);
        this.triangle_small2Material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.triangle_small2Material.setSpecular(0.1, 0.1, 0.1, 1);
        this.triangle_small2Material.setShininess(1.0);
        this.triangle_small2Material.loadTexture('images/tangram.png');
        this.triangle_small2Material.setTextureWrap('REPEAT', 'REPEAT')

        // My Triangle Big 2
        this.triangle_big1Material = new CGFappearance(this.scene);
        this.triangle_big1Material.setAmbient(0.1, 0.1, 0.1, 1);
        this.triangle_big1Material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.triangle_big1Material.setSpecular(0.1, 0.1, 0.1, 1);
        this.triangle_big1Material.setShininess(1.0);
        this.triangle_big1Material.loadTexture('images/tangram.png');
        this.triangle_big1Material.setTextureWrap('REPEAT', 'REPEAT')

        // My Triangle Big 2
        this.triangle_big2Material = new CGFappearance(this.scene);
        this.triangle_big2Material.setAmbient(0.1, 0.1, 0.1, 1);
        this.triangle_big2Material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.triangle_big2Material.setSpecular(0.1, 0.1, 0.1, 1);
        this.triangle_big2Material.setShininess(1.0);
        this.triangle_big2Material.loadTexture('images/tangram.png');
        this.triangle_big2Material.setTextureWrap('REPEAT', 'REPEAT')        
        
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
        
        this.diamondMaterial.apply();
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

