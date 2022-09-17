import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blogs.module';
import { BlogEntity } from './blogs/blog.entity';
import { dbUsername, dbPassword, dbName } from './config/secret';
import { AuthorsModule } from './authors/authors.module';
import { join } from 'path';
import { PetsModule } from './pets/pets.module';
import { Pet } from './pets/pet.entity';
import { OwnersModule } from './owners/owners.module';
import { Owner } from './owners/entities/owner.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: dbUsername,
      password: dbPassword,
      database: dbName,
      entities: [BlogEntity, Pet, Owner],
      synchronize: true,
    }),
    BlogsModule,
    AuthorsModule,
    PetsModule,
    OwnersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
