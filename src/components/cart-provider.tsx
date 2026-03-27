"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem, Product } from "@/lib/types";
import toast from "react-hot-toast";

interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product, quantity: number) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    cartTotal: number;
    itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    // Load from local storage
    useEffect(() => {
        setIsMounted(true);
        const savedCart = localStorage.getItem("goldberry_cart");
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Save to local storage
    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("goldberry_cart", JSON.stringify(items));
        }
    }, [items, isMounted]);

    const addToCart = (product: Product, quantity: number) => {
        setItems((prev) => {
            const existing = prev.find((item) => item.product.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { product, quantity }];
        });
        toast.success(`${quantity}x ${product.name} added to cart`);
    };

    const removeFromCart = (productId: string) => {
        setItems((prev) => prev.filter((item) => item.product.id !== productId));
        toast.success("Item removed from cart");
    };

    const updateQuantity = (productId: string, quantity: number) => {
        setItems((prev) =>
            prev.map((item) =>
                item.product.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    const cartTotal = items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
    );

    const itemCount = items.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartTotal,
                itemCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
