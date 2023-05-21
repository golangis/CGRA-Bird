import {
  CGFscene,
  CGFcamera,
  CGFaxis,
  CGFappearance,
  CGFshader,
  CGFtexture,
} from "../lib/CGF.js";
import { MyPanorama } from "./MyPanorama.js";
import { MySphere } from "./MySphere.js";
import { MyTerrain } from "./MyTerrain.js";
import { MyBird } from "./MyBird/MyBird.js";
import { MyEggs } from "./MyBird/MyEggs.js";
import { MyNest } from "./MyBird/MyNest.js";
import { MyTreeGroupPatch } from "./MyTreeGroupPatch.js";
import { MyTreeRowPatch } from "./MyTreeRowPatch.js";

/**
 * MyScene
 * @constructor
 */
export class MyScene extends CGFscene {
  constructor() {
    super();
  }
  init(application) {
    super.init(application);

    this.initCameras();
    this.initLights();

    //Background coltestShaders[this.selectedExampleShader]or
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

    this.gl.clearDepth(100.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.depthFunc(this.gl.LEQUAL);

    //Initialize scene objects
    this.axis = new CGFaxis(this);

    this.terrainDivisions = 150;
    this.terrain = new MyTerrain(this, this.terrainDivisions);
    this.terrainShader = new CGFshader(
      this.gl,
      "shaders/terrain.vert",
      "shaders/terrain.frag"
    );
    this.terrainMap = new CGFtexture(this, "images/squaredHeightmap.jpg");
    this.terrainAltimetry = new CGFtexture(this, "images/altimetry.png");

    this.treeGroupPatch = new MyTreeGroupPatch(this, 0, 0);
    this.treeRowPatch = new MyTreeRowPatch(this, 0, 0);

    this.treeShader = new CGFshader(
      this.gl,
      "shaders/billboard.vert",
      "shaders/billboard.frag"
    );

    // trees info

    let treeData = [
      [[21.21, 5.67], 1], [[10.82, 51.61], 1], [[18.84, 106.9], 0], [[20.88, 161.6], 0],
      [[14.72, 212.2], 0], [[3.22, 251.08], 0], [[18.06, 316.65], 1], [[23.7, 364.62], 1],
      [[62.36, 22.01], 0], [[65.18, 61.35], 1], [[51.3, 117.58], 0], [[50.44, 172.44], 0],
      [[62.36, 213.52], 0], [[72.02, 260.34], 0], [[58.89, 319.38], 0], [[67.05, 367.21], 0],
      [[104.33, 0.8], 0], [[109.26, 66.31], 0], [[109.77, 101.63], 0], [[104.89, 162.54], 1],
      [[112.34, 207.37], 1], [[124.35, 257.12], 0], [[107.45, 323.65], 0], [[118.11, 352.27], 1],
      [[168.88, 10.05], 0], [[163.1, 68.25], 0], [[173.18, 214.19], 0], [[152.22, 269.53], 0],
      [[168.86, 305.37], 1], [[156.46, 354.67], 1], [[200.46, 9.92], 0], [[200.55, 61.18], 1],
      [[204.38, 222.06], 1], [[206.15, 269.37], 1], [[205.11, 308.63], 1], [[203.43, 358.97], 1],
      [[264.81, 8.39], 0], [[265.34, 56.0], 0], [[261.41, 100.2], 1], [[262.11, 163.96], 1],
      [[255.16, 267.19], 0], [[271.94, 311.64], 0], [[264.04, 368.46], 0], [[300.76, 13.59], 1],
      [[301.88, 71.15], 0], [[313.56, 107.06], 0], [[311.29, 161.23], 1], [[307.13, 207.28], 1],
      [[310.13, 263.83], 0], [[314.32, 316.01], 1], [[315.1, 355.77], 1], [[374.32, 17.41], 0],
      [[373.63, 50.61], 1], [[370.48, 120.8], 1], [[350.16, 165.27], 1], [[360.21, 215.45], 1],
      [[359.4, 255.81], 1], [[352.02, 311.06], 0], [[362.17, 365.46], 0],
    ];

    this.trees = [];

    for (let i = 0; i < treeData.length; i++) {
      if (treeData[i][1]) {
        this.trees.push(
          new MyTreeGroupPatch(
            this,
            treeData[i][0][0] - 200,
            treeData[i][0][1] - 200
          )
        );
      } else {
        this.trees.push(
          new MyTreeRowPatch(
            this,
            treeData[i][0][0] - 200,
            treeData[i][0][1] - 200
          )
        );
      }
    }

    this.sphereSlices = 40;
    this.sphereStacks = 40;
    this.sphereRadius = 2;
    this.sphereInside = false;
    this.sphere = new MySphere(
      this,
      this.sphereSlices,
      this.sphereStacks,
      this.sphereRadius,
      this.sphereInside
    );

    this.panoramaTexture = "images/panorama4.jpg";
    this.panoramaSlices = 80;
    this.panoramaStacks = 80;
    this.panorama = new MyPanorama(
      this,
      this.panoramaTexture,
      this.panoramaSlices,
      this.panoramaStacks,
      200
    );

    //Objects connected to MyInterface
    this.displayAxis = true;
    this.scaleFactor = 1;

    this.enableTextures(true);

    this.texture = new CGFtexture(this, "images/terrain.jpg");
    this.appearance = new CGFappearance(this);
    this.appearance.setTexture(this.texture);
    this.appearance.setTextureWrap("REPEAT", "REPEAT");

    this.sphereTexture = new CGFtexture(this, "images/earth.jpg");
    this.sphereAppearance = new CGFappearance(this);
    this.sphereAppearance.setTexture(this.sphereTexture);
    this.sphereAppearance.setTextureWrap("REPEAT", "REPEAT");

    this.terrainShader.setUniformsValues({ uSampler2: 1 });
    this.terrainShader.setUniformsValues({ uSampler3: 2 });

    this.treeShader.setUniformsValues({ uSampler2: 1 });

    //BirdAnimation
    this.birdSpeedFactor = 1.0;
    this.birdScaleFactor = 1.0;

    // Bird
    this.bird = new MyBird(
      this,
      [60, -64.5, 0],
      this.birdSpeedFactor,
      this.birdScaleFactor
    );
    this.birdAppearance = new CGFappearance(this);

    // Bird Eggs
    this.eggs = new MyEggs(this, 4);

    // Nest
    this.nestTexture = new CGFtexture(this, "images/textures/nest/nest.jpg");
    this.nestAppearance = new CGFappearance(this);
    this.nestAppearance.setTexture(this.nestTexture);
    this.nest = new MyNest(this, this.nestAppearance, [80, -68, 20]);

    this.setUpdatePeriod(50);

    this.appStartTime = Date.now();
    this.lastTimeSinceAppStart = this.appStartTime;
  }
  initLights() {
    this.lights[0].setPosition(15, 0, 5, 1);
    this.lights[0].setDiffuse(1, 1, 1, 1);
    this.lights[0].setAmbient(1, 1, 1, 1);
    this.lights[0].setSpecular(1, 1, 1, 1);
    this.lights[0].enable();
    this.lights[0].update();
  }
  initCameras() {
    this.camera = new CGFcamera(
      1.4,
      0.1,
      1000,
      vec3.fromValues(-20, -30, -50),
      vec3.fromValues(60, -64.5, 0)
    );
  }
  setDefaultAppearance() {
    this.setAmbient(1, 1, 1, 1.0);
    this.setDiffuse(1, 1, 1, 1.0);
    this.setSpecular(1, 1, 1, 1.0);
    this.setShininess(15.0);
  }

  updateBirdFactors() {
    this.bird.updateFactors(this.birdSpeedFactor, this.birdScaleFactor);
  }

  updateMyBird() {
    // this.bird = new MyBird(this, this.birdAppearance);
  }

  updateMyNest() {
    this.nest = new MyNest(this, this.nestAppearance, [80, -68, 20]);
  }

  updatePanorama() {
    this.panorama = new MyPanorama(
      this,
      this.panoramaTexture,
      this.panoramaSlices,
      this.panoramaStacks,
      200
    );
  }

  updateTerrain() {
    this.terrain = new MyTerrain(this, this.terrainDivisions);
  }

  checkKeys() {
    var text = "Keys pressed: ";
    var keysPressed = false;

    if (this.gui.isKeyPressed("KeyW")) {
      text += " W ";
      keysPressed = true;
    }
    if (this.gui.isKeyPressed("KeyS")) {
      text += " S ";
      keysPressed = true;
    }
    if (keysPressed) console.log(text);
  }

  update(t) {
    this.terrainShader.setUniformsValues({ timeFactor: (t / 100) % 100 });

    let timeSinceAppStart = (t - this.appStartTime) / 1000.0;
    let deltaTime = timeSinceAppStart - this.lastTimeSinceAppStart;
    this.lastTimeSinceAppStart = timeSinceAppStart;

    this.bird.update(timeSinceAppStart, deltaTime);
    this.nest.update(timeSinceAppStart, deltaTime);

    this.checkKeys();

    if (this.gui.isKeyPressed("KeyW")) this.bird.accelerate(1);
    if (this.gui.isKeyPressed("KeyS")) this.bird.accelerate(-1);
    if (this.gui.isKeyPressed("KeyD")) this.bird.turn(-1);
    if (this.gui.isKeyPressed("KeyA")) this.bird.turn(1);
    if (this.gui.isKeyPressed("KeyR")) this.bird.reset();
    if (this.gui.isKeyPressed("KeyP")) this.bird.catchEgg(timeSinceAppStart);
    if (this.gui.isKeyPressed("KeyO")) this.bird.dropEgg();
  }

  checkDropCollisions(position) {
    if (
      Math.sqrt(
        (position[0] - this.nest.x) * (position[0] - this.nest.x) +
          (position[2] - this.nest.z) * (position[2] - this.nest.z)
      ) < 10.0
    ) {
      this.nest.addEgg(this.bird.egg, position);
      this.bird.egg = null;
    }
  }

  checkCatchCollisions(x, z) {
    for (let index = 0; index < this.eggs.eggs.length; index++) {
      const egg = this.eggs.eggs[index];

      if (
        Math.sqrt((x - egg.x) * (x - egg.x) + (z - egg.z) * (z - egg.z)) < 1.5
      ) {
        this.eggs.eggs = this.eggs.eggs.filter(function (e) {
          return e !== egg;
        });
        this.bird.addEgg(egg);
        break;
      }
    }
  }

  display() {
    // ---- BEGIN Background, camera and axis setup
    // Clear image and depth buffer everytime we update the scene
    this.lights[0].update();
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    // Initialize Model-View matrix as identity (no transformation
    this.updateProjectionMatrix();
    this.loadIdentity();
    // Apply transformations corresponding to the camera position relative to the origin
    this.applyViewMatrix();
    // Draw axis
    if (this.displayAxis) this.axis.display();

    var sca = [
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
    ];

    this.multMatrix(sca);

    // ---- BEGIN Primitive drawing section

    this.pushMatrix();
    this.appearance.apply();
    this.translate(0, -100, 0);
    this.scale(400, 400, 400);
    this.rotate(-Math.PI / 2.0, 1, 0, 0);
    this.setActiveShader(this.terrainShader);
    this.terrainMap.bind(1);
    this.terrainAltimetry.bind(2);
    this.terrain.display();
    this.setActiveShader(this.defaultShader);
    this.popMatrix();

    this.pushMatrix();
    this.bird.display();
    this.popMatrix();
    this.pushMatrix();
    this.eggs.display();
    this.popMatrix();
    this.pushMatrix();
    this.nest.display();
    this.popMatrix();

    this.pushMatrix();

    this.translate(0, -100, 0);
    this.setActiveShader(this.treeShader);
    this.terrainMap.bind(1);

    for (let index = 0; index < this.trees.length; index++) {
      this.trees[index].display();
    }

    this.setActiveShader(this.defaultShader);
    this.popMatrix();

    this.pushMatrix();
    this.translate(
      this.camera.position[0],
      this.camera.position[1],
      this.camera.position[2]
    );

    this.panorama.display();
    // this.panorama.display();
    this.setActiveShader(this.defaultShader);
    this.popMatrix();
    // ---- END Primitive drawing section
  }
}
