const DB_NAME = "culturear-offline";
const DB_VERSION = 1;
const STORE_NAME = "monuments";

function openDatabase() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB is not available"));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error || new Error("IndexedDB could not be opened"));
    request.onupgradeneeded = () => {
      request.result.createObjectStore(STORE_NAME, { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
  });
}

export async function saveMonument(monument) {
  const database = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, "readwrite");
    transaction.objectStore(STORE_NAME).put(monument);
    transaction.onerror = () => reject(transaction.error || new Error("Monument could not be saved"));
    transaction.oncomplete = () => {
      database.close();
      resolve(monument);
    };
  });
}

export async function getMonument(id) {
  const database = await openDatabase();

  return new Promise((resolve, reject) => {
    const request = database.transaction(STORE_NAME, "readonly")
      .objectStore(STORE_NAME)
      .get(id);
    request.onerror = () => reject(request.error || new Error("Monument could not be loaded"));
    request.onsuccess = () => {
      database.close();
      resolve(request.result || null);
    };
  });
}
