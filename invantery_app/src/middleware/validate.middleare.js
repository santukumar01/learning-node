
import { body, validationResult } from "express-validator";

export const validateMiddleware = async (req, res, next) => {
    // validating the data
    // const { name, price, imageUrl } = req.body;

    // let errors = [];
    // if (!name || name.trim() == '') {
    //     errors.push("Name is required");
    // }
    // if (!price || parseFloat(price) < 1) {
    //     errors.push('price must be a postive number');
    // }
    // try {
    //     const validUrl = new URL(imageUrl);
    // }
    // catch (error) {
    //     errors.push('Url is invalid');
    // }

    // 1. setup the rule
    const rules = [
        body('name').notEmpty().withMessage('Name is required'),
        body('price').isFloat({ gt: 0 }).withMessage('Price shouls be positive'),
        // body('imageUrl').isURL().withMessage("Invalid Url")
        body('imageUrl').custom((value, { req }) => {
            if (!req.file) {
                throw new Error("image is required");
            }
            return true;
        })
    ];

    //2 .running all rules to check
    await Promise.all(rules.map(rule => rule.run(req)))

    //chieck if there are any erroe-> returing an object
    let validationErrors = validationResult(req);
    // return an object which have arr of error
    console.log(validationErrors);

    if (!validationErrors.isEmpty()) {
        return res.render('new-product', { errorMessege: validationErrors.array()[0].msg });
    }

    next();
}