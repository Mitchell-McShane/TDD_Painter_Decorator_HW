const PaintCan = function (litresOfPaint) {
    this.litresOfPaint = litresOfPaint;
};

PaintCan.prototype.isEmpty = function () {
    if (this.litresOfPaint === 0) {
        return true
    }
}
module.exports = PaintCan;