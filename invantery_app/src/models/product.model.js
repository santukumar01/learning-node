//format of data

export default class ProductModel {
    constructor(_id, _name, _price, _desc, _imageUrl) {
        this.id = _id;
        this.name = _name;
        this.price = _price;
        this.desc = _desc;
        this.imageUrl = _imageUrl;
    }

    static get() {
        return products;
    }

    // before adding the multer

    // static add(productObj) {
    //     let newProduct = new ProductModel(
    //         products.length + 1,
    //         productObj.name,
    //         productObj.price,
    //         productObj.desc,
    //         productObj.imageUrl,
    //     );

    //     products.push(newProduct);
    //     // console.log("++++++++start++++++++++")
    //     // console.log(newProduct);
    //     // // console.log("No of prodcut" + products.length);
    //     // console.log(products);
    //     // console.log("++++++++end+++++++++++");
    // }

    // getting product by an product

    static add(name, desc, price, imageUrl) {
        let newProduct = new ProductModel(
            products.length + 1,
            name,
            desc,
            price,
            imageUrl);
        products.push(newProduct);

    }
    static getById(id) {
        return products.find((p) => p.id == id);
    }

    //upadate the product

    // static update(productObj) {
    //     const index = products.findIndex(
    //         (p) => p.id == productObj.id
    //     );

    //     products[index] = productObj;
    // }

    static update(name, desc, price, id, imageUrl) {
        const index = products.findIndex((p) => p.id == id);
        let newProduct = new ProductModel(
            id,
            name,
            desc,
            price,
            imageUrl);
        products[index] = newProduct;
    }

    static delete(id) {
        const index = products.findIndex((p) => p.id == id);
        // console.log("+++++++start+++++++++")
        // console.log("deleted Product", products[index]);
        // console.log(products)
        products.splice(index, 1);
        // console.log(index + " has been deleted")
        // console.log(products)
        // console.log("+++++++end+++++++++")
    }


}

let products = [
    new ProductModel(1, "chair", "19.99", "This is a chair", "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"),
    new ProductModel(2, "Iphone", 2000, "this is ihophpne", "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"),
    new ProductModel(3, "apple", 45, "this is apple", "https://www.shutterstock.com/image-photo/red-apple-isolated-on-white-600nw-1727544364.jpg"),

]