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

export const deleteStorage = async (storeName) => {
  try {
    await deleteDB(storeName);
  } catch (error) {
    console.log(error);
  }
};

export const checkStorage = async (storeName) => {
  try {
    const db = await openDB(storeName, 1);
    console.log(db);
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);

    return store.get(storeName);
  } catch (error) {
    return error;
  }
};

export const saveToStorage = async (storeName, record) => {
  try {
    const db = await openDB(storeName, 1);
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);

    store.put(record, storeName);

    return tx.complete;
  } catch (error) {
    return error;
  }
};
