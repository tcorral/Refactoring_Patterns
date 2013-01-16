function CashRegister() {
    this.nTax = 0.06;
}
CashRegister.prototype.acceptPayment = function (oCustomer, aProducts, nPayment) {
    var nSubTotal = 0,
        nProduct,
        nGrandTotal,
        nLenProduct = aProducts.length,
        oProduct;
    for (nProduct = 0; nProduct < nLenProduct; nProduct++) {
        oProduct = aProducts[nProduct];
        nSubTotal += oProduct.nPrice;
    }
    for (nProduct = 0; nProduct < nLenProduct; nProduct++) {
        oProduct = aProducts[nProduct];
        nSubTotal -= oProduct.nAvailableDiscounts;
    }
    nGrandTotal = nSubTotal * this.nTax;
    oCustomer.deductFromAccountBalance(nGrandTotal);
};