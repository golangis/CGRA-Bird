import { CGFappearance, CGFobject, CGFshader, CGFtexture } from '../../lib/CGF.js'
import { BirdHead } from './BirdParts/BirdHead.js'
import { BirdBody } from './BirdParts/BirdBody.js'

export class MyBird extends CGFobject {
  constructor(scene, movingVelocity, rotationRight, rotationLeft) {
    super(scene)

    this.setBody()
    this.setHead()
    // this.setEyes()
    // this.setWings()
    // this.setBeak()
  }



  setBody() {
    this.bodyAppearance = new CGFappearance(this.scene);
    this.bodyAppearance.setAmbient(0, 0, 0, 1);
    this.bodyAppearance.setSpecular(0, 0, 0, 0);
    this.bodyAppearance.setShininess(10)
    this.body = new BirdBody(this.scene, this.bodyAppearance)

  }

  setHead() {
    this.headAppearance = new CGFappearance(this.scene);
    this.headAppearance.setAmbient(0, 0, 0, 1);
    this.headAppearance.setSpecular(0, 0, 0, 0);
    this.headAppearance.setShininess(10)
    this.head = new BirdHead(this.scene, this.headAppearance)
  }

  display() {
    this.scene.pushMatrix()
    this.body.display()
    this.head.display()
    this.scene.popMatrix();
  }
}