import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Res,
} from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Response } from 'express';
import { BlogsService } from './blogs.service';
import { APIResponse } from './interfaces/apiResponse.interface';

@Controller('blogs')
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Get()
  async findAll(): Promise<APIResponse> {
    return await this.blogsService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id') id: number,
    @Res({ passthrough: true }) response: Response,
  ): Promise<APIResponse> {
    return await this.blogsService.findOne(id, response);
  }

  @Post()
  async create(
    @Body() createBlogDto: CreateBlogDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<APIResponse> {
    return await this.blogsService.create(createBlogDto, response);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: number,
    @Res({ passthrough: true }) response: Response,
  ): Promise<APIResponse> {
    return await this.blogsService.delete(id, response);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateBlogDto: CreateBlogDto,
  ): Promise<APIResponse> {
    return await this.blogsService.update(id, updateBlogDto);
  }
}
