const assert = require('assert');
const Room = require('../room.js');

describe('Room', function (){

    let room;

    beforeEach(function(){
        room = new Room(30);
    });

    it('should have an area in square meters', function() {
        const inSquareMeters = 30;
        assert.strictEqual(room.squareMeters, inSquareMeters);
    });
})