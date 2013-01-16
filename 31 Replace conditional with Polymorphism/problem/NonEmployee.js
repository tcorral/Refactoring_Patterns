function NonEmployee() {
    Customer.call(this);
}
NonEmployee.prototype = new Customer();