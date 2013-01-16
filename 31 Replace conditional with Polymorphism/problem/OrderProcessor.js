function OrderProcessor() {

}
OrderProcessor.prototype.processOrder = function (oCustomer, aProducts) {
    var nOrderTotal = aProducts.sum('nPrice');

    if (oCustomer instanceof  Employee) {
        nOrderTotal -= nOrderTotal * 0.15;
    }
    else if (oCustomer instanceof NonEmployee) {
        nOrderTotal -= nOrderTotal * 0.05;
    }
    return nOrderTotal;
};