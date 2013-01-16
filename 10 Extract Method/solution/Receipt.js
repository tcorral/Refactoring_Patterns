function Receipt() {
    this.aDiscounts = [];
    this.aItemTotals = [];
}
Receipt.prototype.calculateGrandTotal = function () {
    var nSubTotal = this.calculateSubtotal();
    nSubTotal = this.calculateDiscounts(nSubTotal);
    nSubTotal = this.calculateTax(nSubTotal);
    return nSubTotal;
};
Receipt.prototype.calculateTax = function (nSubTotal) {
    var nTax = nSubTotal * 0.065;
    nSubTotal += nTax;
    return nSubTotal;
};
Receipt.prototype.calculateDiscounts = function (nSubTotal) {
    var nDiscount,
        nLenDiscounts = this.aDiscounts.length,
        nDiscountValue;
    if (nLenDiscounts) {
        for (nDiscount = 0; nDiscount < nLenDiscounts; nDiscount++) {
            nDiscountValue = this.aDiscounts[nDiscount];
            nSubTotal -= nDiscountValue;
        }
    }
    return nSubTotal;
};
Receipt.prototype.calculateSubtotal = function () {
    var nSubTotal = 0,
        nTotal,
        nLenTotals = this.aItemTotals.length,
        nItemValue;
    for (nTotal = 0; nTotal < nLenTotals; nTotal++) {
        nItemValue = this.aItemTotals[nTotal];
        nSubTotal += nItemValue;
    }
    return nSubTotal;
};