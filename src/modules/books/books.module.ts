import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksResolver } from 'src/resolvers/books/books.resolver';
import { BooksService } from 'src/services/books/book.service';
import { Book } from 'src/models/books/book.entity';
import { BooksLoader } from 'src/dataloaders/books/books.dataloader';
import { AuthorsModule } from 'src/modules/authors/authors.module';
import { Author } from 'src/models/authors/author.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book, Author]),
  ],
  providers: [BooksService, BooksResolver],
  exports: [],
})
export class BooksModule {}

