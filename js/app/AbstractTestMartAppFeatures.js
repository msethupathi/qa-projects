// Note: Convert this class to concrete class and add implementation (missing body) to all functions. You will remove the word
// `Abstract` from everywhere. This class is only kept `abstract` for the sake of interview exercise.
// abstract class AbstractTestMartAppFeatures {
//   /**
//    * Prints the titles of all products that have a rating less than or equal to the provided criteria.
//    * @param rating The rating threshold.
//    */
//   abstract getProductTitlesByWorseRating(rating: number): void;

//   /**
//    * Returns the cart with the highest total value.
//    * @returns The cart with the highest total value.
//    */
//   abstract getCartWithHighestTotal(): Cart;

//   /**
//    * Returns the cart with the lowest total value.
//    * @returns The cart with the lowest total value.
//    */
//   abstract getCartWithLowestTotal(): Cart;

//   /**
//    * Enriches the product information in a user's cart by adding product images.
//    * The current product information in a cart has limited fields.
//    * This method adds the `images` field for each product in a given user's cart.
//    * Note: This method only applies to the first element from the `carts[]` JSON response.
//    * @param userId The ID of the user whose cart's product information will be enriched.
//    * @returns A list of products with enriched information in the user's cart.
//    */
//   abstract addProductImagesToUserCart(userId: number): Product[];
// }

const axios = require('axios')
let response, length;

module.exports = class CartService {
  ep;
  constructor(ep) {
    this.ep = ep;
  }
  /** Get All Carts of TestMart */
  async getAllCarts(ep) {
    console.log("Returning all carts")
    response = await axios.get(ep)
    length = Object.keys(response.data.carts).length
    console.log("Total cart length - " + length)
    // console.log(response.data)
    return (response)
  }

  /** Get Singe Cart */
  async getCart(ep, cartId) {
    console.log("Returning Cart Id - " + cartId)
    response = await axios.get(ep + "/" + `${cartId}`)
    console.log(response.data)
    return (response)
  }

  /** Get carts of a User */
  async getUserCarts(ep, userId) {
    console.log("Returning Cart for User Id - " + userId)
    response = await axios.get(ep + "/user/" + `${userId}`)
    // console.log(response.data.carts)
    return (response)
  }

  /**
 * Returns the cart with the highest total value.
 * @returns The cart with the highest total value.
 */
  async getCartWithHighestTotal(ep) {
    response = await this.getAllCarts(ep)
    let cartTotals = [];
    for (let i = 0; i < length; i++) {
      cartTotals.push(response.data.carts[i].total)
    }
    console.log(cartTotals)
    let maxVal = Math.max(...cartTotals)
    return maxVal
  }

  /**
* Returns the cart with the highest total value.
* @returns The cart with the highest total value.
*/
  async getCartWithLowestTotal(ep) {
    response = await this.getAllCarts(ep)
    let cartTotals = [];
    for (let i = 0; i < length; i++) {
      cartTotals.push(response.data.carts[i].total)
    }
    console.log(cartTotals)
    let minVal = Math.min(...cartTotals)
    return minVal
  }

  /**
 * Enriches the product information in a user's cart by adding product images.
 * The current product information in a cart has limited fields.
 * This method adds the `images` field for each product in a given user's cart.
 * Note: This method only applies to the first element from the `carts[]` JSON response.
 * @param userId The ID of the user whose cart's product information will be enriched.
 * @returns A list of products with enriched information in the user's cart.
 */
  async addProductImagesToUserCart(ep, userId) {
    response = await this.getUserCarts(ep, userId)
    let productCt = Object.keys(response.data.carts[0].products).length
    console.log("No. of products in User's 1st Cart - " + productCt)
    console.log("Cart before NO Images")
    console.log(response.data.carts[0].products) //printing all the products on the 1st cart - BEFORE IMAGES
    console.log()
    for (let i = 0; i < productCt; i++) {
      response.data.carts[0].products[i].image = 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
    }
    console.log("Cart After Images")
    console.log(response.data.carts[0].products) //printing all the products on the 1st cart - AFTER ADDING IMAGES
    return(response.data.carts[0].products)
  }
}