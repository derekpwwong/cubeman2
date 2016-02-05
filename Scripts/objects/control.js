var objects;
(function (objects) {
    var Control = (function () {
        function Control(rotateXAxis, rotateYAxis, rotateZAxis) {
            this.rotateXAxis = rotateXAxis;
            this.rotateYAxis = rotateYAxis;
            this.rotateZAxis = rotateZAxis;
        }
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
