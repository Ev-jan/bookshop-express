import { inject, injectable } from 'inversify';
import { TYPES } from '../../../../index';
import { DBService } from '../../db-service';


@injectable()

export class BooksRepository {
    @inject(TYPES.DBService)
    private dbService!: DBService;

    public async findAll(withAuthors = true) {
        const booksList = await this.dbService.getClient().book.findMany({
            include: {
                author: withAuthors,
            }
        });
        return booksList;
    }

}