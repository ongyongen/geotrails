import { Router, Request, Response } from 'express';
import { Geocache } from '../interfaces/geocache';
import { SUCCESS_200, NOT_FOUND_ERROR_400 } from '../config/httpCodes';
import { createResponse } from '../utils/apiUtils';
import { validator } from '../middleware/validation/validator';
import { createGeocacheValidationRule } from '../middleware/validation/rules/geocacheValidationRule';
import { createNewGeocache, getAllGeocaches } from '../services/geocacheService';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const { data, error } = await getAllGeocaches();
    if (error) {
        res.status(NOT_FOUND_ERROR_400).send(createResponse(error.details))
    } else {
        res.status(SUCCESS_200).send(data);
    }
})

router.post('/', createGeocacheValidationRule, validator, async (req: Request, res: Response) => {
    const newGeocache: Geocache = {
        "cache_code": req.body.cache_code,
        "name": req.body.name,
        "latitude": req.body.latitude,
        "longitude": req.body.longitude,
        "planning_area": req.body.planning_area,
        "difficulty": req.body.difficulty,
        "terrain": req.body.terrain,
        "cache_type": req.body.cache_type,
        "container_type": req.body.container_type,
    }
    const { error } = await createNewGeocache(newGeocache);
    if (error) {
        res.status(NOT_FOUND_ERROR_400).send(createResponse(error.details))
    } else {
        res.status(SUCCESS_200).send(createResponse("New geocache is created!"));
    }
});


export default router;
