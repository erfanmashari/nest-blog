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
import { Response } from './interfaces/response.interface';

@Controller('blogs')
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Get()
  async findAll(): Promise<Response> {
    const blogs = await this.blogsService.findAll();
    return {
      status: 200,
      data: {
        blogs,
      },
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Response> {
    const blog = await this.blogsService.findOne(id);
    return {
      status: 200,
      data: {
        blog,
      },
    };
  }

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto): Promise<Response> {
    await this.blogsService.create(createBlogDto);
    return {
      status: 201,
      data: {
        message: 'New blog created successfully!',
      },
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Response> {
    await this.blogsService.delete(id);
    return {
      status: 200,
      data: {
        message: 'Blog deleted successfully!',
      },
    };
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateBlogDto: CreateBlogDto,
  ): Promise<Response> {
    await this.blogsService.update(id, updateBlogDto);
    return {
      status: 200,
      data: {
        message: 'Blog deatils updated successfully!',
      },
    };
  }
}
