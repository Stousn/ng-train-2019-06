var Circle = /** @class */ (function () {
    function Circle(r) {
        var _this = this;
        this.radius = r;
        this.getCircumference = function () { return 2 * _this.radius * Math.PI; };
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var c = new Circle(1);
c.getArea();
