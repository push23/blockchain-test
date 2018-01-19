const expect = require("chai").expect
const tempStorage = require("../../src/services/tempStorage")

const mockTempData = ['str1','str2','str3','str4','str5']

describe("Temp Storage Service", function () {
    
    describe("filling storage", function () {
    
        before(function(done) {
            tempStorage.addItem(mockTempData[0]);
            tempStorage.addItem(mockTempData[1]);
            tempStorage.addItem(mockTempData[2]);
            done();
        });
        
        after(function(done) {
            tempStorage.clear();
            done();
        });
        
        it("should return full storage data", function () {
            expect(tempStorage.getAllItems()).to.deep.equal([mockTempData[0], mockTempData[1], mockTempData[2]]);
        });
    
        it("should return correct length", function () {
            expect(tempStorage.getLength()).to.equal(3);
        });
        
    });
    
    describe("empty storage", function () {
        
        it("should return zero as a storage length if it is empty", function () {
            expect(tempStorage.getLength()).to.equal(0);
        });
    });
});