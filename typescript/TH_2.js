var circle = /** @class */ (function () {
    function circle(r) {
        this.r = r;
    }
    circle.prototype.khoangcach = function (ht2) {
        var OR = Math.sqrt(Math.pow(ht1.r, 2) + Math.pow(ht2.r, 2));
        return OR;
    };
    return circle;
}());
var ht1 = new circle(18);
var ht2 = new circle(5);
console.log(ht1.khoangcach(ht2));
