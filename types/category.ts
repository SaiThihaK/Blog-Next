import { type Post } from './posts';

export interface Category {
  id: string;
  createdAt: string;
  category: string;
  blog?: Post[];
}

export interface GetAllCateogriesResponse {
  message: string;
  data: Category[];
  success: Boolean;
}
