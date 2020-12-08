const assert = require('assert');
const Decorator = require('../decorator.js')
const PaintCan = require('../paint.js')

describe('Decorator', function (){

    let decorator;
    let blue;

    beforeEach(function(){
        decorator = new Decorator();
        blue = new PaintCan(10);
    });

    it("should start with an empty stock of paint", function(){
        const actual = [];
        assert.deepStrictEqual(decorator.paintStock, actual);
    });

    it("should be able to add a can of paint to stock", function(){
        decorator.addPaint(blue);
        const actual = [blue];
        assert.deepStrictEqual(decorator.paintStock, actual);
    })
})