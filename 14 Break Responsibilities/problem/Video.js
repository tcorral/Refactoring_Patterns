function Video() {

}
Video.prototype.payFee = function (nFee) {

};
Video.prototype.rentVideo = function (oVideo, oCustomer) {
    oCustomer.aVideos.push(oVideo);
};
Video.prototype.calculateBalance = function (oCustomer) {
    return oCustomer.aLateFees.sum();
};