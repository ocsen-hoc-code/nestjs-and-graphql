import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Book } from '../books/book.schema';

@ObjectType()
export class Author {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [Book])
  books: Book[];

  @Field(() => [Int])
  bookIds: number[];
}
