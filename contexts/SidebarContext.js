'use client';

import { createContext, useState } from "react";

export const SidebarContext = createContext();

export default function SidebarProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleBasketIcon = () => {
        setIsOpen(!isOpen);
    }

    return (
        <SidebarContext.Provider value={{isOpen, handleBasketIcon}}>
            {children}
        </SidebarContext.Provider>
    )
}