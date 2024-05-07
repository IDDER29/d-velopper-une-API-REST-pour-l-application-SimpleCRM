import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * Retrieves all invoices from the database.
 *
 * @returns {Promise<Array>} An array of invoice objects.
 */
const getAllInvoices = async () => {
  console.log("Fetching all invoices");
  const invoices = await prisma.invoice.findMany();
  console.log(invoices);
  return invoices;
};

/**
 * Retrieves an invoice by their unique ID.
 *
 * @param {number} id - The ID of the invoice to fetch.
 * @returns {Promise<Object|null>} The invoice object if found, or null if not found.
 */
const getInvoiceById = async (id_invoice) => {
  console.log(`Fetching invoice with id: ${id_invoice}`);
  const invoice = await prisma.invoice.findUnique({
    where: { id_invoice },
  });
  return invoice;
};

/**
 * Creates a new invoice in the database.
 *
 * @param {Object} invoiceData - The data for the new invoice.
 * @returns {Promise<Object>} The newly created invoice object.
 */
const addInvoice = async (invoiceData) => {
  console.log(`Adding invoice: ${JSON.stringify(invoiceData)}`);
  const newInvoice = await prisma.invoice.create({
    data: {
      ...invoiceData,
    },
  });
  return newInvoice;
};

/**
 * Updates an invoice in the database.
 *
 * @param {number} id - The ID of the invoice to update.
 * @param {Object} invoiceData - The data to update the invoice with.
 * @returns {Promise<Object>} The updated invoice object.
 */
const updateInvoice = async (id_invoice, invoiceData) => {
  console.log(`Updating invoice with id: ${id_invoice}`);
  const updatedInvoice = await prisma.invoice.update({
    where: { id_invoice },
    data: invoiceData,
  });
  return updatedInvoice;
};

/**
 * Deletes an invoice from the database.
 *
 * @param {number} id - The ID of the invoice to delete.
 * @returns {Promise<Object>} The deleted invoice object.
 */
const deleteInvoice = async (id_invoice) => {
  console.log(`Deleting invoice with id: ${id_invoice}`);
  const deletedInvoice = await prisma.invoice.delete({
    where: { id_invoice },
  });
  return deletedInvoice;
};

export {
  getAllInvoices,
  getInvoiceById,
  addInvoice,
  updateInvoice,
  deleteInvoice,
};
