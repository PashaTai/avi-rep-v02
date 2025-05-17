import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const data = insertContactRequestSchema.parse(req.body);
      
      // Add current date
      const contactRequest = {
        ...data,
        createdAt: new Date().toISOString(),
      };
      
      // Store the contact request
      const result = await storage.createContactRequest(contactRequest);
      
      // Send success response
      return res.status(201).json({
        message: "Contact request submitted successfully",
        id: result.id
      });
    } catch (error) {
      console.error("Error processing contact request:", error);
      
      // Handle validation errors
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          message: "Validation error",
          errors: validationError.details
        });
      }
      
      // Handle other errors
      return res.status(500).json({
        message: "Internal server error"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
