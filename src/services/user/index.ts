import { v4 as uuidv4 } from 'uuid';
import { USER } from '../../models';

const updateUser = async (search: Object, update: Object, options: any = { new: true }) =>
  new Promise<any>((resolve, reject) => {
    USER.findOneAndUpdate(search, update, options)
      .lean()
      .then(user => resolve(user as any))
      .catch(reject);
  });

const createUser = async () => {
  try {
    const user = new USER({
      uuid: uuidv4()
    });
    const savedUser = await user.save();

    return savedUser;
  } catch (error) {
    throw error;
  }
};

export { updateUser, createUser };
