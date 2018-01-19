const expect = require("chai").expect
const blockStorage = require("../../src/services/blockStorage")

const mockBlockData = [
    {
        "previous_block_hash": 0,
        "rows": [
            {"AUTHs23ddd11": ""}
        ],
        "timestamp": 222,
        "block_hash": "2350207873539809ff1006ad181233234092i4"
    },
    {
        "previous_block_hash": "2350207873539809ff1006ad181233234092i4",
        "rows": [
            {"AUTHs23ddd11": ""}
        ],
        "timestamp": 111,
        "block_hash": "2111111418195711b7bb10269433"
    },
    {
        "previous_block_hash": "2111111418195711b7bb10269433",
        "rows": [
            {"AUTHs23ddd11": ""}
        ],
        "timestamp": 333,
        "block_hash": "28c3d50207873539809ff1006ad18195711b7bb102693116efe8ef4edc719f13"
    }]

describe("Block Storage Service", function () {
    describe("filling storage", function () {
        before(function (done) {
            blockStorage.addItem(mockBlockData[0])
            blockStorage.addItem(mockBlockData[1])
            blockStorage.addItem(mockBlockData[2])
            done()
        });
        
        after(function (done) {
            blockStorage.clear()
            done()
        });
        
        it("should return last item, if passing parameter 1", function () {
            expect(JSON.stringify(blockStorage.getLastItems(1))).to.equal(JSON.stringify([mockBlockData[2]]))
        });
        
        it("should return last 2 items, if passing parameter 2", function () {
            expect(JSON.stringify(blockStorage.getLastItems(2))).to.equal(JSON.stringify([mockBlockData[0], mockBlockData[2]]))
        });
        
        it("should return correct last item hash", function () {
            expect(blockStorage.getLastItemHash()).to.equal("28c3d50207873539809ff1006ad18195711b7bb102693116efe8ef4edc719f13")
        });
    });
    
    describe("empty storage", function () {
        it("should return zero last item hash if storage is empty", function () {
            expect(blockStorage.getLastItemHash()).to.equal(0)
        });
    });
});