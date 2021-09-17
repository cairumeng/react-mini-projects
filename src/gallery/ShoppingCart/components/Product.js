import useCart from '../context/useCart'

const Product = ({ product, setShowCart }) => {
  const { addToCart } = useCart()
  return (
    <div className="w-1/2 md:w-1/4 mt-20 relative">
      {product.isFreeShipping && (
        <div className="hidden md:block bg-black text-white text-xs font-extralight absolute top-0 right-0 p-1">
          Free shipping
        </div>
      )}
      <img src={`/cart-images/${product.id + 1}.jpg`} />
      <div className="text-center mt-2 truncate text-sm">{product.title}</div>
      <div className="text-center mt-2">
        {product.currencyFormat} <span className="md:text-2xl">{product.price.toFixed(2)}</span>
      </div>
      <div className="flex justify-center mt-3">
        <button
          className="bg-black text-white py-2 text-sm w-2/3 md:w-4/5 hover:bg-yellow-400"
          onClick={() => {
            addToCart(product)
            setShowCart(true)
          }}
        >
          Add
        </button>
      </div>
    </div>
  )
}
export default Product
