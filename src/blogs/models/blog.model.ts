import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Blog {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  snippet: string;

  @Field()
  body: string;
}
