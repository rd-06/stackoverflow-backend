import { Router } from 'express';
const router = Router();
import axios from 'axios';
import { makeResponse } from '../../lib';


router.post('/user-details', async (req, res) => {
  const { userId, name, email, phone, location, strapiId } = req.body;

  try {
    await makeResponse(res, 200, true, '', response?.data?.data?.id || '');
  } catch (error) {
    await makeResponse(res, 400, false, error.message, undefined);
  }
});

export const userController = router;
