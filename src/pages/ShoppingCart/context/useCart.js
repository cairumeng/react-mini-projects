import { createContext, useContext, useState } from 'react'

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const addToCart = (product, increment = 1) => {
    let foundTarget = false
    const nextCartItems = cartItems
      .map((item) => {
        if (item.product.id === product.id) {
          foundTarget = true
          if (item.quantity + increment === 0) return null
          else return { ...item, quantity: item.quantity + increment }
        } else {
          return item
        }
      })
      .filter(Boolean)
    if (!foundTarget) {
      setCartItems([...cartItems, { product, quantity: 1 }])
    } else {
      setCartItems(nextCartItems)
    }
  }
  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export default useCart
