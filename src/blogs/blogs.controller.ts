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
    return await this.blogsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Response> {
    return await this.blogsService.findOne(id);
  }

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto): Promise<Response> {
    return await this.blogsService.create(createBlogDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Response> {
    return await this.blogsService.delete(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateBlogDto: CreateBlogDto,
  ): Promise<Response> {
    return await this.blogsService.update(id, updateBlogDto);
  }
}
