import { CGFappearance, CGFobject, CGFtexture } from "../../../lib/CGF.js";
import { MyBirdEgg } from "./MyBirdEgg.js";

export class MyEggs extends CGFobject {
  constructor(scene, num) {
    super(scene);
    this.eggs = [];
    this.eggsInNest = [];
    this.createEggs(num);
  }

  checkCollisions;

  createEggs(num) {
    var positions = [
      [60, -69.2, -10],
      [100, -69.2, 40],
      [84, -69.2, -20],
      [70, -69.2, 20],
    ];
    for (let i = 0; i < num; i++) {
      this.appearance = new CGFappearance(this.scene);
      this.appearance.setAmbient(0, 0, 0, 1);
      this.appearance.setDiffuse(1, 1, 1, 1);
      this.appearance.setSpecular(0, 0, 0, 0);
      this.appearance.setShininess(10);
      this.texture = new CGFtexture(
        this.scene,
        "./images/textures/egg/egg" + (i % 4) + ".png"
      );
      this.appearance.setTexture(this.texture);
      let newBirdEgg = new MyBirdEgg(this.scene, this.appearance, positions[i]);
      this.eggs.push(newBirdEgg);
    }
  }

  display() {
    this.appearance.apply();

    this.eggs.forEach((egg) => {
      this.scene.pushMatrix();
      egg.display();
      this.scene.popMatrix();
    });

    this.eggsInNest.forEach((egg) => {
      this.scene.pushMatrix();
      egg.display();
      this.scene.popMatrix();
    });
  }
}
