import { CGFappearance, CGFobject, CGFshader, CGFtexture } from '../../lib/CGF.js'
import { BirdHead } from './BirdParts/BirdHead.js'
import { BirdBody } from './BirdParts/BirdBody.js'
import { BirdBeak } from './BirdParts/BirdBeak.js'
import { BirdEye }  from './BirdParts/BirdEye.js'
import { BirdLeg } from './BirdParts/BirdLeg.js'
import { BirdHat } from './BirdParts/BirdHat.js'
import { BirdTail } from './BirdParts/BirdTail.js'
import { BirdWing } from './BirdParts/BirdWing.js'

export class MyBird extends CGFobject {
  constructor(scene, movingVelocity, rotationRight, rotationLeft) {
    super(scene)

    this.setBody()
    this.setHead()
    this.setEyes()
    this.setWings()
    this.setBeak()
    this.setLegs()
    this.setHat()
    this.setTail()
    
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

  setBeak() { 
    this.beakAppearance = new CGFappearance(this.scene);
    this.beakAppearance.setAmbient(0, 0, 0, 1);
    this.beakAppearance.setSpecular(0, 0, 0, 0);
    this.beakAppearance.setShininess(10)
    this.beak = new BirdBeak(this.scene, this.beakAppearance)
  }

  setEyes() {
    this.eyeAppearance = new CGFappearance(this.scene); 
    this.eyeAppearance.setAmbient(0, 0, 0, 1);
    this.eyeAppearance.setSpecular(0, 0, 0, 0);
    this.eyeAppearance.setShininess(10)
    this.eye = new BirdEye(this.scene, this.eyeAppearance)
  }

  setLegs() { 
    this.legAppearance = new CGFappearance(this.scene);
    this.legAppearance.setAmbient(0, 0, 0, 1);
    this.legAppearance.setSpecular(0, 0, 0, 0);
    this.legAppearance.setShininess(10)
    this.leg = new BirdLeg(this.scene, this.legAppearance)  
  }

  setHat() { 
    this.hatAppearance = new CGFappearance(this.scene);
    this.hatAppearance.setAmbient(0, 0, 0, 1);
    this.hatAppearance.setSpecular(0, 0, 0, 0);
    this.hatAppearance.setShininess(10)
    this.hat = new BirdHat(this.scene, this.hatAppearance)  
  }

  setTail() { 
    this.tailAppearance = new CGFappearance(this.scene);
    this.tailAppearance.setAmbient(0, 0, 0, 1);
    this.tailAppearance.setSpecular(0, 0, 0, 0);
    this.tailAppearance.setShininess(10)
    this.tail = new BirdTail(this.scene, this.tailAppearance)  
  }

  setWings(){
    this.wingsAppearance = new CGFappearance(this.scene);
    this.wingsAppearance.setAmbient(0, 0, 0, 1);
    this.wingsAppearance.setSpecular(0, 0, 0, 0);
    this.wingsAppearance.setShininess(10)
    this.wings = new BirdWing(this.scene, this.wingsAppearance)  
  }


  display() {
    this.scene.pushMatrix()

    this.body.display()
    this.head.display()
    this.beak.display()
    this.eye.display()
    this.leg.display()
    this.hat.display()
    this.tail.display()
    this.wings.display()

    this.scene.popMatrix();
  }
}