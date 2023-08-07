import { Response, Request, Router } from "express";
import { param, validationResult, body } from "express-validator";

export class BooksRouter {
  private _router: Router;

  constructor() {
    this._router = Router();

    this._router.get("api/v1/books", (req, res) => {
      res.send({book: "stuff"});
    });

    this._router.get(
      "api/v1/books/:id",
      [param("id").isEmpty()!.withMessage("Product id is empty")],
      async (req: Request<{ id: string }>, res: Response) => {
        try {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
          const { id } = req.params;
          const book = {book: "Book"};
          if (!book) {
            return res.status(404).send(`Book with id ${id} not found`);
          }
          return res.status(200).send({book})
        } catch (error) {
            this.throwServerError(res, error as Error);
        }
      }
    );
  }

  private throwServerError = (res: Response, e: Error) => {
    console.debug(e.message);
    res.status(500);
    res.send("Something went wrong");
  };

  get router() {
    return this._router;
  }
}
