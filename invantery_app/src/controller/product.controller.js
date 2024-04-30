// usesin ES6

import path from 'path';

import ProductModel from '../models/product.model.js';

export default class ProductControllers {
    getProducts(req, res, next) {
        let products = ProductModel.get();
        // console.log(products);
        // res.render ("filename" , )    
        //ejs format shoule bs in filename.
        return res.render('product', { products: products, userEmail: req.session.userEmail });

        // console.log(ProductModel.get());
        // console.log(path.resolve()); gives current runnnig path
        // return res.sendFile(path.join(path.resolve(), 'src', 'view', 'product.html'));
    }
    // for rendering the page new-proeduct (no data is sending or collecting only need to view the page)

    getAddForm(req, res, next) {
        return res.render('new-product', { errorMessege: null, userEmail: req.session.userEmail });
    }

    getNewProduct(req, res, next) {
        const { name, desc, price } = req.body;
        const imageUrl = 'images/' + req.file.filename;    // form file-upload middleware
        ProductModel.add(name, desc, price, imageUrl);

        // validating the data
        // ProductModel.add(req.body);
        // console.log(req.body);  // undefined (data is in any enconding format)
        // res.render('product', { products: products });
        let products = ProductModel.get();
        return res.render('product', { products: products, userEmail: req.session.userEmail });
    }

    getUpdateProductview(req, res, next) {
        // checjk if product exist
        const id = req.params.id;

        const productFound = ProductModel.getById(id);
        if (productFound) {
            return res.render('update-product', { product: productFound, errorMessege: null, userEmail: req.session.userEmail })
        }
        // return false
        else {
            res.status(401).send("product not found")
        }
    }

    postUpdateProduct(req, res) {
        const imageUrl = 'images/' + req.file.filename;
        const { name, desc, price, id } = req.body;
        ProductModel.update(name, desc, price, id, imageUrl);

        // ProductModel.update(req.body);

        let products = ProductModel.get();
        return res.render('product', { products: products, userEmail: req.session.userEmail })
    }

    deleteProduct(req, res) {
        const id = req.params.id;
        const productFound = ProductModel.getById(id);
        if (!productFound) {
            return res.status(401).send("Product not found")
        }
        ProductModel.delete(id);
        let products = ProductModel.get();
        return res.render('product', { products: products, userEmail: req.session.userEmail });
    }

}