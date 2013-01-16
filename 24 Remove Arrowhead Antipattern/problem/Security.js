function Security(oSecurityChecker) {
    this.oSecurityChecker = oSecurityChecker;
}
Security.prototype.hasAccess = function (oUser, oPermission, aExcemptions) {
    var bPermission = false;
    if (oUser !== null) {
        if (oPermission !== null) {
            if (aExcemptions.length === 0) {
                if (this.oSecurityChecker.checkPermission(oUser, oPermission, aExcemptions)) {
                    bPermission = true;
                }
            }
        }
    }
    return bPermission;
};