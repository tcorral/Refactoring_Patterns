function CashRegister() {

}
CashRegister.prototype.totalOrder = function (aProducts, oCustomer) {
    var nOrderTotal = aProducts.sum('nPrice');
    oCustomer.nBalance += nOrderTotal;
    return nOrderTotal;
};