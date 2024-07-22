import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Author } from '../authors/author.schema';

@ObjectType()
export class Book {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field(() => Author)
  author: Author;

  @Field(() => Int)
  authorId: number;
}
