import { Router, Request, Response } from 'express';
import { User } from '../interfaces/user';
import { SUCCESS_200, NOT_FOUND_ERROR_400 } from '../config/httpCodes';
import { createNewUser, getAllUsers } from '../services/userService';
import { createResponse } from '../utils/apiUtils';
import { validator } from '../middleware/validation/validator';
import { createUserValidationRule } from '../middleware/validation/rules/userValidationRule';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const { data, error } = await getAllUsers();
    if (error) {
        res.status(NOT_FOUND_ERROR_400).send(createResponse(error.details))
    } else {
        res.status(SUCCESS_200).send(data);
    }
})

router.post('/', createUserValidationRule, validator, async (req: Request, res: Response) => {
    const newUser: User = {
        "id": req.body.id,
    }
    const { error } = await createNewUser(newUser);
    if (error) {
        res.status(NOT_FOUND_ERROR_400).send(createResponse(error.details))
    } else {
        res.status(SUCCESS_200).send(createResponse("New user is created!"));
    }
});


export default router;
