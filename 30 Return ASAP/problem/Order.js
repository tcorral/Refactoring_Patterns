function Order() {
    this.oCustomer = null;
}
Order.prototype.calculateOrder = function (oCustomer, aProducts, nDiscounts) {
    var nOrderTotal = 0;
    this.oCustomer = oCustomer;
    if (aProducts.length > 0) {
        nOrderTotal = aProducts.sum('nPrice');
        if (nDiscounts > 0) {
            nOrderTotal -= nDiscounts;
        }
    }
    return nOrderTotal;
};