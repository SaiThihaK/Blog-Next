import { User } from '@/types/users';

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
  createdAt: string;
  desc: TrustedHTML | string;
  feature: boolean;
  id: string;
  image: string;
  title: string;
  topPost: boolean;
  userEmail: string;
}
