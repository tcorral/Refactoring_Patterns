function Order()
{
    var aOrderLines = [];
    this.getOrderLines = function()
    {
        return aOrderLines.concat();
    };
    this.setOrderLines = function(aOrder)
    {
        var aToConcat = aOrder || [];
        aOrderLines = aOrderLines.concat(aToConcat);
        aToConcat = null;
    };
}
Order.prototype.addOrderLine = function (oOrderLine)
{
    var aOrderLines = [];
    this.nOrderTotal += oOrderLine.nTotal;
    aOrderLines.push(oOrderLine);
    this.setOrderLines(aOrderLines);
    aOrderLines = null;
};
Order.prototype.removeOrderLine = function(oOrderLineItem)
{
    var aOrderLines = this.getOrderLines(),
        oOrderLine;
    oOrderLine = aOrderLines.map(function (oOrder) {
        return oOrder === oOrderLineItem;
    })[0];
    if (typeof oOrderLine === 'undefined' || oOrderLine === null) {
        return;
    }
    this.nOrderTotal -= oOrderLine.nTotal;
    aOrderLines.splice(this.nOrderTotal, 1);
    this.setOrderLines(aOrderLines);
    oOrderLine = aOrderLines = null;
};