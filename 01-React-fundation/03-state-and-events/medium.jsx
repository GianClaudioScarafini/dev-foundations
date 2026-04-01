// 03 — State and Events — Medium
import { useState } from 'react'

// ─────────────────────────────────────────────
// 1. Like button with count
//    - Starts at 0 likes
//    - Clicking "Like" increments the count
//    - Clicking again "Unlikes" and decrements
//    - Show a heart icon: ♡ when not liked, ♥ when liked
//    - You can only like once (toggle, not increment on every click)

function LikeButton() {
  // your code here
}


// ─────────────────────────────────────────────
// 2. Shopping cart
//    Given the products below, render a list.
//    Each product has an "Add to cart" button.
//    Show the cart count in a badge at the top.
//    When a product is in the cart, show "Remove" instead of "Add to cart".
//
//    State shape hint: store an array of product IDs in the cart.

const products = [
  { id: 1, name: 'React Course', price: 49 },
  { id: 2, name: 'Node.js Bootcamp', price: 69 },
  { id: 3, name: 'TypeScript Handbook', price: 29 },
]

function ShoppingCart() {
  // your code here
}


// ─────────────────────────────────────────────
// 3. Lift state up
//    TemperatureInput lets the user type a temperature.
//    TemperatureDisplay shows it in both Celsius and Fahrenheit.
//    They are siblings — the parent App3 must own the state.
//
//    Formula: F = (C × 9/5) + 32

function TemperatureInput({ celsius, onChange }) {
  // your code here
}

function TemperatureDisplay({ celsius }) {
  // your code here
}

function App3() {
  // your code here — own the state here
  return (
    <div>
      <TemperatureInput />
      <TemperatureDisplay />
    </div>
  )
}


export default ShoppingCart
