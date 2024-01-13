export type User = {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: string | Date | null;
  image: string | null;
} | null;
