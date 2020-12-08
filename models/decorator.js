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

Decorator.prototype.hasEnoughPaint = function(room){
    return this.calculateLitres() >= room.squareMeters;
}



module.exports = Decorator;