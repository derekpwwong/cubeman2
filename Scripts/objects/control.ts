module objects {
	export class Control {
		rotateXAxis: number;
		rotateYAxis: number;
        rotateZAxis: number;
		constructor(rotateXAxis: number,rotateYAxis: number,rotateZAxis: number) {
			this.rotateXAxis = rotateXAxis;
			this.rotateYAxis = rotateYAxis;
            this.rotateZAxis = rotateZAxis;
		}
	}
}
