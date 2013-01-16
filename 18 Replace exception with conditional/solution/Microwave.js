function Microwave(oMicrowaveMotor) {
    this.oMicrowaveMotor = oMicrowaveMotor;
}
Microwave.prototype.start = function (oFood) {
    if (this.oMicrowaveMotor.isInUse()) {
        return false;
    }
    this.oMicrowaveMotor.cook(oFood);
    return true;
};