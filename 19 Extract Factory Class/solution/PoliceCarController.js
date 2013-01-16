function PoliceCarController(oPoliceCarFactory) {
    this.oPoliceCarFactory = oPoliceCarFactory;
}
PoliceCarController.prototype.getCar = function (nMileage, bServiceRequired) {
    return this.oPoliceCarFactory.create(nMileage, bServiceRequired);
};