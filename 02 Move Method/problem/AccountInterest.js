function AccountInterest(oAccount) {
    this.oAccount = oAccount;
}
AccountInterest.prototype.getInterestRate = function () {
    return this.oAccount.calculateInterestRate();
};
AccountInterest.prototype.isIntroductoryRate = function () {
    return this.oAccount.calculateInterestRate() < 0.05;
};