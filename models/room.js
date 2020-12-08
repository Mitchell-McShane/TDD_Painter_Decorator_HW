const Room = function (squareMeters){
    this.squareMeters = squareMeters;
    this.isPainted = false;
};

Room.prototype.paint = function () {
    this.isPainted = true;
};

module.exports = Room;