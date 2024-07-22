import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsResolver } from '../../resolvers/authors/authors.resolver';
import { AuthorsService } from '../../services/authors/authors.service';
import { Author } from '../../models/authors/author.entity';
import { Book } from '../../models/books/book.entity';
import { BooksResolver } from '../../resolvers/books/books.resolver';
import { BooksService } from '../../services/books/book.service';
import { BooksLoader } from 'src/dataloaders/books/books.dataloader';
import { AuthorLoader } from 'src/dataloaders/authors/authors.dataloader';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  providers: [AuthorLoader, AuthorsService, AuthorsResolver],
  exports: [AuthorLoader],
})
export class AuthorsModule {}