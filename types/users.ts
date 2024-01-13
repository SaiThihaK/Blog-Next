export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified: string | Date | null;
  image: string | null;
} | null;
