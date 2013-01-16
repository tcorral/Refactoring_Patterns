function PoliceCarFactory() {
    InterfacePoliceCarFactory.call(this);
}
PoliceCarFactory.prototype = new InterfacePoliceCarFactory();
PoliceCarFactory.create = function (nMileage, bServiceRequired) {
    var oPoliceCar = new PoliceCar();
    oPoliceCar.readForService = bServiceRequired;
    oPoliceCar.nMileage = nMileage;
    return oPoliceCar;
};