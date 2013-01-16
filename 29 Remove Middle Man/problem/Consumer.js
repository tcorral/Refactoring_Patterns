function Consumer(oAccountManager) {
    this.oAccountManager = oAccountManager;
}
Consumer.prototype.get = function (nId) {
    var oAccount = this.oAccountManager.getAccount(nId);
};