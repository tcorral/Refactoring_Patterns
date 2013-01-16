function AccountManager(oDataProvider) {
    this.oDataProvider = oDataProvider;
}
AccountManager.prototype.getAccount = function (nId) {
    return this.oDataProvider.getAccount(nId);
};
