function RegistrationProcessor() {

}
RegistrationProcessor.prototype.processRegistration = function (oRegistration) {
    oRegistration.create();
    return oRegistration.nTotal;
};