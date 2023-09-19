import { Router } from 'express';
const router = Router();
import axios from 'axios';
import { makeResponse } from '../../lib';
import { createUser } from '../../services/user';

router.post('/', async (req, res) => {
  const { name } = req.body;

  try {
    const response = await createUser(name);
    await makeResponse(res, 200, true, '', response || '');
  } catch (error) {
    await makeResponse(res, 400, false, error.message, undefined);
  }
});

export const userController = router;
