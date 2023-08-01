const chai = require('chai')
var expect = chai.expect
let endpoint = 'https://dummyjson.com/products'

const CartService = require('../app/AbstractTestMartAppFeatures');
const { it } = require('node:test');
const a = new CartService()

it('Get all Products', () => {
    return a.getAllProducts(endpoint).then(data => {
        expect(data.status).to.equal(200)
    });
});

it('Search Products', () => {
    return a.searchForProducts(endpoint, "Apple").then(data => {
        console.log("Here is the search result - ", data.data)
        expect(data.data.products).is.not.empty
    })
    .catch((error) => {
        console.error("No products are returned for search term - ", error);
      })
});

it('Get Product Titles By Worst Rating', () => {
    return a.getProductTitlesByWorseRating(endpoint, "4.1")
});
