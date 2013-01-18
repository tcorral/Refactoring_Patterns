// This solution takes advantage of prototype Thanks RoryH
function Order() {
	this.nId = Unique.getKey();	// Unique.getKey is an static method to get an unique key for instance.
	this.nOrderTotal = 0;
}
Order.prototype = (function()
{
	var oOrderLines = {};
	var setOrderLinesByInstance = function(oInstance)
	{
		if(typeof oOrderLines[oInstance.nId] === 'undefined')
		{
			oOrderLines[oInstance.nId] = [];
		}
	};
	return {
		getOrderLines: function()
		{
			setOrderLinesByInstance(this);
			return oOrderLines[this.nId].concat();
		},
		addOrderLine: function(oOrderLine)
		{
			setOrderLinesByInstance(this);
			this.nOrderTotal += oOrderLine.nTotal;
			oOrderLines[this.nId].push(oOrderLine);
		},
		removeOrderLine: function(oOrderLineItem)
		{
			var oOrderLine;
			setOrderLinesByInstance(this);
			oOrderLine = oOrderLines[this.nId].map(function (oOrder) {
				return oOrder === oOrderLineItem;
			})[0];
			if (typeof oOrderLine === 'undefined' || oOrderLine === null) {
				return;
			}
			this.nOrderTotal -= oOrderLine.nTotal;
			oOrderLines[this.nId].splice(this.nOrderTotal, 1);
		}
	};
}());