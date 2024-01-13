import { User } from "@/types/users";

export interface Post {
  id: string;
  title: string;
  desc: string;
  img: string;
  feature: boolean;
  topPost: boolean;
  category: string;
  authorImage: string;
  authorName: string;
  publishDate: string;
  createdAt: string;
  user: User;
}
