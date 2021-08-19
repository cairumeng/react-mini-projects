import { GiShoppingCart } from 'react-icons/gi'
import useCart from '../context/useCart'

const Cart = ({ showCart, setShowCart }) => {
  const { cartItems, addToCart } = useCart()

  return (
    <>
      <div className="absolute -left-12 ">
        <button
          className="absolute w-12 h-12 bg-black text-white text-2xl"
          onClick={() => setShowCart(!showCart)}
        >
          x
        </button>
      </div>
      <div className="bg-black text-white h-full">
        <div className="h-28 flex justify-center items-center border-b-2 border-gray-900">
          <GiShoppingCart className="text-white" size={50} />
          <span className="text-2xl ml-2 font-bold">Cart</span>
        </div>
        <div className="overflow-y-auto scroll-black" style={{ height: 'calc(100vh - 16rem)' }}>
          {cartItems.length === 0 ? (
            <div className="text-center mt-10">
              Add some products in your cart! <br />
              {':)'}
            </div>
          ) : (
            cartItems.map((cartItem, index) => (
              <div key={index}>
                <div className="flex justify-between h-32 p-5">
                  <div className="flex">
                    <img src={`/cart-images/${cartItem.product.id + 1}.jpg`} className="h-full" />
                    <div className="text-sm ml-3 mt-3 ">
                      <div> {cartItem.product.title}</div>
                      <div className="text-gray-500">
                        {cartItem.product.availableSizes[0]} | {cartItem.product.description}
                      </div>
                      <div className="text-gray-500">Quantity : {cartItem.quantity}</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className="text-lg font-bold mb-3"
                      onClick={() => addToCart(cartItem.product, -cartItem.quantity)}
                    >
                      x
                    </button>
                    <div className="text-yellow-400">
                      {cartItem.product.currencyFormat} {cartItem.product.price.toFixed(2)}
                    </div>
                    <div className="mt-2">
                      <button className="border w-5" onClick={() => addToCart(cartItem.product, 1)}>
                        +
                      </button>
                      <button
                        className="border w-5"
                        onClick={() => addToCart(cartItem.product, -1)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-5 border-t-2 border-gray-900 shadow h-30">
          <div className="flex justify-between items-center">
            <div>Subtotal</div>{' '}
            <div className="text-2xl text-yellow-400">
              ${' '}
              {cartItems
                .reduce(
                  (sum, currentItem) => sum + currentItem.quantity * currentItem.product.price,
                  0,
                )
                .toFixed(2)}
            </div>
          </div>
          <button className="border border-white w-full h-10 text-white mt-5">Checkout</button>
        </div>
      </div>
    </>
  )
}
export default Cart
