import {
  CollectionReference,
  DocumentData,
  SetOptions,
  UpdateData,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  getDocs,
  addDoc,
  startAt,
  endAt,
  query,
  QueryConstraint,
  FirestoreDataConverter,
  deleteDoc,
} from "firebase/firestore";
import db from "../firebase/fire-store";
import { uuidv4 } from "@/utils/uuid";

export default class FireStoreRepository<
  T extends DocumentData,
  D extends DocumentData
> {
  private ref: CollectionReference<T, D>;
  constructor(
    private dbName: string,
    converter: FirestoreDataConverter<T, D> | null
  ) {
    this.ref = converter
      ? collection(db, this.dbName).withConverter(converter)
      : (collection(db, this.dbName) as CollectionReference<T, D>);
  }

  async upsert(docId: string, payload: D | Partial<D>) {
    const docRef = doc(this.ref, docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return updateDoc(docRef, payload as UpdateData<D>);
    } else {
      return this.create(payload as D, {
        id: docId,
      });
    }
  }

  async create(
    payload: D,
    options?: {
      id?: string;
    } & SetOptions
  ) {
    const { id, ...rest } = options || {};
    return setDoc(doc(this.ref, id || uuidv4()), payload as any, rest);
  }

  async findById(docId: string) {
    const docRef = doc(this.ref, docId);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    return data;
  }

  async getAll(filters: QueryConstraint[] = []) {
    const _query = [this.ref, ...filters];
    return getDocs(query.apply(null, _query as any));
  }

  async deleteByConditions(filters: QueryConstraint[] = []) {
    const _query = [this.ref, ...filters];
    const docs = await getDocs(query.apply(null, _query as any));

    await Promise.all(
      docs.docs.map(async (document) => {
        const docRef = doc(this.ref, document.id);
        await deleteDoc(docRef);
      })
    );
  }

  // async aggregate(params: {
  //   page: number;
  //   pageSize: number;
  //   orderBy?: string;
  //   queryOptions?: Array<any>;
  // }) {
  //   const { page, pageSize, orderBy } = params;

  //   // const

  //   const _query = [
  //     // this.ref,
  //     // startAt((page <= 1 ? 0 : page - 1) * pageSize),
  //     // startAfter((page <= 1 ? 0 : page - 1) * pageSize),
  //     limit(pageSize),
  //     // ...(page > -1 ? [endAt((page + 1) * pageSize)] : []),
  //   ] as Array<any>;

  //   console.log(
  //     _query,
  //     (page <= 1 ? 0 : page - 1) * pageSize,
  //     (page + 1) * pageSize
  //   );
  //   const query1 = query(
  //     this.ref,
  //     {
  //       type: "or",
  //     }
  //     // where("name", ">=", "San Francisco")
  //   );
  //   const query2 = query(
  //     this.ref,
  //     {
  //       type: "and",
  //     },
  //     ..._query
  //   );

  //   const c = query(query1);

  //   return getDocs(query.apply(null, _query as any));
  //   // const aggregateObj = this.ref
  // }
  // async createPaginationFunction(params: {
  //   page: number;
  //   pageSize: number;
  //   orderBy?: string;
  //   queryOptions?: Array<any>;
  // }) {
  //   const { page, pageSize } = params;
  //   const first = query(this.ref, limit(pageSize));
  //   const documentSnapshots = await getDocs(first);

  //   // const { page, pageSize } = params;
  //   // let cursor = null;
  //   // let previousPageSize = null;
  //   // let previousPage = null;
  //   // if (pageSize !== previousPageSize || !previousPage || previousPage) {
  //   //   cursor = null;
  //   // }
  //   // return () => {};
  // }
}
