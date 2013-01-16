function InterfaceRegistration() {
    this.nTotal = 0;
}
InterfaceRegistration.prototype.create = function () {
    throw new Error('This method must be overwritten');
};