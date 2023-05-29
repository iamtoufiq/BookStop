// import { Response } from "miragejs";

// /**
//  * All the routes related to Product are present here.
//  * These are Publicly accessible routes.
//  * */

// /**
//  * This handler handles gets all products in the db.
//  * send GET Request at /api/products
//  * */

// export const getAllProductsHandler = function () {
//   return new Response(200, {}, { products: this.db.products });
// };

// /**
//  * This handler handles gets all products in the db.
//  * send GET Request at /api/user/products/:productId
//  * */

// export const getProductHandler = function (schema, request) {
//   const productId = request.params.productId;
//   try {
//     const product = schema.products.findBy({ _id: productId });
//     return new Response(200, {}, { product });
//   } catch (error) {
//     return new Response(
//       500,
//       {},
//       {
//         error,
//       }
//     );
//   }
// };

import { Response } from "miragejs";

/**
 * This handler handles getting a product by ID from the db.
 * Send GET Request at /api/products/:productId
 */
export const getProductHandler = function (schema, request) {
  const productId = request.params.productId;
  try {
    const product = schema.products.findBy({ id: productId }); // Assuming the ID field is named "id"
    return new Response(200, {}, { product });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
export const getAllProductsHandler = function () {
  return new Response(200, {}, { products: this.db.products });
};
