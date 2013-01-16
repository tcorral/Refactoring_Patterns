function InterfaceFeederService() {

}
InterfaceFeederService.prototype.replenishFood = function () {
    throw new Error('This method must be overwritten');
};