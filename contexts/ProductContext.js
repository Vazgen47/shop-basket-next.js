'use client';

import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err));
    }, []);

    const findProductById = (id) => {
        if (products) {
            const product = products.find(elem => elem.id === parseInt(id));
            return product;
        }
    };

    return (
        <ProductContext.Provider value={{ products, findProductById }}>
            {children}
        </ProductContext.Provider>
    )
}