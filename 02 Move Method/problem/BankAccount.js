function BankAccount(nAccountAge, nCreditScore, oAccountInterest) {
    this.nAccountAge = nAccountAge;
    this.nCreditScore = nCreditScore;
    this.oAccountInterest = oAccountInterest;
}
BankAccount.prototype.calculateInterestRate = function () {
    if (this.nCreditScore > 900) {
        return 0.02;
    }
    if (this.nAccountAge > 10) {
        return 0.03;
    }
    return 0.05;
};