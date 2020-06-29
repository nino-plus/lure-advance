import * as admin from 'firebase-admin';

const db = admin.firestore();

export function markEventTried(eventId: string) {
  const documentRef = db.collection('functionEvents').doc(eventId);
  return documentRef.set({ tried: true });
}

const leaseTime = 60 * 1000;

export function shouldEventRun(eventId: string) {
  const documentRef = db.collection('functionEvents').doc(eventId);
  return db.runTransaction((transaction) => {
    return transaction.get(documentRef).then((doc) => {
      const data = doc.data();
      if (doc.exists && data && data.tried) {
        return false;
      }
      if (doc.exists && data && new Date() < data.lease) {
        return Promise.reject('Lease already taken, try later.');
      }
      transaction.set(documentRef, {
        lease: new Date(new Date().getTime() + leaseTime),
      });
      return true;
    });
  });
}

export function deleteCollection(
  collectionPath: string,
  batchSize: number = 450
) {
  const collectionRef = db.collection(collectionPath);
  const query = collectionRef.limit(batchSize);

  return new Promise((resolve, reject) =>
    deleteQueryBatch(query, batchSize, resolve, reject)
  );
}

function deleteQueryBatch(
  query: FirebaseFirestore.Query<FirebaseFirestore.DocumentData>,
  batchSize: number,
  resolve: any,
  reject: any
) {
  query
    .get()
    .then((snapshot) => {
      // When there are no documents left, we are done
      if (snapshot.size == 0) {
        console.log('Collection is Empty');
        return 0;
      }

      // Delete documents in a batch
      const batch = db.batch();
      snapshot.docs.forEach((doc) => batch.delete(doc.ref));

      return batch.commit().then(() => snapshot.size);
    })
    .then((numDeleted) => {
      if (numDeleted === 0) {
        resolve();
        console.log('Resolved!');
        return;
      }

      // Recurse on the next process tick, to avoid
      // exploding the stack.
      process.nextTick(() =>
        deleteQueryBatch(query, batchSize, resolve, reject)
      );
    })
    .catch(reject);
}