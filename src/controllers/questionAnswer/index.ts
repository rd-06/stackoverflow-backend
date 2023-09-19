import { Router } from 'express';
const router = Router();
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { makeResponse } from '../../lib';
import { findQuery, updateQuery } from '../../services/questionAnswer';


router.post('/update-query', async (req, res) => {
    const { _question } = req.body;

    try {
        console.log('in_question_answer');

        const questionID = _question ? _question : uuidv4();

        const response = await updateQuery({ _question: questionID }, { ...req.body });
        console.log(response);
        await makeResponse(res, 200, true, '', response || '');
    } catch (error) {
        await makeResponse(res, 400, false, error.message, undefined);
    }
});


router.get('/get-queries', async (req, res) => {
    const { } = req.body;

    try {
        console.log('in_question_answer');
        const response = await findQuery({});
        await makeResponse(res, 200, true, '', response || '');
    } catch (error) {
        await makeResponse(res, 400, false, error.message, undefined);
    }
});

export const questionAnswerController = router;
