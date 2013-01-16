function RemoteControl() {
    this.aFunctions = [];
    this.sName = '';
    this.nCreatedYear = 0;
}
RemoteControl.prototype.hasExtraFunctions = function () {
    return this.aFunctions.length > 1 && this.sName === 'RCA' && this.nCreatedYear > Date.now().getFullYear() - 2;
};
RemoteControl.prototype.performCoolFunction = function () {
    if (this.hasExtraFunctions()) {
        return 'doSomething';
    }
};