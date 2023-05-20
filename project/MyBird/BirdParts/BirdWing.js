import { CGFobject, CGFappearance, CGFtexture } from "../../../../lib/CGF.js";
import { MyTriangle } from "../../../project/MyTriangle.js";
import { MyQuad } from "../../../project/MyQuad.js";

export class BirdWing extends CGFobject {
  constructor(scene, appearence) {
    super(scene);
    this.wingRect = new MyQuad(scene);
    this.wingTrian = new MyTriangle(scene);

    this.appearence = appearence;
    this.wingTexture = new CGFtexture(
      this.scene,
      "./images/textures/bird/head.jpg"
    );
    this.wingAppearence = new CGFappearance(this.scene);
    this.wingAppearence.setTexture(this.wingTexture);
    this.wingAppearence.setTextureWrap("REPEAT", "REPEAT");
  }

  display() {
    // Wing Rectangle
    this.scene.pushMatrix();
    this.scene.translate(0, 0, -.75);
    this.scene.rotate(Math.PI / 2, 1, 0, 0);
    this.scene.scale(1.5, 1.5, 1);
    this.wingAppearence.apply();
    this.wingRect.display();
    this.scene.popMatrix();

    // Wing Triangle
    this.scene.pushMatrix();
    this.scene.scale(0.75, 1.5, 1);
    this.scene.translate(0, -2*0.19, -2.415);
    this.scene.rotate(-Math.PI / 2 -Math.PI / 8 , 1, 0, 0);
    this.wingTrian.display();
    this.scene.popMatrix();
  }
}
