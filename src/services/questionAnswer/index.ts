import { v4 as uuidv4 } from 'uuid';
import { QUESTIONANSWER, USER } from '../../models';

const updateQuery = async (search: Object, update: Object, options: any = { new: true, upsert: true }) =>
    new Promise<any>((resolve, reject) => {
        QUESTIONANSWER.findOneAndUpdate(search, update, options)
            .lean()
            .then(user => resolve(user as any))
            .catch(reject);
    });

const findQuery = async (search: Object) => {
    return new Promise<any>((resolve, reject) => {
        QUESTIONANSWER.find(search)
            .lean()
            .then(resolve)
            .catch(reject);
    });
};

export { updateQuery, findQuery };
