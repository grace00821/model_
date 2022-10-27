import { deleteDB, openDB } from "idb";

export function createDatabase() {
  return openDB("LocalDatabase", 1, {
    upgrade(db) {
      db.createObjectStore("user");
      db.createObjectStore("conversation");
      db.createObjectStore("log");
    },
  });
}

export async function getDatabase(databaseName, objectName, key) {
  try {
    const db = await openDB(databaseName, 1);
    const result = await db.get(objectName, key);
    return new Promise((resolve) => {
      resolve(result);
    });
  } catch (error) {
    console.log(error);
  }
}

export async function putDatabase(databaseName, objectName, value, key) {
  try {
    const db = await openDB(databaseName, 1);
    const result = await db.put(objectName, value, key);
    return new Promise((resolve) => {
      resolve(result);
    });
  } catch (error) {
    console.log("an error occur: ", error);
  }
}

export const deleteStorage = async (storeName) => {
  try {
    await deleteDB(storeName);
  } catch (error) {
    console.log(error);
  }
};
