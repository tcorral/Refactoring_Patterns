function ClassRegistration() {
    InterfaceRegistration.call(this);
}
ClassRegistration.prototype = new InterfaceRegistration();
ClassRegistration.prototype.create = function () {
    // create registration code
};
ClassRegistration.prototype.transfer = function () {
    // class transfer code
};