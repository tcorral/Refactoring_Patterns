function Order() {
    this.oCustomer = null;
}
Order.prototype.calculateOrder = function (oCustomer, aProducts, nDiscounts) {
    var nOrderTotal;
    if (aProducts.length === 0) {
        return 0;
    }
    this.oCustomer = oCustomer;
    nOrderTotal = aProducts.sum('nPrice');
    if (nDiscounts === 0) {
        return nOrderTotal;
    }
    nOrderTotal -= nDiscounts;
    return nOrderTotal;
};