import { Controller, Get, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { BookQueryDto } from './book.types';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('search')
  async getBooks(@Query() booksQuery: BookQueryDto): Promise<any> {
    return await this.bookService.searchForBook({ q: 'acotar' });
  }
}
