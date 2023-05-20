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
  constructor(scene, position, speedFactor, scaleFactor) {
    super(scene)

    this.setBody()
    this.setHead()
    this.setEyes()
    this.setWings()
    this.setBeak()
    this.setLegs()
    this.setHat()
    this.setTail()

    this.x = position[0];
    this.y = position[1];
    this.z = position[2];

    this.speedFactor = speedFactor;
    this.scaleFactor = scaleFactor;

    this.oscillatoryY = 0;
  }

  setBody() {
    this.bodyTexture = new CGFtexture(this.scene, './images/textures/bird/body.png')     
    this.bodyAppearance = new CGFappearance(this.scene);
    this.bodyAppearance.setTexture(this.bodyTexture)
    this.bodyAppearance.setAmbient(0.5, 0.5, 0.5, 1.0);

    this.body = new BirdBody(this.scene, this.bodyAppearance)
  }

  setHead() {
    this.headTexture = new CGFtexture(this.scene, './images/textures/bird/head.jpg')
    this.headAppearance = new CGFappearance(this.scene);
    this.headAppearance.setTexture(this.headTexture)
    this.headAppearance.setAmbient(0.5, 0.5, 0.5, 1.0);
    this.head = new BirdHead(this.scene, this.headAppearance)
  }

  setBeak() { 
    this.beakTexture = new CGFtexture(this.scene, './images/textures/bird/beak.png')
    this.beakAppearance = new CGFappearance(this.scene);
    this.beakAppearance.setTexture(this.beakTexture)
    this.beakAppearance.setAmbient(0.5, 0.5, 0.5, 1.0);
    this.beak = new BirdBeak(this.scene, this.beakAppearance)
  }

  setEyes() {
    this.eyeTexture = new CGFtexture(this.scene, './images/textures/bird/eye.jpg')
    this.eyeAppearance = new CGFappearance(this.scene); 
    this.eyeAppearance.setTexture(this.eyeTexture)
    this.eyeAppearance.setAmbient(0.5, 0.5, 0.5, 1.0);
    this.eye = new BirdEye(this.scene, this.eyeAppearance)
  }

  setLegs() { 
    this.legTexture = new CGFtexture(this.scene, './images/textures/bird/leg.png')
    this.legAppearance = new CGFappearance(this.scene);
    this.legAppearance.setTexture(this.legTexture)
    this.legAppearance.setAmbient(0.3, 0.3, 0.3, 1.0);
    this.leg = new BirdLeg(this.scene, this.legAppearance)  
  }

  setHat() {
    this.hatAppearance = new CGFappearance(this.scene);
    this.hatAppearance.setAmbient(0.6, 0.6, 0.6, 1.0);
    this.hat = new BirdHat(this.scene, this.hatAppearance)  
  }

  setTail() { 
    this.tailAppearance = new CGFappearance(this.scene);
    this.tailAppearance.setAmbient(0.5, 0.5, 0.5, 1.0);
    this.tail = new BirdTail(this.scene, this.tailAppearance)  
  }

  setWings(){
    this.wingTexture = new CGFtexture(this.scene, './images/textures/bird/wing.jpg')
    this.wingAppearence = new CGFappearance(this.scene);
    this.wingAppearence.setTexture(this.wingTexture)
    this.wingAppearence.setAmbient(0.5, 0.5, 0.5, 1.0);
    this.wings = new BirdWing(this.scene, this.wingAppearence)  
  }

  update(timeSinceAppStart) {
    this.oscillatoryY = Math.cos((timeSinceAppStart * this.speedFactor));
  }

  updateFactors(speedFactor, scaleFactor) {
    this.speedFactor = speedFactor;
    this.scaleFactor = scaleFactor;
  }


  display() {
    this.scene.pushMatrix()
    
    this.scene.translate(this.x, this.y + this.oscillatoryY, this.z);

    this.scene.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
    
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