import { Resolver, Query, ResolveField, Parent, Int } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { Author } from 'src/models/authors/author.entity';
import { AuthorsService } from 'src/services/authors/authors.service';
import { Book } from 'src/models/books/book.entity';
import { BooksLoader } from 'src/dataloaders/books/books.dataloader';
import { BooksService } from 'src/services/books/book.service';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly booksService: BooksService,
    private readonly booksLoader: BooksLoader,
  ) {}

  @Query(() => [Author])
  async authors() {
    return this.authorsService.findAll();
  }

  @ResolveField(() => [Book])
  async books(@Parent() author: Author) {
    // return this.booksService.findByIds(author.bookIds || []);
    return this.booksLoader.createBooksLoader().loadMany(author.bookIds || []);
  }

  @ResolveField(() => [Int])
  async bookIds(@Parent() author: Author) {
    return author.bookIds || [];
  }
}
