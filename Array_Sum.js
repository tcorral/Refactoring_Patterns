if (!Array.prototype.sum) {
    Array.prototype.sum = function (sProperty) {
        var aItems = this.concat(),
            oItem = aItems.shift(),
            nValue,
            nItemValue,
            nSum = 0;
        while (oItem) {
            nItemValue = oItem;
            if (sProperty) {
                nItemValue = oItem[sProperty];
            }
            nValue = parseInt(nItemValue, 10);
            if (!isNaN(nValue)) {
                nSum += nValue;
            }
            oItem = aItems.shift();
        }
        return nSum;
    };
}