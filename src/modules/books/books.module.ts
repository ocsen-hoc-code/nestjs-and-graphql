import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksResolver } from 'src/resolvers/books/books.resolver';
import { BooksService } from 'src/services/books/book.service';
import { Book } from 'src/models/books/book.entity';
import { Author } from 'src/models/authors/author.entity';
import { AuthorLoader } from 'src/dataloaders/authors/authors.dataloader';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book, Author]),
  ],
  providers: [BooksService, AuthorLoader, BooksResolver],
  exports: [],
})
export class BooksModule {}

