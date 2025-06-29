import { z } from "zod";

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const formSchema = z.object({
  email: z.string().refine((email) => isValidEmail(email), {
    message: "Invalid email address",
  }),
  message: z.string().min(20, {
    message: "Message must be at least 20 characters",
  }),
});
