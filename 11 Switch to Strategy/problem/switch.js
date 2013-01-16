(function (ns) {
    var oNamespace;
    ns.DaysOfRefactoring = {};
    ns.DaysOfRefactoring.SwitchToStrategy = {};
    ns.DaysOfRefactoring.SwitchToStrategy.Before = {};
    oNamespace = ns.DaysOfRefactoring.SwitchToStrategy.Before;
    oNamespace.oState = {
        Alaska:0,
        NewYork:1,
        Florida:2
    };
    oNamespace.ShippingInfo = function () {

    };
    oNamespace.ShippingInfo.prototype.calculateShippingAmount = function (nState) {
        switch (nState) {
            case oNamespace.oState.Alaska:
                return this.getAlaskaShippingAmount();
            case oNamespace.oState.NewYork:
                return this.getNewYorkShippingAmount();
            case oNamespace.oState.Florida:
                return this.getFloridaShippingAmount();
            default:
                return 0;
        }
    };
    oNamespace.ShippingInfo.prototype.getAlaskaShippingAmount = function () {
        return 15;
    };
    oNamespace.ShippingInfo.prototype.getNewYorkShippingAmount = function () {
        return 10;
    };
    oNamespace.ShippingInfo.prototype.getFloridaShippingAmount = function () {
        return 3;
    };
    oNamespace.ClientCode = function () {

    };
    oNamespace.ClientCode.prototype.calculateShippingAmount = function () {
        var shippingInfo = new oNamespace.ShippingInfo();
        return shippingInfo.calculateShippingAmount(oNamespace.oState.Alaska);
    };
}(Namespace));