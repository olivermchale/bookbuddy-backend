import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const BookQuerySchema = z.object({
  q: z.string(),
  maxResults: z.number().optional(),
  startIndex: z.number().optional(),
  orderBy: z.enum(['newest', 'relevance']).optional(),
  printType: z.enum(['all', 'books']).optional(),
});

export class BookQueryDto extends createZodDto(BookQuerySchema) {}
