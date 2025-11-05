'use client';
import { useContext } from "react";
import { SidebarContext } from "@/contexts/SidebarContext";
import Link from "next/link";
import Image from "next/image";
import { CartContext } from "@/contexts/CartContext";

export default function Header() {
    const { amount } = useContext(CartContext);
    const { handleBasketIcon } = useContext(SidebarContext);

    return (
        <header className=" bg-[#B51EE4] px-6 py-4 flex items-center justify-between">
            <Link href={'/'} className=" text-3xl text-white font-[Ubuntu] font-bold">
                New Wildberries
            </Link>

            <div className=" relative cursor-pointer" onClick={handleBasketIcon}>
                <Image
                    src='/cart.svg'
                    alt="cart"
                    width={30}
                    height={30}
                />
                <p className=" absolute top-[-10px] right-[-15px] text-[15px] font-[Ubuntu] text-white">{amount}</p>
            </div>
        </header>
    )
}
