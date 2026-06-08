"use client";

import { AuthProvider } from "@/components/AuthContext";
import { CartProvider } from "@/components/CartContext";
import { AuthModal } from "@/components/AuthModal";
import { CartSidebar } from "@/components/CartSidebar";

export function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <body className="antialiased" suppressHydrationWarning>
      <AuthProvider>
        <CartProvider>
          {children}
          <AuthModal />
          <CartSidebar />
        </CartProvider>
      </AuthProvider>
    </body>
  );
}
