"use client";
import {
  FirebaseStorage,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";
import app from "./app";
import { uuidv4 } from "@/utils/uuid";

const storage = getStorage(app);

export default storage;

export class StorageService {
  constructor(private storage: FirebaseStorage) {}

  async uploadImageByUrl(options: { url: string; fileName?: string }) {
    const imgBlob: Blob = await new Promise((rs, rj) => {
      const img = new Image();
      img.src = options.url;
      img.crossOrigin = "anonymous";

      img.onload = function () {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        ctx!.drawImage(img, 0, 0);

        canvas.toBlob((blob) => {
          if (blob) {
            rs(blob);
          } else {
            rj(new Error("Failed to convert image to blob"));
          }
        });
      };
    });

    const uploadResults = await uploadBytes(
      ref(this.storage, options.fileName || `${uuidv4()}.${imgBlob.type}`),
      imgBlob
    );

    return {
      result: uploadResults,
      url: await getDownloadURL(uploadResults.ref),
    };
  }
}

export const storageService = new StorageService(storage);
