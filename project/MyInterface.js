import {CGFinterface, dat} from '../lib/CGF.js';

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
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        var f0 = this.gui.addFolder('Sphere')
        f0.add(this.scene, 'sphereSlices', 3, 50).name('Slices').onChange(this.scene.updateSphere.bind(this.scene));
        f0.add(this.scene, 'sphereStacks', 3, 50).name('Stacks').onChange(this.scene.updateSphere.bind(this.scene));
        f0.add(this.scene, 'sphereRadius', 0.1, 50).name('Radius').onChange(this.scene.updateSphere.bind(this.scene));
        f0.add(this.scene, 'sphereInside').name('InsideOut').onChange(this.scene.updateSphere.bind(this.scene));

        return true;
    }
}