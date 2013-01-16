function NonRegistration() {
    Registration.call(this);
    this.oNonRegistrationAction = null;
    this.sNotes = '';
}
NonRegistration.prototype = new Registration();