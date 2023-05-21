import { CGFobject } from "../../../lib/CGF.js";
import { MySphere } from "../MySphere.js";

export class MyNest extends CGFobject {
  constructor(scene, appearence, position) {
    super(scene);
    this.nest = new MySphere(scene, 40, 40, 7, false, Math.PI);
    this.nestUp = new MySphere(scene, 40, 40, 7, true, Math.PI);
    this.appearence = appearence;

    this.x = position[0];
    this.y = position[1];
    this.z = position[2];

    this.eggs = [];
    this.eggsInitialPositions = [];
    this.nestPositions = [
      [1, 1],
      [-1, 1],
      [1, -1],
      [-1, -1],
    ];
  }

  addEgg(egg, position) {
    this.eggs.push(egg)
    egg.x = egg.x + position[0];
    egg.y = egg.y + position[1];
    egg.z = egg.z + position[2];
    this.eggsInitialPositions.push([egg.x, egg.y, egg.z]);
  }

  lerp(x, y, a) {
    return x * (1 - a) + y * a;
  }

  update(_timeSinceAppStart, deltaTime) {
    for (let index = 0; index < this.eggs.length; index++) {
      const egg = this.eggs[index];
      const initialPos = this.eggsInitialPositions[index];
      const targetPos = [this.x+this.nestPositions[index][0], this.y, this.z+this.nestPositions[index][1]];

      if (initialPos == targetPos) continue;

      if (egg.y < this.y) {
        continue;
      }
      
      var progress = (egg.y- initialPos[1]) / (targetPos[1] - initialPos[1]);
      
      egg.y -= deltaTime;

      var xLerp = this.lerp(initialPos[0], targetPos[0], progress);
      var zLerp = this.lerp(initialPos[2], targetPos[2], progress);

      egg.setPosition([xLerp, egg.y, zLerp]);
    }
  }

  display() {
    this.scene.pushMatrix();
    this.eggs.forEach(egg => {
      //console.log(egg.x)
      egg.display()
    });
    this.scene.popMatrix();
    this.scene.pushMatrix();
    this.appearence.apply();
    this.scene.translate(this.x, this.y, this.z);
    this.scene.rotate(Math.PI / 2, 1, 0, 0);
    this.scene.scale(0.3, 0.3, 0.24);
    this.nest.display();
    this.nestUp.display();
    this.scene.popMatrix();
  }
}
