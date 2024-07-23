// authors/authors.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from 'src/models/authors/author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ) { }

  findAll(): Promise<Author[]> {
    return this.authorsRepository.find();
  }

  findById(id: number): Promise<Author> {
    return this.authorsRepository.findOneBy({ id });
  }
  async findByIds(authorIds: number[]): Promise<Author[]> {
    if (authorIds.length === 0) {
      return [];
    }
    return this.authorsRepository.findByIds(authorIds);
  }
}
