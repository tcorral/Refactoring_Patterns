function Motorcycle() {
    Vehicle.call(this);
}
Motorcycle.prototype = new Vehicle();