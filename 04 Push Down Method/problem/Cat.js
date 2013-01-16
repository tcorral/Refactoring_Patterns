function Cat() {
    Animal.call(this);
}
Cat.prototype = new Animal();