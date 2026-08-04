import { z } from "zod";

export const contactSchema = z.object({
  fullname: z.string().trim().min(2, "Enter your full name"),
  email: z.email("Enter a valid email address"),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters"),
  // Honeypot: left blank by real visitors, filled in by bots. Checked (not
  // validated) in the submit handler so bots get a silent fake-success.
  company: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
