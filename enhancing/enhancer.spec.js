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
        expect(() => enhancer.repair({
            name: "viking ax",
            enhancement: 18,
            durability: 100,
        })).toThrow()
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
        expect(() => enhancer.success({
            name:"kitana",
            enhancement: 20,
            durability: 100,
        })).toThrow()

    })
})