import { checkSchema } from "express-validator"

export const createGeocacheValidationRule = checkSchema({
    cache_code: {
        notEmpty: true,
        errorMessage: 'Geocache cache code is required'
    },
    name: {
        notEmpty: true,
        errorMessage: 'Geocache name is required'
    },
    latitude: {
        notEmpty: true,
        errorMessage: 'Geocache location latitude is required'
    },
    longitude: {
        notEmpty: true,
        errorMessage: 'Geocache location longitude is required'
    },
    planning_area: {
        notEmpty: true,
        errorMessage: 'Geocache location planning area is required'
    },
    difficulty: {
        notEmpty: true,
        errorMessage: 'Geocache difficulty is required'
    },
    terrain: {
        notEmpty: {
            errorMessage: "Geocache terrain is required"
        },
        isNumeric: {
            errorMessage: 'Geocache terrain should be a numeric value'
        }
    },
    cache_type: {
        notEmpty: true,
        errorMessage: 'Geocache cache type is required'
    },
    container_type: {
        notEmpty: true,
        errorMessage: 'Geocache container type is required'
    },
})
