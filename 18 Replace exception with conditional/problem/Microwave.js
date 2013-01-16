function Microwave(oMicrowaveMotor) {
    this.oMicrowaveMotor = oMicrowaveMotor;
}
Microwave.prototype.start = function (oFood) {
    var bFoodCooked = false;
    try {
        this.oMicrowaveMotor.cook(oFood);
        bFoodCooked = true;
    }
    catch (erError) {
        bFoodCooked = false;
    }
    return bFoodCooked;
};