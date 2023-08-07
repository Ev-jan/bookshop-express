import { Controller } from "./base-controller";
import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { TYPES } from "../../../index";
import { BooksService } from "../model/services/books-service";

@injectable()
export class BooksController extends Controller {
    constructor(@inject(TYPES.BooksService) private booksService: BooksService) {
        super();

        this.bindRoutes([
            {
                path: '/books',
                method: 'get',
                fn: this.getBooks,
            }
        ])
    }

    public  getBooks = async(req: Request, res: Response) => {
        const booksList = await this.booksService.getBooks();
        res.json(booksList);
    }
}  