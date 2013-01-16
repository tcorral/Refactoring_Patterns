function RegistrationProcessor() {

}
RegistrationProcessor.prototype.processRegistration = function (oClassRegistration) {
    oClassRegistration.create();
    return oClassRegistration.nTotal;
};