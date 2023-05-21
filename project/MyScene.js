import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFshader, CGFtexture } from "../lib/CGF.js";
import { MyPanorama } from "./MyPanorama.js";
import { MyPlane } from "./MyPlane.js";
import { MySphere } from "./MySphere.js";
import { MyTerrain } from "./MyTerrain.js";
import { MyBird } from "./MyBird/MyBird.js";
import { MyBirdEgg } from "./MyBird/MyBirdEgg.js";
import { MyNest } from "./MyBird/MyNest.js";

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

    this.terrainDivisions = 30
    this.terrain = new MyTerrain(this, this.terrainDivisions);
    this.terrainShader = new CGFshader(this.gl, "shaders/terrain.vert", "shaders/terrain.frag");
    this.terrainMap = new CGFtexture(this, "images/squaredHeightmap.jpg");
    this.terrainAltimetry = new CGFtexture(this, "images/altimetry.png");

    this.sphereSlices = 40
    this.sphereStacks = 40
    this.sphereRadius = 2
    this.sphereInside = false
    this.sphere = new MySphere(this, this.sphereSlices, this.sphereStacks, this.sphereRadius, this.sphereInside)

    this.panoramaTexture = "images/panorama4.jpg"
    this.panoramaSlices = 80
    this.panoramaStacks = 80
    this.panorama = new MyPanorama(this, this.panoramaTexture, this.panoramaSlices, this.panoramaStacks, 200)

    //Objects connected to MyInterface
    this.displayAxis = true;
    this.scaleFactor = 1;

    this.enableTextures(true);

    this.texture = new CGFtexture(this, "images/terrain.jpg");
    this.appearance = new CGFappearance(this);
    this.appearance.setTexture(this.texture);
    this.appearance.setTextureWrap('REPEAT', 'REPEAT');

    this.sphereTexture = new CGFtexture(this, "images/earth.jpg");
    this.sphereAppearance = new CGFappearance(this);
    this.sphereAppearance.setTexture(this.sphereTexture);
    this.sphereAppearance.setTextureWrap('REPEAT', 'REPEAT');

    this.terrainShader.setUniformsValues({ uSampler2: 1 });
    this.terrainShader.setUniformsValues({ uSampler3: 2 });

    //BirdAnimation
    this.birdSpeedFactor = 1.0
    this.birdScaleFactor = 1.0

    // Bird
    this.bird = new MyBird(this, [60, -64.5, 0], this.birdSpeedFactor, this.birdScaleFactor);
    this.birdAppearance = new CGFappearance(this);



    // Bird Egg
    this.eggTexture = new CGFtexture(this, "images/textures/egg/egg1.jpg");
    this.eggAppearance = new CGFappearance(this);
    this.eggAppearance.setTexture(this.eggTexture);
    this.birdEgg = new MyBirdEgg(this, this.eggAppearance);

    // Nest
    this.nestTexture = new CGFtexture(this, "images/textures/nest/nest1.jpeg");
    this.nestAppearance = new CGFappearance(this);
    this.nestAppearance.setTexture(this.nestTexture);
    this.nest = new MyNest(this, this.nestAppearance);

    this.setUpdatePeriod(50);

    this.appStartTime=Date.now(); 
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
  
  updateMyBirdEgg() {
    this.birdEgg = new MyBirdEgg(this, this.eggAppearence);
  }
  
  updateMyNest() {
    this.nest = new MyNest(this, this.nestAppearance);
  }

  updatePanorama() {
    this.panorama = new MyPanorama(this, this.panoramaTexture, this.panoramaSlices, this.panoramaStacks, 200)
  }

  updateTerrain() {
    this.terrain = new MyTerrain(this, this.terrainDivisions);
  }

  checkKeys() {
    var text = "Keys pressed: ";
    var keysPressed = false;

    if (this.gui.isKeyPressed("KeyW")){
      text += " W ";
      keysPressed = true;
    }
    if (this.gui.isKeyPressed("KeyS")){
      text += " S ";
      keysPressed = true;
    }
    if (keysPressed) console.log(text)
  }

  update(t) {
    this.terrainShader.setUniformsValues({ timeFactor: t/ 100 % 100 })

    let timeSinceAppStart = (t-this.appStartTime)/1000.0;
    let deltaTime = timeSinceAppStart - this.lastTimeSinceAppStart;
    this.lastTimeSinceAppStart = timeSinceAppStart;

    // let deltaTime =timeSinceAppStart- this.lastTimeSinceAppStart;
    this.bird.update(timeSinceAppStart, deltaTime);

    this.checkKeys();

    if (this.gui.isKeyPressed("KeyW"))
      this.bird.accelerate(1);
    if (this.gui.isKeyPressed("KeyS"))
      this.bird.accelerate(-1)
    if (this.gui.isKeyPressed("KeyD"))
      this.bird.turn(-1);
    if (this.gui.isKeyPressed("KeyA"))
      this.bird.turn(1)
    if (this.gui.isKeyPressed("KeyR"))
      this.bird.reset()
  }

  display() {
    // ---- BEGIN Background, camera and axis setup
    // Clear image and depth buffer everytime we update the scene
    this.lights[0].update() 
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
    this.translate(0,-100,0);
    this.scale(400, 400, 400);
    this.rotate(-Math.PI/2.0,1,0,0);
    this.setActiveShader(this.terrainShader)
    this.terrainMap.bind(1);
    this.terrainAltimetry.bind(2);
    this.terrain.display();
    this.setActiveShader(this.defaultShader)
    this.popMatrix();


    this.pushMatrix();
    this.bird.display();
    this.popMatrix();
    //this.nest.display();
    //this.birdEgg.display();
    this.pushMatrix();
    this.translate(
      this.camera.position[0],
      this.camera.position[1],
      this.camera.position[2]
      );
    this.panorama.display();
    this.popMatrix();
    // ---- END Primitive drawing section
  }
}
