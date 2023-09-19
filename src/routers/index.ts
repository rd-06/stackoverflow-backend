import { Router } from 'express';
import { userController } from '../controllers';


const router = Router();

router.use('/', completionController);
router.use('/user', userController);

export { router };
