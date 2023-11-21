import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { WithAPIKey } from 'src/common/types';
import { BookQueryDto } from './book.types';

@Injectable()
export class BookService {
  googleBooksAPIKey: string;
  googleBooksBaseAPIUrl: string;
  constructor(private configService: ConfigService) {
    this.googleBooksAPIKey = this.configService.get<string>(
      'GOOGLE_BOOKS_API_KEY',
    );
    this.googleBooksBaseAPIUrl = 'https://www.googleapis.com/books/v1';
  }

  public async searchForBook(query: BookQueryDto) {
    const authenticatedQuery: WithAPIKey<BookQueryDto> = {
      key: this.googleBooksAPIKey,
      ...query,
    };
    try {
      const books = await axios.get(`${this.googleBooksBaseAPIUrl}/volumes`, {
        params: authenticatedQuery,
      });
      return books.data;
    } catch (error: any) {
      throw error;
    }
  }
}
