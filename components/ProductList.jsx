'use client';

import { useContext } from "react";
import { ProductContext } from "@/contexts/ProductContext";
import ProductItem from "./ProductItem";

export default function ProductList() {
    const { products } = useContext(ProductContext);

    return (
        <div className=" p-13 flex flex-wrap justify-center gap-8">
            {products && products.map(elem => (
                <ProductItem key={elem.id} product={elem} />
            ))}
        </div>
    )
}
