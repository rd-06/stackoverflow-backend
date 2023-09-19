import { v4 as uuidv4 } from 'uuid';
import { QUESTIONANSWER, USER } from '../../models';

const updateQuery = async (search: Object, update: Object, options: any = { new: true, upsert: true }) =>
    new Promise<any>((resolve, reject) => {
        console.log('check_update');
        QUESTIONANSWER.findOneAndUpdate(search, update, options)
            .lean()
            .then(user => resolve(user as any))
            .catch(reject);
    });

const findQuery = async (search: Object) => {
    return new Promise<any>((resolve, reject) => {
        console.log('check_find');
        QUESTIONANSWER.find(search)
            .lean()
            .then(documents => resolve(documents))
            .catch(reject);
    });
};



export { updateQuery, findQuery };
