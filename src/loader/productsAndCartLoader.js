import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    // Get Products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // Get Cart
    const storedCart = getStoredCart();
    const savedCart = [];

    for (const id in storedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    return { products, savedCart };
}