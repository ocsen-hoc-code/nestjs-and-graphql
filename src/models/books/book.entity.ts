import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Author } from '../authors/author.entity';

@ObjectType()
@Entity()
export class Book {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field(() => Author)
  @ManyToOne(() => Author, author => author.books)
  author: Author;

  @Field(() => Int)
  @Column()
  authorId: number;
}
