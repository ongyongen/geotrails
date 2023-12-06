import { checkSchema } from "express-validator"

export const createUserValidationRule = checkSchema({
    id: {
        isLength: {
            options: { min: 8 },
            errorMessage: 'Name should be at least 8 chars',
        }
    }
})
