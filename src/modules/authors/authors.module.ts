import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsResolver } from 'src/resolvers/authors/authors.resolver';
import { AuthorsService } from 'src/services/authors/authors.service';
import { Author } from 'src/models/authors/author.entity';
import { BooksService } from 'src/services/books/book.service';
import { Book } from 'src/models/books/book.entity';
import { AuthorLoader } from 'src/dataloaders/authors/authors.dataloader';
import { BooksLoader } from 'src/dataloaders/books/books.dataloader';

@Module({
  imports: [TypeOrmModule.forFeature([Author, Book])],
  providers: [BooksService, AuthorsService, BooksLoader, AuthorsResolver],
  exports: [],
})
export class AuthorsModule { }