function Car() {
    Vehicle.call(this);
}
Car.prototype = new Vehicle();