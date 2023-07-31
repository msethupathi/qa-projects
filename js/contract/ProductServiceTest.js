const chai = require('chai')
var expect = chai.expect
// import { assert, expect } from 'chai';
let endpoint = 'https://dummyjson.com/products'

const CartService = require('../app/AbstractTestMartAppFeatures');
// import {CartService} from '../app/AbstractTestMartAppFeatures.js'
// const {CS} = CartService
const { it } = require('node:test');
const a = new CartService()

it('Get all Products', () => {
    return a.getAllProducts(endpoint).then(data => {
        expect(data.status).to.equal(200)
        console.log(data.data.products)
    });
});

it('Search Products', () => {
    return a.searchForProducts(endpoint).then(data => {
        console.log(data.data)
    });
});
