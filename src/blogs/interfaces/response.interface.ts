import { Blog } from './blog.interface';

export interface Response {
  status: number;
  data: {
    message?: string;
    blogs?: Blog[];
    blog?: Blog;
  };
}
