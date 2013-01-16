function MedicalRecord() {
    this.dDateArchived = null;
    this.bArchived = false;
}
MedicalRecord.prototype.archiveRecord = function () {
    this._switchToArchived();
};
MedicalRecord.prototype.closeRecord = function () {
    this._switchToArchived();
};
MedicalRecord.prototype._switchToArchived = function () {
    this.bArchived = true;
    this.dDateArchived = Date.now();
};