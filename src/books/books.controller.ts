import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from '@prisma/client';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Promise<Book[]> {
    return this.booksService.getAllBooks();
  }
}
