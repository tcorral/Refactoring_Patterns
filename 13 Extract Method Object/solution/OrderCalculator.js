function OrderCalculator(oOrder) {
    this.nSubTotal = 0;
    this.aOrderLineItems = oOrder.aOrderLineItems;
    this.aDiscounts = oOrder.aDiscounts;
    this.nTax = oOrder.nTax;
}
OrderCalculator.prototype.calculate = function () {
    this.calculateSubTotal();
    this.substractDiscounts();
    this.calculateTax();
    return this.nSubTotal;
};
OrderCalculator.prototype.calculateSubTotal = function () {
    var nLineItem,
        nLenLineItems = this.aOrderLineItems,
        nItemValue;
    for (nLineItem = 0; nLineItem < nLenLineItems; nLineItem++) {
        nItemValue = this.aOrderLineItems[nLineItem];
        this.nSubTotal += nItemValue;
    }
};
OrderCalculator.prototype.substractDiscounts = function () {
    var nDiscount,
        nLenDiscounts = this.aDiscounts.length,
        nDiscountValue;
    for (nDiscount = 0; nDiscount < nLenDiscounts; nDiscount++) {
        nDiscountValue = this.aDiscounts[nDiscount];
        this.nSubTotal -= nDiscountValue;
    }
};
OrderCalculator.prototype.calculateTax = function () {
    this.nSubTotal += this.nSubTotal * this.nTax;
};