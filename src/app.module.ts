import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blogs.module';
import { BlogEntity } from './blogs/blog.entity';
import { dbUsername, dbPassword, dbName } from './config/secret';
import { AuthorsModule } from './authors/authors.module';
import { join } from 'path';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: dbUsername,
      password: dbPassword,
      database: dbName,
      entities: [BlogEntity],
      synchronize: true,
    }),
    BlogsModule,
    AuthorsModule,
    PetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
