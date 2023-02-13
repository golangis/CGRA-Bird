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

        //Checkbox to show/hid objects
        this.gui.add(this.scene, 'showMyParallelogram').name('Show_Parallelogram');
        this.gui.add(this.scene, 'showMyTriangle').name('Show Triangle');
        this.gui.add(this.scene, 'showMyDiamond').name('Show Diamond');
        this.gui.add(this.scene, 'showMyTriangleSmall').name('Show_Small_Triangle');
        return true;
    }
}