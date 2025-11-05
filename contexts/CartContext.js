'use client';

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [orders, setOrders] = useState([]);
    const [amount, setAmoutn] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const data = localStorage.getItem('orders');

        if (data) {
            setOrders(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        const amount = orders.reduce((count, elem) => count + elem.quantity, 0);
        setAmoutn(amount);

        const total = orders.reduce((sum, elem) => sum + elem.quantity * elem.price, 0);
        setTotal(total);

        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders]);

    const add = (product) => {
        const existingProduct = orders.find(elem => elem.id === product.id);

        if (existingProduct) {
            const newOrders = orders.map(elem => {
                if (elem.id === existingProduct.id) {
                    elem.quantity = elem.quantity + 1;
                }

                return elem;
            });

            setOrders(newOrders);
        } else {
            const newOrder = { ...product, quantity: 1 };
            setOrders([...orders, newOrder]);
        }
    };

    const plus = (id) => {
        const newOrders = orders.map(elem => {
            if (elem.id === id) {
                elem.quantity = elem.quantity + 1;
            }

            return elem;
        });

        setOrders(newOrders);
    };

    const minus = (id) => {
        const existingProduct = orders.find(elem => elem.id === id);

        if (existingProduct.quantity <= 1) {
            remove(id);
        } else {
            const newOrders = orders.map(elem => {
                if (elem.id === id) {
                    elem.quantity = elem.quantity - 1;
                }

                return elem;
            });

            setOrders(newOrders);
        }
    };

    const remove = (id) => {
        const newOrders = orders.filter(elem => elem.id !== id);
        setOrders(newOrders);
    };

    const removeAll = () => {
        setOrders([]);
    };

    return (
        <CartContext.Provider value={{ orders, add, plus, minus, remove, removeAll, amount, total }}>
            {children}
        </CartContext.Provider>
    )
}