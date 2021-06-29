import { useState } from "react";
import React from "react"
import { CartTable } from "./components/Dashboard/index";
import { Header } from "./components/Header";
import { GlobalStyle, } from "./global";
import { ModalCart } from "./components/ModalCart/index";
import { CartProvider } from "./CartContext";

export function App() {
  const [isitemCartModalOpen, setIsitemCartModalOpen] = useState(false);

  function handleOpenCartModal() {
    setIsitemCartModalOpen(true);

  }

  function handleCloseCartModal() {
    setIsitemCartModalOpen(false);

  }
  return (

    <CartProvider>

      <Header onOpenCartModal={handleOpenCartModal} />
      <CartTable />
      <ModalCart
        isOpen={isitemCartModalOpen}
        onRequestClose={handleCloseCartModal}
      />

      <GlobalStyle />

    </CartProvider>

  );
}


