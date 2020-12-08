const Decorator = function() {
    this.paintStock = [];
};

Decorator.prototype.addPaint = function(paintCan){
    this.paintStock.push(paintCan);
};

Decorator.prototype.calculateLitres = function(){
    let total = 0;

    for(const paintCan of this.paintStock) {
        total += paintCan.litresOfPaint;
    }

    return total;
};



module.exports = Decorator;