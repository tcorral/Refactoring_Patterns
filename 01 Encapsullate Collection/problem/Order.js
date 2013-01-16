function Order() {
    this.aOrderLines = [];
    this.nOrderTotal = 0;
}
Order.prototype.getOrderLines = function () {
    return this.aOrderLines;
};
Order.prototype.addOrderLine = function (oOrderLine) {
    this.nOrderTotal += oOrderLine.nTotal;
    this.aOrderLines.push(oOrderLine);
};
Order.prototype.removeOrderLine = function (oOrderLineItem) {
    var nOrderTotal;
    oOrderLine = this.aOrderLines.map(function (oOrder) {
        return oOrder === oOrderLineItem;
    })[0];
    if (typeof oOrderLine === 'undefined' || oOrderLine === null) {
        return;
    }
    this.nOrderTotal -= oOrderLine.nTotal;
    this.aOrderLines.splice(this.nOrderTotal, 1);
};