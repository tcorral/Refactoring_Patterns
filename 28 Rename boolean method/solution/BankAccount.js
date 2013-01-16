function BankAccount() {

}
BankAccount.prototype.createAccountWithChecking = function (oCustomer) {
    this.createAccount(oCustomer, true, false);
};
BankAccount.prototype.createAccountWithCheckingAndSavings = function (oCustomer) {
    this.createAccount(oCustomer, true, true);
};
BankAccount.prototype.createAccount = function (oCustomer, bWithChecking, bWithSavings) {
    // do work
};