import { GiShoppingCart } from 'react-icons/gi'
import useCart from '../context/useCart'

const CartButton = ({ showCart, setShowCart }) => {
  const { cartItems } = useCart()

  return (
    <button
      className="w-16 h-16 bg-black flex justify-center items-center"
      onClick={() => setShowCart(!showCart)}
    >
      <GiShoppingCart className="text-white " size={30} onClick={() => setShowCart(!showCart)} />
      <span class="inline-flex items-center justify-center p-1   text-xs font-bold leading-none bg-yellow-400 absolute rounded-full right-3 bottom-3">
        {cartItems.reduce((totalQuantity, currentItem) => totalQuantity + currentItem.quantity, 0)}
      </span>
    </button>
  )
}

export default CartButton
