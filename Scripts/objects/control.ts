// MAIN Control FILE
// control.ts 
// Derek Wong
// Last Modified By: Derek Wong
// Date Last Modified: 2/5/2016
// Defines the control parameters
/*Revision History
  2/3/2016- Created Cube man body
  2/4/2016 - Added Parent Cube to hold Child Cube
  2/5/2016 - Added dat-gui controls
*/
module objects {
	export class Control {
        //Control Attributes
		rotateXAxis: number;
		rotateYAxis: number;
        rotateZAxis: number;
        //Instantiates the control class
		constructor(rotateXAxis: number,rotateYAxis: number,rotateZAxis: number) {
			this.rotateXAxis = rotateXAxis;
			this.rotateYAxis = rotateYAxis;
            this.rotateZAxis = rotateZAxis;
		}
	}
}
