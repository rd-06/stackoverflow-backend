import { Router } from 'express';
import { userController } from '../controllers';
import { questionAnswerController } from '../controllers/questionAnswer';


const router = Router();

router.use('/user', userController);
router.use('/', questionAnswerController);

export { router };
