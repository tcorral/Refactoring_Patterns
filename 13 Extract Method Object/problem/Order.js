function Order() {
    this.aOrderLineItems = [];
    this.aDiscounts = [];
    this.nTax = 0;
}
Order.prototype.calculate = function () {
    var nSubTotal = 0,
        nLineItem,
        nLenLineItems = this.aOrderLineItems.length,
        nItemValue,
        nDiscount,
        nLenDiscounts = this.aDiscounts.length,
        nDiscountValue,
        nTax,
        nGrandTotal;
    for (nLineItem = 0; nLineItem < nLenLineItems; nLineItem++) {
        nItemValue = this.aOrderLineItems[nLineItem];
        nSubTotal += nItemValue;
    }
    for (nDiscount = 0; nDiscount < nLenDiscounts; nDiscount++) {
        nDiscountValue = this.aDiscounts[nDiscount];
        nSubTotal -= nDiscountValue;
    }
    nTax = nSubTotal * this.nTax;
    nGrandTotal = nSubTotal + nTax;
    return nGrandTotal;
};