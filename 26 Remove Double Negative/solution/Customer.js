function Customer() {
    this.nBalance = 0;
}
Customer.prototype.isFlagged = function () {
    return this.nBalance >= 30;
};