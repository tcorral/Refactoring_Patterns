function Dog() {
    Animal.call(this);
}
Dog.prototype = new Animal();