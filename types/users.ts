export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  emailVerified: string | Date | null;
  image: string | null;
};
