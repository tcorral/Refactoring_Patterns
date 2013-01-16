function SavingsAccount() {
    Account.call(this);
    this.nMinimumSavingsBalance = 5;
}
SavingsAccount.prototype = new Account();