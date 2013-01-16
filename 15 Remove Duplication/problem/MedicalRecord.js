function MedicalRecord() {
    this.dDateArchived = null;
    this.bArchived = false;
}
MedicalRecord.prototype.archiveRecord = function () {
    this.bArchived = true;
    this.dDateArchived = Date.now();
};
MedicalRecord.prototype.closeRecord = function () {
    this.bArchived = true;
    this.dDateArchived = Date.now();
};