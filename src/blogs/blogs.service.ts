import { Injectable } from '@nestjs/common';
import { Blog } from './interfaces/blog.interface';

@Injectable()
export class BlogsService {
  private readonly blogs: Blog[] = [];

  findAll(): Blog[] {
    return this.blogs;
  }

  create(blog: Blog): Blog {
    this.blogs.push(blog);
    return blog;
  }
}
