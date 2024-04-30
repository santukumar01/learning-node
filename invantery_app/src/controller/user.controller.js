import UserModel from "../models/user.model.js";
import ProductModel from "../models/product.model.js";

export default class UserController {
    getRegister(req, res) {
        res.render('register');
    }

    getLogin(req, res) {
        res.render('login', { errorMessege: null });   // sending errorMessege is imp since on renderign this page so this is present
    }

    postRegister(req, res) {
        const { name, email, password } = req.body;
        UserModel.add(name, email, password);
        res.render('login', { errorMessege: null });
    }

    postLogin(req, res) {
        const { email, password } = req.body;
        const result = UserModel.isValidUser(email, password);

        if (!result) {
            res.render('login', {
                user: result,
                errorMessege: "Invalid User"
            })
        }
        else {

            req.session.userEmail = email;  // after configuring session we have session object associated with req
            let products = ProductModel.get();
            return res.render('product', { products: products, userEmail: req.session.userEmail });
        }
    }

    logout(req, res) {
        // on logout destroy the session
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect('/login');
            }
        });


    }
}