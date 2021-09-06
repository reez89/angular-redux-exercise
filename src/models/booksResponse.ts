import { Book } from "./book";

export interface BooksResponse  {
  kind: string,
  totalItems: number,
  items: Array<Book>
}
