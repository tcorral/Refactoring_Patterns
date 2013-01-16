function StudentWebsite() {
    Website.call(this);
    this.bActive = false;
}
StudentWebsite.prototype = new Website();