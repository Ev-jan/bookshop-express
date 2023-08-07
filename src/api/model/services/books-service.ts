import { injectable, inject } from "inversify";
import { BooksRepository } from "../repository/repository";
import { TYPES } from "../../../../index";

@injectable()
export class BooksService {
  constructor(
    @inject(TYPES.BooksRepository) private booksRepository: BooksRepository
  ) {}
  public async getBooks() {
    return this.booksRepository.findAll();
  }

  public editBook(bookId: string | number) {
    return { success: true, book: { title: "Book" } };
  }

  public removeBook(bookId: string | number) {
    return { success: true };
  }

  // public createBook(bookData: IBook) {
  //   // const book = new BookModel();
  //   const book = {
  //     title: "Book",
  //     setName: function (title: string) {
  //       this.title = title;
  //     },
  //   };
  //   book.setName(bookData.title);

  //   return { success: true, book: bookData };
  // }
}
