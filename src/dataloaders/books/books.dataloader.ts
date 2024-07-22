import * as DataLoader from 'dataloader';
import { Book } from '../../models/books/book.entity';
import { getConnection, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksLoader {
  constructor(
    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>,
  ) {}

  public createBooksLoader() {
    return new DataLoader<number, Book>(async (ids: number[]) => {
      const books = await this.booksRepository.findByIds(ids);
      const bookMap = new Map(books.map(book => [book.id, book]));
      return ids.map(id => bookMap.get(id));
    });
  }
}