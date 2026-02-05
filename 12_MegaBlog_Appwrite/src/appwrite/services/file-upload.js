import config from "../../config/config.js";
import { ID, Client, Databases, Storage } from "appwrite";

export class FileService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async uploadFile(file) {
    return await this.bucket.createFile(
      config.appwriteBucketId,
      ID.unique(),
      file,
    );
  }

  async deleteFileById(fileId) {
    await this.bucket.deleteFile(config.appwriteBucketId, fileId);
    return true;
  }

  getFilePreview(fileId) {
    return this.bucket.getFileView(config.appwriteBucketId, fileId);
  }
}

const fileService = new FileService();

export default fileService;
