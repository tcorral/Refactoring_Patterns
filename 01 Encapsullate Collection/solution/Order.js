function Order() {
    var aOrderLines = [];
    this.nOrderTotal = 0;

    this.getOrderLines = function () {
        return aOrderLines.concat();
    };
    this.addOrderLine = function (oOrderLine) {
        this.nOrderTotal += oOrderLine.nTotal;
        aOrderLines.push(oOrderLine);
    };
    this.removeOrderLine = function (oOrderLineItem) {
        var oOrderLine;
        oOrderLine = aOrderLines.map(function (oOrder) {
            return oOrder === oOrderLineItem;
        })[0];
        if (typeof oOrderLine === 'undefined' || oOrderLine === null) {
            return;
        }
        this.nOrderTotal -= oOrderLine.nTotal;
        aOrderLines.splice(this.nOrderTotal, 1);
    };
}
