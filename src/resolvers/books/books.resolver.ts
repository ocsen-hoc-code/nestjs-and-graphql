import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { Book } from '../../models/books/book.entity';
import { BooksService } from '../../services/books/book.service';
import { Author } from '../..//models/authors/author.entity';
import { BooksLoader } from '../../dataloaders/books/books.dataloader';
import { AuthorLoader } from '../../dataloaders/authors/authors.dataloader';
import DataLoader from 'dataloader';

@Resolver(() => Book)
export class BooksResolver {
  constructor(
    private readonly booksService: BooksService,
    private readonly booksLoader: BooksLoader,
  ) {}

  @Query(() => [Book])
  async books() {
    return this.booksService.findAll();
  }

  @ResolveField(() => Author)
  async author(@Parent() book: Book) {
    return this.booksLoader.createBooksLoader().load(book.authorId);
  }
}
