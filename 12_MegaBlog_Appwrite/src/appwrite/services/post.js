import config from "../../config/config.js";
import { Client, Databases, Query, Storage } from "appwrite";

export class PostService {
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

  async createPost({ title, slug, content, featuredImage, status, authorId }) {
    return await this.databases.createDocument(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
      slug,
      {
        title,
        content,
        featuredImage,
        status,
        authorId,
      },
    );
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    return await this.databases.updateDocument(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
      slug,
      {
        title,
        content,
        featuredImage,
        status,
      },
    );
  }

  async deletePost(slug) {
    await this.databases.deleteDocument(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
      slug,
    );
    return true;
  }

  async getSinglePost(slug) {
    return await this.databases.getDocument(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
      slug,
    );
  }

  async getAllPosts(queries = [Query.equal("status", "published")]) {
    return await this.databases.listDocuments(
      config.appwriteDatabaseId,
      config.appwriteCollectionId,
      queries,
    );
  }
}

const postService = new PostService();

export default postService;
