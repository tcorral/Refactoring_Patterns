// This solution takes advantage of prototype Thanks RoryH
function Order() {
	this.nOrderTotal = 0;
}
Order.prototype = (function()
{
	var aOrderLines = [];
	return {
		getOrderLines: function()
		{
			return aOrderLines.concat();
		},
		addOrderLine: function()
		{
			this.nOrderTotal += oOrderLine.nTotal;
			aOrderLines.push(oOrderLine);
		},
		removeOrderLine: function()
		{
			var oOrderLine;
			oOrderLine = aOrderLines.map(function (oOrder) {
				return oOrder === oOrderLineItem;
			})[0];
			if (typeof oOrderLine === 'undefined' || oOrderLine === null) {
				return;
			}
			this.nOrderTotal -= oOrderLine.nTotal;
			aOrderLines.splice(this.nOrderTotal, 1);
		}
	};
}());