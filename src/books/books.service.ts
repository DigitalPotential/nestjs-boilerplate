import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async getAllBooks(): Promise<Book[]> {
    return this.prisma.book.findMany();
  }
}
