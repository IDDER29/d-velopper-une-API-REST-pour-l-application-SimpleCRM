import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * Retrieves all clients from the database.
 *
 * @returns {Promise<Array>} An array of client objects.
 */
const getAllClients = async () => {
  console.log("Fetching all clients");
  const clients = await prisma.client.findMany();

  return clients;
};

/**
 * Retrieves a client by their unique ID.
 *
 * @param {number} id - The ID of the client to fetch.
 * @returns {Promise<Object|null>} The client object if found, or null if not found.
 */
const getClientById = async (id) => {
  console.log(`Fetching client with id: ${id}`);
  const client = await prisma.client.findUnique({
    where: { id_client: id },
  });
  return client;
};

/**
 * Creates a new client in the database.
 *
 * @param {Object} clientData - The data for the new client.
 * @returns {Promise<Object>} The newly created client object.
 */
const addClient = async (clientData) => {
  console.log(`Adding client: ${JSON.stringify(clientData)}`);
  const newClient = await prisma.client.create({
    data: clientData,
  });
  return newClient;
};

/**
 * Updates a client in the database.
 *
 * @param {number} id - The ID of the client to update.
 * @param {Object} clientData - The data to update the client with.
 * @returns {Promise<Object>} The updated client object.
 */
const updateClient = async (id_client, clientData) => {
  console.log(`Updating client with id: ${id_client}`);
  const updatedClient = await prisma.client.update({
    where: { id_client },
    data: clientData,
  });
  return updatedClient;
};

/**
 * Deletes a client from the database.
 *
 * @param {number} id - The ID of the client to delete.
 * @returns {Promise<Object>} The deleted client object.
 */
const deleteClient = async (id_client) => {
  console.log(`Deleting client with id: ${id_client}`);
  const deletedClient = await prisma.client.delete({
    where: { id_client },
  });
  return deletedClient;
};

export { getAllClients, getClientById, addClient, updateClient, deleteClient };
