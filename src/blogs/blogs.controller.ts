import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { BlogsService } from './blogs.service';
import { Blog } from './interfaces/blog.interface';

@Controller('blogs')
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Get()
  async findAll(): Promise<Blog[]> {
    return this.blogsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Blog> {
    return this.blogsService.findOne(id);
  }

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto): Promise<Blog> {
    return this.blogsService.create(createBlogDto);
  }
}
