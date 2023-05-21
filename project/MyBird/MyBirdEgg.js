import { CGFobject } from "../../lib/CGF.js";
import { MySphere } from "../MySphere.js";

export class MyBirdEgg extends CGFobject {
  constructor(scene, appearence, position) {
    super(scene);
    this.birdEggDown = new MySphere(scene, 40, 40, 2, false, Math.PI);
    this.birdEggUp = new MySphere(scene, 40, 40, 2, false, Math.PI);
    this.appearence = appearence;

    this.x = position[0];
    this.y = position[1];
    this.z = position[2];
  }

  display() {
    this.scene.pushMatrix();
    this.appearence.apply();
    this.scene.translate(this.x, this.y, this.z);
    this.scene.scale(0.3, 0.3, 0.3)
    this.scene.rotate(Math.PI / 2, 1, 0, 0);
    this.birdEggDown.display();
    this.scene.rotate(-Math.PI, 1, 0, 0);
    this.scene.scale(1, 1, 1.8);

    this.birdEggUp.display();
    this.scene.popMatrix();
  }
}
