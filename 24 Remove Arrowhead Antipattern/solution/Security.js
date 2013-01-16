function Security(oSecurityChecker) {
    this.oSecurityChecker = oSecurityChecker;
}
Security.prototype.hasAccess = function (oUser, oPermission, aExcemptions) {
    if (oUser === null || oPermission === null) {
        return false;
    }
    if (aExcemptions.contains(oPermission)) {
        return true;
    }
    return this.oSecurityChecker.checkHasPermission(oUser, oPermission);
};