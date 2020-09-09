const enhancer = require('./enhancer.js');
// test away!
describe("enhancer unit tests",() => {
    it("repairs the item", () => {
        expect(enhancer.repair({
            name: "naginata",
            enhancement: 18,
            durability: 86,
        })).toEqual({
            name: "naginata",
            enhancement: 18,
            durability: 100,
        })
    })
    it("enhances the item success", () => {
        expect(enhancer.success({
            name:"naginata",
            enhancement: 18,
            durability: 100,
        })).toEqual({
            name:"naginata",
            enhancement:19,
            durability: 100,
        })

    })
})