function Order() {
    this.aOrderLineItems = [];
    this.aDiscounts = [];
    this.nTax = 0;
}
Order.prototype.calculate = function () {
    return new OrderCalculator(this).calculate();
};