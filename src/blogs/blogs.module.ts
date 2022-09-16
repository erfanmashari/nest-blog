import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';
import { BlogEntity } from './blog.entity';
import { BlogsResolver } from './blogs.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([BlogEntity])],
  controllers: [BlogsController],
  providers: [BlogsService, BlogsResolver],
})
export class BlogsModule {}
