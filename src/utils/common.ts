import DOMPurify from "dompurify";

// Function to sanitize input
export const sanitizeInput = (input: string) => {
  return DOMPurify.sanitize(input);
};
