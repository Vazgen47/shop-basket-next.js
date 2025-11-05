'use client';

import { useContext } from "react"
import { CartContext } from "@/contexts/CartContext";
import { SidebarContext } from "@/contexts/SidebarContext"

export default function Basket() {
  const { orders, plus, minus, remove, removeAll, amount, total } = useContext(CartContext);
  const { isOpen, handleBasketIcon } = useContext(SidebarContext);

  return isOpen && (
    <div className=" fixed top-0 right-0 bottom-0 w-[350px] bg-white shadow-2xl p-4 overflow-auto">
      <div className=" flex items-center justify-between border-b border-b-[#B51EE4] pb-1">
        <h2 className=" text-[17px] font-[Ubuntu] font-bold">Shopping Bag ({amount})</h2>
        <img src="/arrow-right.svg" alt="arrow" width={28} className="cursor-pointer" onClick={handleBasketIcon} />
      </div>

      <div>
        {
          orders.map(elem => (
            <div key={elem.id} className=" flex items-center gap-6 border-b border-b-slate-300 py-3 ">
              <img src={elem.image} alt={elem.title} width={120} />

              <div>
                <div className=" flex items-center justify-between font-bold">
                  <h2>{elem.title.slice(0, 15)}...</h2>
                  <img src="/xmark.svg" alt="x-mark" className=" w-[20px] cursor-pointer" onClick={() => remove(elem.id)} />
                </div>

                <div className=" my-3">
                  <span>Quantity: </span>
                  <button className=" bg-[#B51EE4] text-white w-[20px] ml-3 cursor-pointer" onClick={() => minus(elem.id)}>-</button>
                  <span className=" w-[30px] text-center inline-block">{elem.quantity}</span>
                  <button className=" bg-[#B51EE4] text-white w-[20px] cursor-pointer" onClick={() => plus(elem.id)}>+</button>
                </div>

                <div>
                  <p><b>Price:</b> ${elem.price.toFixed(2)}</p>
                  <p><b>Total:</b> ${(elem.price * elem.quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      {orders.length > 0 && <div className=" flex items-center justify-between">
        <p className=" font-bold text-[#B51EE4]">Total: ${total.toFixed(2)}</p>
        <img src="/trash.svg" alt="trash" className=" w-[25px] cursor-pointer my-4" onClick={removeAll} />
      </div>}
    </div>
  )
}
