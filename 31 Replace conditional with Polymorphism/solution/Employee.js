function Employee() {
    Customer.call(this);
    this.nDiscountPercentage = 0.15;
}
Employee.prototype = new Customer();