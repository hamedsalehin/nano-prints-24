"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { supabase } from "@/lib/supabaseClient";

export interface CartItem {
  id: string; // unique item id
  productTitle: string;
  size: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  designUrl?: string;
  designFilename?: string;
  customOptions: Record<string, string>;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  checkout: () => Promise<{ success: boolean; error?: string; orderIds?: string[] }>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { user, setShowAuthModal } = useAuth();
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Load cart on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("nano_cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart items:", e);
      }
    }
    setIsMounted(true);
  }, []);

  // Save cart when items change
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("nano_cart", JSON.stringify(items));
    }
  }, [items, isMounted]);

  const addItem = (item: Omit<CartItem, "id">) => {
    const id = crypto.randomUUID();
    setItems((prev) => [...prev, { ...item, id }]);
    setCartOpen(true); // Auto-open cart sidebar when adding item
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const checkout = async () => {
    if (!user) {
      setShowAuthModal(true);
      return { success: false, error: "Please sign in or create an account to place your order." };
    }

    if (items.length === 0) {
      return { success: false, error: "Your cart is empty." };
    }

    try {
      const orderIds: string[] = [];

      for (const item of items) {
        const { data, error } = await supabase
          .from("orders")
          .insert({
            user_id: user.id,
            product_title: item.productTitle,
            product_size: item.size,
            quantity: item.quantity,
            unit_price: item.unitPrice,
            total_price: item.totalPrice,
            design_url: item.designUrl || null,
            design_filename: item.designFilename || null,
            custom_options: item.customOptions,
            status: "pending",
          })
          .select("id")
          .single();

        if (error) throw error;
        if (data) orderIds.push(data.id);
      }

      clearCart();
      return { success: true, orderIds };
    } catch (err) {
      console.error("Checkout failed:", err);
      return { success: false, error: err instanceof Error ? err.message : "Failed to place order. Please try again." };
    }
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        cartOpen,
        setCartOpen,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
