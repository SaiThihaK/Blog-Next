import { User } from '@/types/users';
import { CallTracker } from 'assert';
import { Category } from './category';

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

export interface GetAllBlogPostsResponse {
  message: string;
  total: number;
  data: BlogPost[];
  success: boolean;
}

export interface GetSingleBlogPostResponse {
  message: string;
  data: BlogPost;
  success: boolean;
}

export interface BlogPost {
  categoryId: string;
  category: Category;
  createdAt: string;
  desc: TrustedHTML | string;
  feature: boolean;
  id: string;
  image: string;
  title: string;
  topPost: boolean;
  userEmail: string;
}
