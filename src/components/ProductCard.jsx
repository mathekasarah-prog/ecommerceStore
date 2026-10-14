import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardFooter, } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { useCart } from '../context/CartContext'


function ProductCard({ product }) {

  const { addToCart } = useCart();

  return (
    <Card className='p-4 max-w-7xl mx-auto hover:bg-gray-200'>
    <div className='p-4 max-w-7xl mx-auto hover:bg-gray-200'>
        <img 
        src={product.image} 
        alt={product.title} 
        className='w-full h-64 object-contain mb-4' 
        />
        </div>
        <CardContent className='p-4'>
          <Badge variant="secondary" className='mb-2'>
            {product.category}
          </Badge>
        <h2 className='text-lg font-bold mb-2'>{product.title}</h2>
        <p className='text-gray-700 mb-2'>
            ${product.price.toFixed(2)}
            </p>
            </CardContent>
            <CardFooter className='p-4 flex flex-col gap-2 pt-0'>
            <Button 
            className='w-full'
            onClick = {() => addToCart(product)}>
              Add to Cart
              </Button>
              <Button asChild variant="secondary" className='w-full'>
        <Link to={`/products/${product.id}`} 
        className="mt-4 block w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-white hover:bg-gray-700"> 
        View Product
        </Link>
        </Button>
        </CardFooter>
    </Card>
  )
}

export default ProductCard