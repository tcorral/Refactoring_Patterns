(function (ns) {
    var oNamespace;
    ns.DaysOfRefactoring = {};
    ns.DaysOfRefactoring.SwitchToStrategy = {};
    ns.DaysOfRefactoring.SwitchToStrategy.After = {};
    oNamespace = ns.DaysOfRefactoring.SwitchToStrategy.After;
    oNamespace.aState = [ 'Alaska', 'NewYork', 'Florida'];
    oNamespace.InterfaceShippingInfo = function () {

    };
    oNamespace.InterfaceShippingInfo.prototype.calculateShippingAmount = function (nState) {
        throw new Error('This method must be overwritten');
    };
    oNamespace.InterfaceShippingCalculation = function () {

    };
    oNamespace.InterfaceShippingCalculation.prototype.calculate = function () {
        throw new Error('This method must be overwritten');
    };
    oNamespace.ClientCode = function (oShippingInfo) {
        this.oShippingInfo = oShippingInfo;
    };
    oNamespace.ClientCode.prototype.calculateShipping = function () {
        this.oShippingInfo.calculateShippingAmount(oNamespace.aState[0]);
    };
    oNamespace.ShippingInfo = function () {
        oNamespace.InterfaceShippingInfo.call(this);
    };
    oNamespace.ShippingInfo.prototype = new oNamespace.InterfaceCalculation();
    oNamespace.ShippingInfo.calculateShippingAmount = function (sState) {
        return new oNamespace[sState + 'ShippingCalculation']().calculate();
    };
    oNamespace.AlaskaShippingCalculation = function () {
        oNamespace.InterfaceShippingCalculation.call(this);
    };
    oNamespace.AlaskaShippingCalculation.prototype = new oNamespace.InterfaceShippingCalculation();
    oNamespace.AlaskaShippingCalculation.prototype.calculate = function () {
        return 15;
    };
    oNamespace.NewYorkShippingCalculation = function () {
        oNamespace.InterfaceShippingCalculation.call(this);
    };
    oNamespace.NewYorkShippingCalculation.prototype = new oNamespace.InterfaceShippingCalculation();
    oNamespace.NewYorkShippingCalculation.prototype.calculate = function () {
        return 10;
    };
    oNamespace.FloridaShippingCalculation = function () {
        oNamespace.InterfaceShippingCalculation.call(this);
    };
    oNamespace.FloridaShippingCalculation.prototype = new oNamespace.InterfaceShippingCalculation();
    oNamespace.FloridaShippingCalculation.prototype.calculate = function () {
        return 3;
    };
}(Namespace));