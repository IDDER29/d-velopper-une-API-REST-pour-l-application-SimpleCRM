import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * Retrieves all companys from the database.
 *
 * @returns {Promise<Array>} An array of company objects.
 */
const getAllCompanys = async () => {
  console.log("Fetching all companys");
  const companys = await prisma.company.findMany();
  console.log(companys);
  return companys;
};

/**
 * Retrieves a company by their unique ID.
 *
 * @param {number} id - The ID of the company to fetch.
 * @returns {Promise<Object|null>} The company object if found, or null if not found.
 */
const getCompanyById = async (id_company) => {
  console.log(`Fetching company with id: ${id_company}`);
  const company = await prisma.company.findUnique({
    where: { id_company },
  });
  return company;
};

/**
 * Creates a new company in the database.
 *
 * @param {Object} companyData - The data for the new company.
 * @returns {Promise<Object>} The newly created company object.
 */
const addCompany = async (companyData) => {
  console.log(`Adding company: ${JSON.stringify(companyData)}`);
  const newcompany = await prisma.company.create({
    data: {
      ...companyData,
    },
  });
  return newcompany;
};

/**
 * Updates a company in the database.
 *
 * @param {number} id - The ID of the company to update.
 * @param {Object} companyData - The data to update the company with.
 * @returns {Promise<Object>} The updated company object.
 */
const updateCompany = async (id_company, companyData) => {
  console.log(`Updating company with id: ${id_company}`);
  const updatedcompany = await prisma.company.update({
    where: { id_company },
    data: companyData,
  });
  return updatedcompany;
};

/**
 * Deletes a company from the database.
 *
 * @param {number} id - The ID of the company to delete.
 * @returns {Promise<Object>} The deleted company object.
 */
const deleteCompany = async (id_company) => {
  console.log(`Deleting company with id: ${id_company}`);
  const deletedcompany = await prisma.company.delete({
    where: { id_company },
  });
  return deletedcompany;
};

export {
  getAllCompanys,
  getCompanyById,
  addCompany,
  updateCompany,
  deleteCompany,
};
