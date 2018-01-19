const expect = require("chai").expect
const generateHash = require("../../src/utils/generateHash")

describe("Hash Generate Utility", function () {
    it("Should generate correct hash from 'Abrakadabra'", function () {
        const generatedHash = generateHash('Abrakadabra');
        
        expect(generatedHash).to.equal("02cb054aee07ac7494b4e50fecdf72c7a01b876594f415f15ad8aecdaab58318");
    });
});