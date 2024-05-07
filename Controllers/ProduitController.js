import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * Retrieves all products from the database.
 *
 * @returns {Promise<Array>} An array of product objects.
 */
const getAllProducts = async () => {
  console.log("Fetching all products");
  const products = await prisma.product.findMany();
  console.log(products);
  return products;
};

/**
 * Retrieves a product by their unique ID.
 *
 * @param {string} id - The ID of the product to fetch.
 * @returns {Promise<Object|null>} The product object if found, or null if not found.
 */
const getProductById = async (id_product) => {
  console.log(`Fetching product with id: ${id_product}`);
  const product = await prisma.product.findUnique({
    where: { id_product },
  });
  return product;
};

/**
 * Creates a new product in the database.
 *
 * @param {Object} productData - The data for the new product.
 * @returns {Promise<Object>} The newly created product object.
 */
const addProduct = async (productData) => {
  console.log(`Adding product: ${JSON.stringify(productData)}`);
  const newProduct = await prisma.product.create({
    data: productData,
  });
  return newProduct;
};

/**
 * Updates a product in the database.
 *
 * @param {string} id - The ID of the product to update.
 * @param {Object} productData - The data to update the product with.
 * @returns {Promise<Object>} The updated product object.
 */
const updateProduct = async (id_product, productData) => {
  console.log(`Updating product with id: ${id_product}`);
  const updatedProduct = await prisma.product.update({
    where: { id_product },
    data: productData,
  });
  return updatedProduct;
};

/**
 * Deletes a product from the database.
 *
 * @param {string} id - The ID of the product to delete.
 * @returns {Promise<Object>} The deleted product object.
 */
const deleteProduct = async (id_product) => {
  console.log(`Deleting product with id: ${id_product}`);
  const deletedProduct = await prisma.product.delete({
    where: { id_product },
  });
  return deletedProduct;
};

export {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
