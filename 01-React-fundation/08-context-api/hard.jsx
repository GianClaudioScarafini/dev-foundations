// 08 — Context API — Hard
import { createContext, useContext, useState, useEffect } from 'react'

// ─────────────────────────────────────────────
// Challenge: Shopping cart with context + localStorage persistence
//
// Build a cart system used across multiple "pages" (no router — conditional render).
//
// CartContext provides:
//   {
//     items,           // [{ product, quantity }]
//     addItem,         // (product) => void  — increment qty if already in cart
//     removeItem,      // (productId) => void — remove completely
//     updateQty,       // (productId, qty) => void — set quantity, remove if 0
//     clearCart,       // () => void
//     total,           // number — sum of price * quantity
//     itemCount,       // number — total items across all quantities
//   }
//
// Persistence: sync cart to localStorage on every change, restore on load
// Use your useLocalStorage hook from 07 if you built it, otherwise inline it.
//
// Pages (conditional render — no router):
//
// 1. ProductCatalog — grid of products with "Add to cart" button each
//    Show current cart quantity badge on each product if in cart
//
// 2. CartPage — list of cart items with:
//    - Quantity selector (+ / - buttons)
//    - Remove button
//    - Line total (price × qty)
//    - Cart total at the bottom
//    - "Continue Shopping" button
//    - Empty cart message when cart is empty
//
// 3. Navbar — shows cart icon with itemCount badge
//    Clicking navigates to CartPage
//
// Products data:
const products = [
  { id: 1, name: 'React Course', price: 49, category: 'Frontend' },
  { id: 2, name: 'Node.js Bootcamp', price: 69, category: 'Backend' },
  { id: 3, name: 'TypeScript Handbook', price: 29, category: 'Language' },
  { id: 4, name: 'PostgreSQL Mastery', price: 39, category: 'Database' },
  { id: 5, name: 'Docker for Devs', price: 45, category: 'DevOps' },
]

// Design note: the "page" state (catalog vs cart) — should it live in context or in App?
// Write your reasoning as a comment before you start:
// ...

// your code here


export default function App() {
  return (
    // <CartProvider>
    //   <ShopApp />
    // </CartProvider>
    <p>Build the components above, then uncomment</p>
  )
}
