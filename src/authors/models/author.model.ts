import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Blog } from 'src/blogs/models/blog.model';

@ObjectType()
export class Author {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(() => [Blog])
  posts: Blog[];
}
