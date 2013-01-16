function AnimalFeedingService() {
    this.bFoodBoolEmpty = true;
}
AnimalFeedingService.prototype.feed = function () {
    if (this.bFoodBoolEmpty) {
        Feeder.replenishFood();
    }
    // more code to feed the animal
};