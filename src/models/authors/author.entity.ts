import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Book } from '../books/book.entity';

@ObjectType()
@Entity()
export class Author {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field(() => [Book])
  @OneToMany(() => Book, book => book.author)
  books: Book[];

  @Field(() => [Int])
  @Column('int', { array: true })
  bookIds: number[];fds
}
