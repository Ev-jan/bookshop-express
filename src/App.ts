import express, { Express } from "express";
import { json } from "body-parser";
import { BooksRouter } from "./api/books.api";

export class App {
  private app: Express;
  private booksRouter: BooksRouter;

  private readonly port: number;

  constructor() {
    this.app = express();
    this.port = Number(process.env.APP_PORT) || 3000;
    this.booksRouter = new BooksRouter();
  }

  private configureRoutes() {
    this.app.use('/api/v1', this.booksRouter.router);

}

  public async run() {
    this.app.use(json());
    this.app.listen(this.port, () => {
      console.log("Приложение запущено!");
    });
    this.configureRoutes();
  }
}
