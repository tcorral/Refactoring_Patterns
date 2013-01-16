function Dog() {
    Animal.call(this);
}
Dog.prototype = new Animal();
Dog.prototype.bark = function () {
    // code to bark
};