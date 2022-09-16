import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './interfaces/blog.interface';
import { Repository } from 'typeorm';
import { BlogEntity } from './blog.entity';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(BlogEntity)
    private blogsRepository: Repository<BlogEntity>,
  ) {}

  async findAll(): Promise<BlogEntity[]> {
    return await this.blogsRepository.find();
  }

  async findOne(id: number): Promise<BlogEntity> {
    return await this.blogsRepository.findOneBy({ id: id });
  }

  async create(blog: Blog): Promise<Blog> {
    return await this.blogsRepository.save(blog);
  }

  async delete(id: number): Promise<any> {
    return await this.blogsRepository.delete(id);
  }

  async update(id: number, blog: Blog): Promise<Blog> {
    await this.blogsRepository.update(id, blog);
    return blog;
  }
}
