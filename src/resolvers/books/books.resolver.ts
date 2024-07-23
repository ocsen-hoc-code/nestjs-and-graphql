import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Book } from 'src/models/books/book.entity';
import { BooksService } from 'src/services/books/book.service';
import { Author } from 'src//models/authors/author.entity';
import { BooksLoader } from 'src/dataloaders/books/books.dataloader';

@Resolver(() => Book)
export class BooksResolver {
  constructor(
    private readonly booksService: BooksService,
    // private readonly booksLoader: BooksLoader,
  ) {}

  @Query(() => [Book])
  async books() {
    return this.booksService.findAll();
  }

  @ResolveField(() => Author)
  async author(@Parent() book: Book) {
    return this.booksService.findByAuthorId(book.authorId);
    // return this.booksLoader.createBooksLoader().load(book.authorId);
  }
}
