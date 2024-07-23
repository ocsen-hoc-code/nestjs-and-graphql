// books/books.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from 'src/models/books/book.entity';
import { Author } from 'src/models/authors/author.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ) { }

  findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  findById(id: number): Promise<Book> {
    return this.booksRepository.findOneBy({ id });
  }

  async findByIds(bookIds: number[]): Promise<Book[]> {
    if (bookIds.length === 0) {
      return [];
    }
    return this.booksRepository.findByIds(bookIds);
  }

  findByAuthorId(authorId: number): Promise<Author> {
    return this.authorsRepository.findOneBy({ id: authorId });
  }
}
