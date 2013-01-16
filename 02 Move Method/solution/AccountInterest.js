function AccountInterest(oAccount) {
    this.oAccount = oAccount;
}
AccountInterest.prototype.getInterestRate = function () {
    return this.calculateInterestRate();
};
AccountInterest.prototype.isIntroductoryRate = function () {
    return this.calculateInterestRate() < 0.05;
};
AccountInterest.prototype.calculateInterestRate = function () {
    if (this.oAccount.nCreditScore > 900) {
        return 0.02;
    }
    if (this.oAccount.nAccountAge > 10) {
        return 0.03;
    }
    return 0.05;
};