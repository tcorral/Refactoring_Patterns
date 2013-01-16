function Customer() {
    this.nBalance = 0;
}
Customer.prototype.isNotFlagged = function () {
    return this.nBalance < 30;
};