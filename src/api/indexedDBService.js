import { openDB } from "idb";

export function createDatabase() {
  return openDB("LocalDatabase", 1, {
    upgrade(db) {
      db.createObjectStore("user");
      db.createObjectStore("conversation");
      db.createObjectStore("log");
      db.createObjectStore("shortcut");
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

export const clearStorage = async (databaseName) => {
  try {
    const db = await openDB(databaseName, 1);
    const result1 = await db.clear("user");
    const result2 = await db.clear("log");
    const result3 = await db.clear("conversation");
    const result4 = await db.clear("shortcut");
    return new Promise((resolve) => {
      resolve(result1, result2, result3, result4);
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllKeys = async (databaseName, objectName) => {
  try {
    const db = await openDB(databaseName, 1);
    const result = await db.getAllKeys(objectName);
    return new Promise((resolve) => {
      resolve(result);
    });
  } catch (error) {
    console.log(error);
  }
};
