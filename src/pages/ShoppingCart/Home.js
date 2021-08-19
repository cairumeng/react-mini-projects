import axios from 'axios'
import { useEffect, useState } from 'react'
import Spinner from '../../components/Spinner/Spinner'
import Product from './components/Product'
import Sizes from './components/Sizes'
import { CartContextProvider } from './context/useCart'
import Cart from './components/Cart'
import CartButton from './components/CartButton'

const SIZES = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL']

const Home = () => {
  const [products, setProducts] = useState(null)
  const [order, setOrder] = useState('0')
  const [selectedSizes, setSelectedSizes] = useState(
    SIZES.reduce((acc, curr) => {
      acc[curr] = false
      return acc
    }, {}),
  )
  const [showCart, setShowCart] = useState(false)

  useEffect(
    () =>
      axios
        .get('https://react-shopping-cart-67954.firebaseio.com/products.json')
        .then((response) => {
          setProducts(response.data.products)
        }),
    [],
  )

  if (!products) return <Spinner />
  let selectedProducts = products.filter((product) =>
    product.availableSizes.some((size) => selectedSizes[size] === true),
  )
  let orderedProducts = selectedProducts.length === 0 ? products : selectedProducts
  if (order === '1') {
    orderedProducts.sort((a, b) => a.price - b.price)
  } else if (order === '2') {
    orderedProducts.sort((a, b) => b.price - a.price)
  }

  return (
    <CartContextProvider>
      <div className="flex justify-end fixed z-30 top-0 right-0">
        <CartButton setShowCart={setShowCart} showCart={showCart} />
      </div>
      {showCart && (
        <div className="w-96 h-screen fixed right-0 top-0 z-50 slide-in-right">
          <Cart setShowCart={setShowCart} showCart={showCart} />
        </div>
      )}
      <div className="flex p-5 mt-5">
        <div className="w-1/6">
          <Sizes selectedSizes={selectedSizes} setSelectedSizes={setSelectedSizes} />
        </div>

        <div className="w-5/6">
          <div className="flex justify-between text-sm font-light">
            <div>{orderedProducts.length} products found.</div>
            <div>
              <span>Order by </span>
              <select
                id="order"
                className="border p-2 ml-5"
                onChange={(e) => setOrder(e.target.value)}
              >
                <option value="0">Select</option>
                <option value="1">Lowest to highest</option>
                <option value="2">highest to lowest</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap">
            {orderedProducts.map((product, index) => (
              <Product product={product} key={index} setShowCart={setShowCart} />
            ))}
          </div>
        </div>
      </div>
    </CartContextProvider>
  )
}

export default Home
