'use client';
import { useContext } from "react";
import { ProductContext } from "@/contexts/ProductContext";
import { CartContext } from "@/contexts/CartContext";

export default function SingleProduct({ id }) {
    const { findProductById } = useContext(ProductContext);
    const { add } = useContext(CartContext);

    const product = findProductById(id);

    return product && (
        <div>
            <h2 className=" text-center my-10 text-6xl font-bold font-[LiberationSerif]">{product.title}</h2>

            <div className=" flex items-center gap-20 w-[1200px] mx-auto my-[60px]">
                <img src={product.image} alt={product.title} className=" shadow-2xl p-8 w-[400px]" />

                <div>
                    <table className="min-w-full border mb-8 border-gray-300 rounded-lg shadow-sm">
                        <tbody>
                            <tr className="border-b border-gray-200">
                                <th className="text-left px-4 py-2 bg-gray-100 text-[17px]">Category:</th>
                                <td className="px-4 py-2 text-[17px]">{product.category}</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <th className="text-left px-4 py-2 bg-gray-100 text-[17px]">Description:</th>
                                <td className="px-4 py-2 text-[17px]">{product.description}</td>
                            </tr>
                            <tr>
                                <th className="text-left px-4 py-2 bg-gray-100 text-[17px]">Price:</th>
                                <td className="px-4 py-2 font-semibold text-[17px]">${product.price.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>

                    <button 
                      onClick={() => add(product)}
                      className=" bg-slate-300 mr-2 px-2 py-1 cursor-pointer hover:bg-slate-600 hover:text-white rounded-sm"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}
