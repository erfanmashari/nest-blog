import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './interfaces/blog.interface';
import { Repository } from 'typeorm';
import { BlogEntity } from './blog.entity';
import { APIResponse } from './interfaces/apiResponse.interface';
import { Response } from 'express';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(BlogEntity)
    private blogsRepository: Repository<BlogEntity>,
  ) {}

  async findAll(): Promise<APIResponse> {
    const blogs = await this.blogsRepository.find();
    return {
      status: 200,
      data: {
        blogs,
      },
    };
  }

  async findOne(id: number, response: Response): Promise<APIResponse> {
    const blog = await this.blogsRepository.findOneBy({ id: id });

    let responseObject: APIResponse = {
      status: 200,
      data: {
        blog: blog,
      },
    };

    if (!blog) {
      response.status(404);
      responseObject = {
        status: 404,
        data: {
          message: 'No blog found with this ID!',
        },
      };
    }

    return responseObject;
  }

  async create(blog: Blog, response: Response): Promise<APIResponse> {
    let responseObject: APIResponse = {
      status: 201,
      data: {
        message: 'New blog created successfully!',
      },
    };

    if (
      typeof blog.body === 'string' &&
      typeof blog.snippet === 'string' &&
      typeof blog.title === 'string'
    ) {
      await this.blogsRepository.save(blog);
    } else {
      response.status(406);
      responseObject = {
        status: 406,
        data: {
          message: 'Required informarmation not provided or have wrong type!',
        },
      };
    }

    return responseObject;
  }

  async delete(id: number, response: Response): Promise<APIResponse> {
    const deleteBlog = await this.blogsRepository.delete(id);

    let responseObject: APIResponse = {
      status: 200,
      data: {
        message: 'Blog deleted successfully!',
      },
    };

    if (!deleteBlog.affected) {
      response.status(404);
      responseObject = {
        status: 404,
        data: {
          message: 'No blog found with this ID!',
        },
      };
    }

    return responseObject;
  }

  async update(
    id: number,
    blog: Blog,
    response: Response,
  ): Promise<APIResponse> {
    const updateBlog = await this.blogsRepository.update(id, {
      title: blog.title,
      snippet: blog.snippet,
      body: blog.body,
    });

    let responseObject: APIResponse = {
      status: 200,
      data: {
        message: 'Blog deatils updated successfully!',
      },
    };

    if (!updateBlog.affected) {
      response.status(404);
      responseObject = {
        status: 404,
        data: {
          message: 'No blog found with this ID!',
        },
      };
    }
    return responseObject;
  }
}
