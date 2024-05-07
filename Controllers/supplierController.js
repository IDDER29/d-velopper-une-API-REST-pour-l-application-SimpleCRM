import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * Retrieves all suppliers from the database.
 *
 * @returns {Promise<Array>} An array of supplier objects.
 */
const getAllSuppliers = async () => {
  console.log("Fetching all suppliers");
  const suppliers = await prisma.supplier.findMany();
  console.log(suppliers);
  return suppliers;
};

/**
 * Retrieves a supplier by their unique ID.
 *
 * @param {string} id - The ID of the supplier to fetch.
 * @returns {Promise<Object|null>} The supplier object if found, or null if not found.
 */
const getSupplierById = async (id_supplier) => {
  console.log(`Fetching supplier with id: ${id_supplier}`);
  const supplier = await prisma.supplier.findUnique({
    where: { id_supplier },
  });
  return supplier;
};

/**
 * Creates a new supplier in the database.
 *
 * @param {Object} supplierData - The data for the new supplier.
 * @returns {Promise<Object>} The newly created supplier object.
 */
const addSupplier = async (supplierData) => {
  console.log(`Adding supplier: ${JSON.stringify(supplierData)}`);
  const newSupplier = await prisma.supplier.create({
    data: supplierData,
  });
  return newSupplier;
};

/**
 * Updates a supplier in the database.
 *
 * @param {string} id - The ID of the supplier to update.
 * @param {Object} supplierData - The data to update the supplier with.
 * @returns {Promise<Object>} The updated supplier object.
 */
const updateSupplier = async (id_supplier, supplierData) => {
  console.log(`Updating supplier with id: ${id_supplier}`);
  const updatedSupplier = await prisma.supplier.update({
    where: { id_supplier },
    data: supplierData,
  });
  return updatedSupplier;
};

/**
 * Deletes a supplier from the database.
 *
 * @param {string} id - The ID of the supplier to delete.
 * @returns {Promise<Object>} The deleted supplier object.
 */
const deleteSupplier = async (id_supplier) => {
  console.log(`Deleting supplier with id: ${id_supplier}`);
  const deletedSupplier = await prisma.supplier.delete({
    where: { id_supplier },
  });
  return deletedSupplier;
};

export {
  getAllSuppliers,
  getSupplierById,
  addSupplier,
  updateSupplier,
  deleteSupplier,
};
