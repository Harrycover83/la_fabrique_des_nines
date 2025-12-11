"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CartItem } from "@/types/product";
import { Product } from "@/types/product";

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number, selectedColor?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * Provider du contexte panier
 * Gère l'état global du panier avec persistance dans localStorage
 */
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Charger le panier depuis localStorage au montage
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (error) {
        console.error("Erreur lors du chargement du panier:", error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Sauvegarder le panier dans localStorage à chaque modification
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cart", JSON.stringify(items));
    }
  }, [items, isLoaded]);

  const addItem = (product: Product, quantity = 1, selectedColor?: string) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === selectedColor
      );

      if (existingIndex > -1) {
        // Le produit existe déjà, on augmente la quantité
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        // Nouveau produit dans le panier
        return [...prev, { product, quantity, selectedColor }];
      }
    });
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/**
 * Hook pour utiliser le contexte panier
 */
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart doit être utilisé dans un CartProvider");
  }
  return context;
}
