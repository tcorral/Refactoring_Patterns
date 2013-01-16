function CheckingAccount() {
    Account.call(this);
    this.nMinimumCheckingBalance = 5;
}
CheckingAccount.prototype = new Account();