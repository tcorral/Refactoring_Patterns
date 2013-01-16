function Employee() {
    Customer.call(this);
}
Employee.prototype = new Customer();