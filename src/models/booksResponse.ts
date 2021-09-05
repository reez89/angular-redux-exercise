import { Book } from "./book";

export interface BooksResponse extends Book {
  kind: string,
  totalItems: number,
  items: Book
}
