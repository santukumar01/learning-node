//ceating a server using express

import express from 'express';
import ejsLayouts from 'express-ejs-layouts';
import ProductControllers from './src/controller/product.controller.js';
import UserController from './src/controller/user.controller.js';

import path from "path";
import exp from 'constants';
import { validateMiddleware } from './src/middleware/validate.middleare.js';
import { uploadFile } from './src/middleware/file-upload.middleware.js';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { auth } from './src/middleware/auth.middleware.js';
import { setLastVisit } from './src/middleware/lastVisit.middlewae.js';
const PORT = 3100;
const server = express();

server.use(express.static('public'));
// configre session
server.use(session({
    secret: 'SecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))



//cookies confiuguration 
server.use(cookieParser());
server.use(setLastVisit)

// parse form data
server.use(express.urlencoded({ extended: true }));


// setup viwe engine
// informing server -> which server we are using
server.set("view engine", 'ejs');

// seting path for views
server.set('views', path.join(path.resolve(), 'src', 'view'))

// configure layout to use in middleware
// using layout

server.use(ejsLayouts);

// const pathmodule = path.join('src', 'view');
// server.use(express.static(pathmodule));

// server.get('/', (req, res) => {
//     res.send("Welcome to express server for invanttry app");
// })

//since this is method a we have to create a new instance for use 

const productControllers = new ProductControllers();
const userController = new UserController();


server.get('/', auth, productControllers.getProducts)

server.get('/update-product/:id', auth, productControllers.getUpdateProductview)

server.get('/new', auth, productControllers.getAddForm);

server.get('/delete-product/:id', auth, productControllers.deleteProduct)
// server.post('/delete-product/:id', productControllers.deleteProduct)

server.post('/', auth, uploadFile.single('imageUrl'), validateMiddleware, productControllers.getNewProduct);

server.post('/update-product/:id',
    auth,
    uploadFile.single('imageUrl'),
    productControllers.postUpdateProduct
)

// register page

server.get('/register', userController.getRegister);
server.post('/register', userController.postRegister);


//login
server.get('/login', userController.getLogin);
server.post('/login', userController.postLogin);

//logoiut

server.get('/logout', userController.logout)

server.listen(PORT, () => {
    console.log(`Our server is running on PORT : ${PORT}`);
})