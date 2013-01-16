function SavingsAccount() {
    Account.call(this);
}
SavingsAccount.prototype = new Account();