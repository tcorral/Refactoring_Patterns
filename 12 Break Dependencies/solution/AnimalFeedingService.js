function AnimalFeedingService(oFeederService) {
    this.oFeederService = oFeederService;
    this.bFoodBoolEmpty = true;
}
AnimalFeedingService.prototype.feed = function () {
    if (this.bFoodBoolEmpty) {
        this.oFeederService.replenishFood();
    }
    // more code to feed the animal
};