import { Blog } from './blog.interface';

export interface APIResponse {
  status: number;
  data: {
    message?: string;
    blogs?: Blog[];
    blog?: Blog;
  };
}
