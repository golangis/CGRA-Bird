import { CGFinterface, dat } from "../lib/CGF.js";

/**
 * MyInterface
 * @constructor
 */
export class MyInterface extends CGFinterface {
  constructor() {
    super();
  }

  init(application) {
    // call CGFinterface init
    super.init(application);

    // init GUI. For more information on the methods, check:
    // https://github.com/dataarts/dat.gui/blob/master/API.md
    this.gui = new dat.GUI();

    //Checkbox element in GUI
    this.gui.add(this.scene, "displayAxis").name("Display Axis");

    //Slider element in GUI
    this.gui.add(this.scene, "scaleFactor", 0.1, 5).name("Scale Factor");

    var f0 = this.gui.addFolder("Bird");
    f0.add(this.scene, "birdSpeedFactor", 0.1, 3)
      .name("Speed Factor")
      .onChange(this.scene.updateBirdFactors.bind(this.scene));
    f0.add(this.scene, "birdScaleFactor", 0.5, 3)
      .name("Scale Factor")
      .onChange(this.scene.updateBirdFactors.bind(this.scene));
    var f1 = this.gui.addFolder("Panorama");
    f1.add(this.scene, "panoramaSlices", 3, 150)
      .name("Slices")
      .onChange(this.scene.updatePanorama.bind(this.scene));
    f1.add(this.scene, "panoramaStacks", 3, 150)
      .name("Stacks")
      .onChange(this.scene.updatePanorama.bind(this.scene));
    var f2 = this.gui.addFolder("Terrain");
    f2.add(this.scene, "terrainDivisions", 3, 150)
      .name("Divisions")
      .onChange(this.scene.updateTerrain.bind(this.scene));

    this.initKeys();

    return true;
  }

  initKeys() {
    this.scene.gui = this;

    this.processKeyboard = function () {};

    this.activeKeys = {};
  }

  processKeyDown(event) {
    this.activeKeys[event.code] = true;
  }

  processKeyUp(event) {
    this.activeKeys[event.code] = false;
  }

  isKeyPressed(keyCode) {
    return this.activeKeys[keyCode] || false;
  }
}
