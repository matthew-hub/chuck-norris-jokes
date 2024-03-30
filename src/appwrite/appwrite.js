import { Client, Account, Databases, Query, Permission, ID, Role } from "appwrite";
const client = new Client();

const databases = new Databases(client);

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(import.meta.env.VITE_PROJECT_ID);

const account = new Account(client);

const createAnonymousSession = async () => {
  console.log("[CREATE ANONYMOUS SESSION]");
  return await account.createAnonymousSession();
};

const getAccount = async () => {
  return await account.get();
};

const getAccountPrefs = async () => {
  return await account.getPrefs();
};

const checkJokeDB = async (id) => {
  return await databases.listDocuments(import.meta.env.VITE_CHUCK_DB_ID, import.meta.env.VITE_JOKE_COLLECTION_ID, [Query.equal("id", [id])]);
};

const getDoc = async (id) => {
  return await databases.getDocument(import.meta.env.VITE_CHUCK_DB_ID, import.meta.env.VITE_JOKE_COLLECTION_ID, id);
};

const createDoc = async (data) => {
  return await databases.createDocument(import.meta.env.VITE_CHUCK_DB_ID, import.meta.env.VITE_JOKE_COLLECTION_ID, ID.unique(), data);
};

const updateDoc = async (id, data) => {
  return await databases.updateDocument(import.meta.env.VITE_CHUCK_DB_ID, import.meta.env.VITE_JOKE_COLLECTION_ID, id, data);
};

const addUserToDataBase = async (user) => {
  return await databases.createDocument(
    import.meta.env.VITE_CHUCK_DB_ID,
    import.meta.env.VITE_USER_COLLECTION_ID,
    user.userId,
    { liked: [], read: [] },
    [Permission.read(Role.user(user.userId)), Permission.update(Role.user(user.userId))]
  );
};

const updateUserDoc = async (id, data) => {
  return await databases.updateDocument(import.meta.env.VITE_CHUCK_DB_ID, import.meta.env.VITE_USER_COLLECTION_ID, id, data);
};

const getUserDoc = async (id) => {
  return databases.getDocument(import.meta.env.VITE_CHUCK_DB_ID, import.meta.env.VITE_USER_COLLECTION_ID, id);
};

export {
  createDoc,
  getDoc,
  getUserDoc,
  getAccount,
  getAccountPrefs,
  updateDoc,
  updateUserDoc,
  checkJokeDB,
  addUserToDataBase,
  createAnonymousSession,
};
