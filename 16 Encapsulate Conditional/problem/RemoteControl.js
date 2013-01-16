function RemoteControl() {
    this.aFunctions = [];
    this.sName = '';
    this.nCreatedYear = 0;
}
RemoteControl.prototype.performCoolFunction = function (sButtonPressed) {
    if (this.aFunctions.length > 1 && this.sName === "RCA" && this.nCreatedYear > Date.now().getFullYear() - 2) {
        return 'doSomething';
    }
};