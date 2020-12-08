const assert = require('assert');
const Decorator = require('../decorator.js')
const PaintCan = require('../paint.js')

describe('Decorator', function (){

    let decorator;
    let blue;
    let hotPink;

    beforeEach(function(){
        decorator = new Decorator();
        blue = new PaintCan(10);
        hotPink = new PaintCan(5);
    });

    it("should start with an empty stock of paint", function(){
        const actual = [];
        assert.deepStrictEqual(decorator.paintStock, actual);
    });

    it("should be able to add a can of paint to stock", function(){
        decorator.addPaint(blue);
        const actual = [blue];
        assert.deepStrictEqual(decorator.paintStock, actual);
    });

    it("should be able to calculate total litres of paint it has in stock", function(){
        decorator.addPaint(blue);
        decorator.addPaint(hotPink);
        const actual = decorator.calculateLitres();
        assert.strictEqual(actual, 15);
    });
})