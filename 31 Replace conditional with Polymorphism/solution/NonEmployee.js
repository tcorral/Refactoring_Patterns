function NonEmployee() {
    Customer.call(this);
    this.nDiscountPercentage = 0.05;
}
NonEmployee.prototype = new Customer();