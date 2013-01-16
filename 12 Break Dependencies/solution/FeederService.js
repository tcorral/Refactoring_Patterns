function FeederService() {
    InterfaceFeederService.call(this);
}
FeederService.prototype = new FeederService();
FeederService.prototype.replenishFood = function () {
    Feeder.replenishFood();
};