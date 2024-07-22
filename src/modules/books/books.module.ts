import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksResolver } from '../../resolvers/books/books.resolver';
import { BooksService } from '../../services/books/book.service';
import { Book } from '../../models/books/book.entity';
import { BooksLoader } from 'src/dataloaders/books/books.dataloader';
import { AuthorLoader } from 'src/dataloaders/authors/authors.dataloader';
import { AuthorsModule } from '../authors/authors.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book]),
    AuthorsModule,
  ],
  providers: [BooksLoader, BooksService, BooksResolver],
  exports: [BooksLoader],
})
export class BooksModule {}

