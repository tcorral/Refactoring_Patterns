function Receipt() {
    this.aDiscounts = [];
    this.aItemTotals = [];
}
Receipt.prototype.calculateGrandTotal = function () {
    var nSubTotal = 0,
        nTax,
        nTotal,
        nLenTotals = this.aItemTotals.length,
        nItemValue,
        nDiscount,
        nLenDiscounts = this.aDiscounts.length,
        nDiscountValue;
    for (nTotal = 0; nTotal < nLenTotals; nTotal++) {
        nItemValue = this.aItemTotals[nTotal];
        nSubTotal += nItemValue;
    }
    if (nLenDiscounts > 0) {
        for (nDiscount = 0; nDiscount < nLenDiscounts; nDiscount++) {
            nDiscountValue = this.aDiscounts[nDiscount];
            nSubTotal -= nDiscountValue;
        }
    }
    nTax = nSubTotal * 0.065;
    nSubTotal += nTax;
    return nSubTotal
};