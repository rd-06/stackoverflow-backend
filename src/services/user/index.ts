import { v4 as uuidv4 } from 'uuid';
import { USER } from '../../models';


const createUser = async (name: string) => {
  try {
    const user = new USER({
      name,
      uuid: uuidv4()
    });
    const savedUser = await user.save();

    return savedUser;
  } catch (error) {
    throw error;
  }
};

export { createUser };
