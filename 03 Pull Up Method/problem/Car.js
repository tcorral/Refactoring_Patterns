function Car() {
    Vehicle.call(this);
}
Car.prototype = new Vehicle();
Car.prototype.turn = function (oDirection) {
    // code here.
};