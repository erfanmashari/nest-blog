import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './interfaces/blog.interface';
import { Repository } from 'typeorm';
import { BlogEntity } from './blog.entity';
import { Response } from './interfaces/response.interface';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(BlogEntity)
    private blogsRepository: Repository<BlogEntity>,
  ) {}

  async findAll(): Promise<Response> {
    const blogs = await this.blogsRepository.find();
    return {
      status: 200,
      data: {
        blogs,
      },
    };
  }

  async findOne(id: number): Promise<Response> {
    const blog = await this.blogsRepository.findOneBy({ id: id });
    return {
      status: 200,
      data: {
        blog,
      },
    };
  }

  async create(blog: Blog): Promise<Response> {
    const createBlog = await this.blogsRepository.save(blog);
    return {
      status: 201,
      data: {
        message: 'New blog created successfully!',
      },
    };
  }

  async delete(id: number): Promise<Response> {
    const deleteBlog = await this.blogsRepository.delete(id);
    return {
      status: 200,
      data: {
        message: 'Blog deleted successfully!',
      },
    };
  }

  async update(id: number, blog: Blog): Promise<Response> {
    const updateBlog = await this.blogsRepository.update(id, blog);
    return {
      status: 200,
      data: {
        message: 'Blog deatils updated successfully!',
      },
    };
  }
}
