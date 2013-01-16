function Customer() {
    this.aLateFees = [];
    this.aVideos = [];
}
Customer.prototype.payFee = function () {

};
Customer.prototype.calculateBalance = function (oCustomer) {
    return oCustomer.aLateFees.sum();
};