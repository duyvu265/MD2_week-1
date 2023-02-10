var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this._name = name;
        this._email = email;
        this._age = age;
    }
    Staff.prototype.getname = function () {
        return this._name;
    };
    Staff.prototype.setname = function (name) {
        this._name = name;
    };
    Staff.prototype.getemail = function () {
        return this._email;
    };
    Staff.prototype.setemail = function (email) {
        this._email = email;
    };
    Staff.prototype.getage = function () {
        return this._age;
    };
    Staff.prototype.setage = function (age) {
        this._age = age;
    };
    return Staff;
}());
var staff1 = new Staff("duy", "duy123@gmail.com", 15);
var nameStaff = staff1.getname();
console.log(nameStaff);
