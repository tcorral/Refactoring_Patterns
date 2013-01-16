function OrderProcessor() {

}
OrderProcessor.prototype.processOrder = function (oCustomer, aProducts) {
    var nOrderTotal = aProducts.sum('nPrice');
    nOrderTotal -= nOrderTotal * oCustomer.nDiscountPercentage;
    return nOrderTotal;
};