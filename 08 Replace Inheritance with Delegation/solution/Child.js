function Child() {
    this.oSanitation = new Sanitation();
}
Child.prototype.washHands = function () {
    return this.oSanitation.washHands();
}