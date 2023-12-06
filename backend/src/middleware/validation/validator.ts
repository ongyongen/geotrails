import { Request, Response, NextFunction } from "express"
import { validationResult } from "express-validator"
import { UNPROCESSABLE_CONTENT_422 } from "../../config/httpCodes"

export const validator = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }

    return res.status(UNPROCESSABLE_CONTENT_422).json(errors)
}

