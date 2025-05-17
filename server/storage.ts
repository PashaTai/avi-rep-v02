import { users, type User, type InsertUser, type ContactRequest, type InsertContactRequest } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactRequest(contactRequest: InsertContactRequest & { createdAt: string }): Promise<ContactRequest>;
  getContactRequests(): Promise<ContactRequest[]>;
  markContactRequestAsProcessed(id: number): Promise<ContactRequest | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactRequests: Map<number, ContactRequest>;
  currentUserId: number;
  currentContactRequestId: number;

  constructor() {
    this.users = new Map();
    this.contactRequests = new Map();
    this.currentUserId = 1;
    this.currentContactRequestId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactRequest(insertContactRequest: InsertContactRequest & { createdAt: string }): Promise<ContactRequest> {
    const id = this.currentContactRequestId++;
    const contactRequest: ContactRequest = { 
      id,
      name: insertContactRequest.name,
      phone: insertContactRequest.phone || null,
      email: insertContactRequest.email || null,
      company: insertContactRequest.company || null,
      platforms: insertContactRequest.platforms || null,
      platformLink: insertContactRequest.platformLink || null,
      rating: insertContactRequest.rating,
      positives: insertContactRequest.positives || null,
      negatives: insertContactRequest.negatives || null,
      avoid: insertContactRequest.avoid || null,
      additional: insertContactRequest.additional || null,
      createdAt: insertContactRequest.createdAt,
      isProcessed: false
    };
    this.contactRequests.set(id, contactRequest);
    return contactRequest;
  }

  async getContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contactRequests.values());
  }

  async markContactRequestAsProcessed(id: number): Promise<ContactRequest | undefined> {
    const contactRequest = this.contactRequests.get(id);
    if (contactRequest) {
      const updatedRequest = { ...contactRequest, isProcessed: true };
      this.contactRequests.set(id, updatedRequest);
      return updatedRequest;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
