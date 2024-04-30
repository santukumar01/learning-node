// this is js code is publicy aviable for all views because use of express.static
// this is js for frontend
// one of the way for calling api is fetch 
// function deleteProductById(id) {
//     const result = confirm("Are you sure you want to delete?");

//     if (result) {
//         fetch('/delete-product/' + id, {
//             method: "POST"
//         }).then(res => {
//             if (res.ok) {
//                 location.reload();  // Reloading the page
//             }
//         }).catch(error => {
//             console.log("Error deleting product:", error);
//         });
//     }
// }

async function deleteProductById(id) {
    const result = confirm("Are you sure you want to delete?", id);

    if (result) {
        try {
            const response = await fetch(`/delete-product/${id}`, {
                method: "POST"
            });

            if (response.ok) {
                location.reload();  // Reloading the page
            } else {
                console.log("Error deleting product. Status:", response.status);
            }
        } catch (error) {
            console.error("An error occurred during the delete operation:", error);
        }
    }
}

