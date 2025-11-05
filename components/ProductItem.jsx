'use client';
import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";
import Link from "next/link";

export default function ProductItem({ product }) {
    const { add } = useContext(CartContext);

    return (
        <div className="w-[300px] shadow-2xl py-2">
            <div className=" h-[200px] flex justify-center p-1">
                <img src={product.image} alt="" className=" w-full1 h-full" />
            </div>

            <div className=" p-3">
                <h2 className=" font-bold font-[Ubuntu] italic text-[18px]">
                    {product.title.slice(0, 25)}...
                </h2>

                <p className=" font-bold text-[#B51EE4]">${product.price}</p>
            </div>

            <div className=" p-3">
                <button 
                  onClick={() => add(product)}
                  className=" bg-slate-300 mr-2 px-2 py-1 cursor-pointer hover:bg-slate-600 hover:text-white rounded-sm"
                >
                    Add to cart
                </button>

                <Link
                    href={'/product/' + product.id}
                    className="bg-[#B51EE4] text-white px-2 py-1 cursor-pointer hover:bg-[#6d048d] hover:text-white rounded-sm"
                >
                    View details
                </Link>
            </div>
        </div>
    )
}
