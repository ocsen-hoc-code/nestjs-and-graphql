import { Resolver, Query, ResolveField, Parent, Int } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { Author } from '../../models/authors/author.entity';
import { AuthorsService } from '../../services/authors/authors.service';
import { Book } from '../../models/books/book.entity';
import DataLoader from 'dataloader';
import { AuthorLoader } from 'src/dataloaders/authors/authors.dataloader';
import { BooksLoader } from 'src/dataloaders/books/books.dataloader';

export class AuthorsResolver {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly booksLoader: BooksLoader,
  ) {}

  @Query(() => [Author])
  async authors() {
    return this.authorsService.findAll();
  }

  @ResolveField(() => [Book])
  async books(@Parent() author: Author) {
    return this.booksLoader.createBooksLoader().loadMany(author.bookIds || []);
  }

  @ResolveField(() => [Int])
  async bookIds(@Parent() author: Author) {
    return author.bookIds || [];
  }
}
