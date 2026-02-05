import config from "../../config/config.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    // No try-catch needed here unless you want to handle the error specifically.
    // If it fails, the error will bubble up to your Component anyway.

    // FIX: Swapped 'name' and 'email' positions
    // Appwrite expects: userId, email, password, name
    const userAccount = await this.account.create(
      ID.unique(),
      email,
      password,
      name,
    );

    if (userAccount) {
      return this.login({ email, password });
    } else {
      return userAccount;
    }
  }

  async login({ email, password }) {
    // No try-catch needed here
    return await this.account.createEmailPasswordSession(email, password);
  }

  async getCurrentUser() {
    // KEEP try-catch here. This one IS necessary because you return null
    // instead of letting the app crash if the user isn't logged in.
    try {
      return await this.account.get();
    } catch (error) {
      console.log(
        "Appwrite service :: getCurrentUser :: User is not logged in",
      );
      return null;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
