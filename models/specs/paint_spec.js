const assert = require('assert');
const PaintCan = require('../paint.js')

describe('PaintCan', function() {

    let paintCan;

    beforeEach(function() {
        paintCan = new PaintCan(20);
        paintEmpty = new PaintCan(0);
    });

    it('should have a number of litres of paint', function() {
        const litres = 20;
        assert.strictEqual(paintCan.litresOfPaint, litres);
    });

    it('should be able to check if it is empty', function() {
        const checkEmpty = paintEmpty.isEmpty();
        assert.strictEqual(checkEmpty, true)
    });

    it('should be able to empty itself of paint', function() {
        paintCan.emptyItself();
        const checkEmpty = true;
        assert.strictEqual(paintCan.isEmpty(), checkEmpty);
    });
})
