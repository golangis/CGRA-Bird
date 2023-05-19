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

    this.bodyTexture = new CGFtexture(this.scene, './images/bird/body.png')     
    this.bodyAppearance = new CGFappearance(this.scene);
    this.bodyAppearance.setAmbient(0, 0, 0, 1);
    this.bodyAppearance.setSpecular(0, 0, 0, 0);
    this.bodyAppearance.setShininess(10)
    this.bodyAppearance.setTexture(this.bodyTexture)
    this.body = new BirdBody(this.scene, this.bodyAppearance)
  }

  setHead() {
    this.headTexture = new CGFtexture(this.scene, './images/bird/head.jpg')
    this.headAppearance = new CGFappearance(this.scene);
    this.headAppearance.setAmbient(0, 0, 0, 1);
    this.headAppearance.setSpecular(0, 0, 0, 0);
    this.headAppearance.setShininess(10)
    this.headAppearance.setTexture(this.headTexture)
    this.head = new BirdHead(this.scene, this.headAppearance)
  }

  setBeak() { 
    this.beakTexture = new CGFtexture(this.scene, './images/bird/beak.png')
    this.beakAppearance = new CGFappearance(this.scene);
    this.beakAppearance.setAmbient(0, 0, 0, 1);
    this.beakAppearance.setSpecular(0, 0, 0, 0);
    this.beakAppearance.setShininess(10)
    this.beakAppearance.setTexture(this.beakTexture)
    this.beak = new BirdBeak(this.scene, this.beakAppearance)
  }

  setEyes() {
    this.eyeTexture = new CGFtexture(this.scene, './images/bird/eye.jpg')
    this.eyeAppearance = new CGFappearance(this.scene); 
    this.eyeAppearance.setTexture(this.eyeTexture)
    this.eye = new BirdEye(this.scene, this.eyeAppearance)

  }

  setLegs() { 
    this.legTexture = new CGFtexture(this.scene, './images/bird/leg.png')
    this.legAppearance = new CGFappearance(this.scene);
    this.legAppearance.setTexture(this.legTexture)
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
    this.wingTexture = new CGFtexture(this.scene, './images/bird/wing.jpg')
    this.wingAppearence = new CGFappearance(this.scene);
    this.wingAppearence.setTexture(this.wingTexture)
    this.wings = new BirdWing(this.scene, this.wingAppearence)  
  }


  display() {
    this.scene.pushMatrix()

    this.body.display()
    this.head.display()
    this.beak.display()
    this.scene.popMatrix()
    this.scene.pushMatrix()

    this.eye.display()
    this.scene.popMatrix()
    this.scene.pushMatrix()
    this.leg.display()
    this.hat.display()
    this.tail.display()
    this.wings.display()

    this.scene.popMatrix();
  }
}