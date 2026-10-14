import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  if (cartItems.length === 0) {
  return (
    <div className='p-4 max-w-7xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Shopping Cart</h1>
      <p className = "text-gray-600">Your cart is empty.</p>
    </div>
  )
}

const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); 

return (
  <div className = 'p-4 max-w-7xl mx-auto'>
    <h1 className='text-2xl font-bold mb-4'>Shopping Cart</h1>
    <h2 className = "text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</h2>
    <div className = "space-y-4">
      {cartItems.map((item) => (
        <div 
        key={item.id} 
        className = "flex items-center justify-between border p-4 rounded">
          <img 
          src={item.image}
          alt={item.title}
          className = "w-16 h-16 object-contain mr-4"
          />
          <div className = "flex-1">
            <h2 className = "text-lg font-semibold">{item.title}</h2>
            <p className = "text-gray-600">${item.price} x {item.quantity}</p>
            <div className = "flex items-center mt-2">
              <button 
              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
              className = "text-gray-600 hover:text-gray-800">
                -
              </button>
              <span>{item.quantity}</span>
              <button 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className = "text-gray-600 hover:text-gray-800">
                +
              </button>
            </div>
          </div>
          <button 
          onClick={() => removeFromCart(item.id)}
          className = "text-red-600 hover:text-red-800">
            Remove
          </button>
        </div>
      ))}
    </div>
    <div className = "mt-8 flex flex-col items-end gap-4">
      <h2 className = "text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</h2>
      <div className = "flex flex-wrap justify-end gap-4">
      <Button asChild variant="outline">
        <Link to="/products">Continue Shopping</Link>
      </Button>
    <Button asChild size="lg">
      <Link to="/checkout">Proceed to Checkout</Link>
    </Button>
    </div>
    </div>
  </div>
)
}

export default Cart