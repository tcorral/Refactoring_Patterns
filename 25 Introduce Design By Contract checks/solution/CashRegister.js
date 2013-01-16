function CashRegister() {

}
CashRegister.prototype.totalOrder = function (aProducts, oCustomer) {
    var nTotalOrder = 0;
    if (oCustomer === null) {
        throw new Error('Customer can not be null');
    }
    if (aProducts.length === 0) {
        throw new Error('Must have at least one product to total');
    }
    nTotalOrder = aProducts.sum();
    if (nTotalOrder === 0) {
        throw new Error('Order Total should not be zero');
    }
    return nTotalOrder;
};