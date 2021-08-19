import useCart from '../context/useCart'

const Product = ({ product, setShowCart }) => {
  const { addToCart } = useCart()
  return (
    <div className="w-1/4 mt-20 relative">
      {product.isFreeShipping && (
        <div className="bg-black text-white text-xs font-extralight absolute top-0 right-0 p-1">
          Free shipping
        </div>
      )}
      <img src={`/cart-images/${product.id + 1}.jpg`} />
      <div className="text-center mt-2 truncate">{product.title}</div>
      <div className="text-center mt-2">
        {product.currencyFormat} <span className="text-2xl">{product.price.toFixed(2)}</span>
      </div>
      <div className="flex justify-center mt-3">
        <button
          className="bg-black text-white py-2 w-4/5 hover:bg-yellow-400"
          onClick={() => {
            addToCart(product)
            setShowCart(true)
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}
export default Product
