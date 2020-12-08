const PaintCan = function (litresOfPaint) {
    this.litresOfPaint = litresOfPaint;
};

PaintCan.prototype.isEmpty = function () {
    if (this.litresOfPaint === 0) {
        return true
    }
};

PaintCan.prototype.emptyItself = function() {
    this.litresOfPaint = 0;
};

module.exports = PaintCan;