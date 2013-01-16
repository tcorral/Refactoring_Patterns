function PoliceCarController(nMileage, bServiceRequired) {
}
PoliceCarController.prototype.getCar = function (nMileage, bServiceRequired) {
    var oPoliceCar = new PoliceCar();
    oPoliceCar.bServiceRequired = bServiceRequired;
    oPoliceCar.nMileage = nMileage;
    return oPoliceCar;
};