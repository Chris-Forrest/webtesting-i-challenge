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
    it("enhancement fails", () => {
        expect(enhancer.fail({
            name: "rapier",
            enhancement: 14,
            durability: 100,
        })).toEqual({
            name: "rapier",
            enhancement: 14,
            durability: 95,
        })
        expect(enhancer.fail({
            name: "broadsword",
            enhancement: 15,
            durability: 100,
        })).toEqual({
            name: "broadsword",
            enhancement: 15,
            durability: 90,
        })
        expect(enhancer.fail({
            name: "gladius",
            enhancement: 16,
            durability: 100,
        })).toEqual({
            name: "gladius",
            enhancement: 16,
            durability: 90,
        })
        expect(enhancer.fail({
            name: "halibeard",
            enhancement: 17,
            durability: 100,
        })).toEqual({
            name: "halibeard",
            enhancement: 16,
            durability: 100,
        })
    })
    it("gets the modified name", ()=> {
        expect(enhancer.get({
            name:"gladius",
            enhancement: 16,
            durability: 100,
        })).toEqual({
            name:"[+16] gladius",
            enhancement:16,
            durability:100,
        })
        expect(enhancer.get({
            name:"kitana",
            enhancement: 20,
            durability: 100,
        })).toEqual({
            name:"[+20] kitana",
            enhancement:20,
            durability:100,
        })
        expect(enhancer.get({
            name:"sting",
            enhancement: 1,
            durability: 100,
        })).toEqual({
            name:"[+1] sting",
            enhancement:1,
            durability:100,
        })
        expect(() => enhancer.get({
            name:"butterknife",
            enhancement: 0,
            durability: 100,
        })).toThrow()
    })
})