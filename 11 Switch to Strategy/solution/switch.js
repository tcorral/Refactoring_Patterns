(function (ns) {
    var oNamespace;
    ns.DaysOfRefactoring = {};
    ns.DaysOfRefactoring.SwitchToStrategy = {};
    ns.DaysOfRefactoring.SwitchToStrategy.After = {};
    oNamespace = ns.DaysOfRefactoring.SwitchToStrategy.After;
    oNamespace.oState = {
        Alaska:0,
        NewYork:1,
        Florida:2
    };
    oNamespace.InterfaceCalculation = function () {

    };
    oNamespace.InterfaceCalculation.prototype.calculate = function () {
        throw new Error('This method must be overwritten!');
    };
    oNamespace.AlaskaShippingCalculation = function () {
        oNamespace.InterfaceCalculation.call(this);
    };
    oNamespace.AlaskaShippingCalculation.prototype = new oNamespace.InterfaceCalculation();
    oNamespace.AlaskaShippingCalculation.prototype.calculate = function () {
        return 15;
    };
    oNamespace.NewYorkShippingCalculation = function () {
        oNamespace.InterfaceCalculation.call(this);
    };
    oNamespace.NewYorkShippingCalculation.prototype = new oNamespace.InterfaceCalculation();
    oNamespace.NewYorkShippingCalculation.prototype.calculate = function () {
        return 10;
    };
    oNamespace.FloridaShippingCalculation = function () {
        oNamespace.InterfaceCalculation.call(this);
    };
    oNamespace.FloridaShippingCalculation.prototype = new oNamespace.InterfaceCalculation();
    oNamespace.FloridaShippingCalculation.prototype.calculate = function () {
        return 3;
    };
    oNamespace.ShippingInfo = function () {
        var oState = oNamespace.oState;
        this.oShippingCalculations = {};
        this.oShippingCalculations[oState.Alaska] = new oNamespace.AlaskaShippingCalculation();
        this.oShippingCalculations[oState.NewYork] = new oNamespace.NewYorkShippingCalculation();
        this.oShippingCalculations[oState.Florida] = new oNamespace.FloridaShippingCalculation();
    };
    oNamespace.ShippingInfo.prototype.calculateShippingAmount = function (nShippingState) {
        return this.oShippingCalculations[nShippingState].calculate();
    };
    oNamespace.ClientCode = function () {

    };
    oNamespace.ClientCode.prototype.calculateShipping = function () {
        var oNamespace = ns.DaysOfRefactoring.SwitchToStrategy.Before,
            shippingInfo = new oNamespace.ShippingInfo();
        return shippingInfo.calculateShippingAmount(oNamespace.oState.Alaska);
    };

}(Namespace));