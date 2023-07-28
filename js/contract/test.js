const chai = require('chai')
var expect = chai.expect
let endpoint = 'https://dummyjson.com/carts'

const CartService = require('../app/AbstractTestMartAppFeatures.js');
const { it } = require('node:test');
const a = new CartService()

// it('Get all carts of Test Mart', () => {
//     return a.getAllCarts(endpoint).then(data => {
//         expect(data.status).to.equal(200)
//         console.log(data.data.carts[0])
//     });
// });

// it('Get Cart ID', () => {
//     return a.getCart(endpoint, '1').then(data => {
//         expect(data.status).to.equal(200)
//         console.log(data.data)
//     })
// });

// it('Get User Carts', () => {
//     return a.getUserCarts(endpoint, '97').then(data => {
//         expect(data.status).to.equal(200)
//         console.log(data.data)
//     });
// })

// it('Get Cart with Highest Total', () => {
//     return a.getCartWithHighestTotal(endpoint).then(data => {
//         console.log("Cart with Highest Total - " + data)
//     });
// })

// it('Get Cart with Lowest Total', () => {
//     return a.getCartWithLowestTotal(endpoint).then(data => {
//         console.log("Cart with Lowest Total - " + data)
//     });
// })

it('Add Images to Product in the Users Cart', () => {
    return a.addProductImagesToUserCart(endpoint, '97').then(data => {
        console.log("Success")
    });
})