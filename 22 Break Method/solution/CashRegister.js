function CashRegister() {
    this.nTax = 0.06;
    this.aProducts = [];
}
CashRegister.prototype.acceptPayment = function (oCustomer, aProducts, nPayment) {
    var nSubTotal = this.calculateSubTotal(),
        nGrandTotal;
    nSubTotal = this.substractDiscounts(nSubTotal);
    nGrandTotal = this.addTax(nSubTotal);
    this.substractFromCustomerBalance(oCustomer, nGrandTotal);
};
CashRegister.prototype.substractFromCustomerBalance = function (oCustomer, nGrandTotal) {
    oCustomer.deductFromAccountBalance(nGrandTotal);
};
CashRegister.prototype.addTax = function (nSubTotal) {
    return nSubTotal + this.nTax;
};
CashRegister.prototype.substractDiscounts = function (nSubTotal) {
    var nProduct,
        nLenProduct = this.aProducts.length,
        oProduct;
    for (nProduct = 0; nProduct < nLenProduct; nProduct++) {
        oProduct = this.aProducts[nProduct];
        nSubTotal -= oProduct.nAvailableDiscounts;
    }
    return nSubTotal;
};
CashRegister.prototype.calculateSubTotal = function () {
    var nSubTotal = 0,
        nProduct,
        nLenProduct = this.aProducts.length,
        oProduct;
    for (nProduct = 0; nProduct < nLenProduct; nProduct++) {
        oProduct = this.aProducts[nProduct];
        nSubTotal += oProduct.nPrice;
    }
    return nSubTotal;
}