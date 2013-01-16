function Video() {

}
Video.prototype.rentVideo = function (oVideo, oCustomer) {
    oCustomer.aVideos.push(oVideo);
};