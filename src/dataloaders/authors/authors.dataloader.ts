import * as DataLoader from 'dataloader';
import { Author } from 'src/models/authors/author.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorLoader {
  constructor(
    @InjectRepository(Author)
    private readonly authorsRepository: Repository<Author>,
  ) { }

  public createAuthorsLoader() {
    return new DataLoader<number, Author>(async (ids: number[]) => {
      const authors = await this.authorsRepository.findByIds(ids);
      const authorMap = new Map(authors.map(author => [author.id, author]));
      return ids.map(id => authorMap.get(id));
    });
  }
}