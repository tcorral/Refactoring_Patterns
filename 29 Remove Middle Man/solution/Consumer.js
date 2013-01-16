function Consumer(oDataProvider) {
    this.oDataProvider = oDataProvider;
}
Consumer.prototype.get = function (nId) {
    var oAccount = this.oDataProvider.getAccount(nId);
}