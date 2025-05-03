import React from 'react';
import { useState } from 'react';
import Cart from './Cart';

import belt from '../components/images/belt.jpg';
import gloves from '../components/images/gloves.jpg';
import hat from '../components/images/hat.jpg';
import headset from '../components/images/headset.jpg';
import jacket from '../components/images/jacket.jpg';
import jeans from '../components/images/jeans.webp';
import pajamas from '../components/images/pajamas.jpg';
import scarf from '../components/images/scarf.jpg';
import short from '../components/images/short.jpg';
import sneakers from '../components/images/sneakers.jpg';
import swimsuit from '../components/images/swimsuit.jpg';
import sweater from '../components/images/sweater.jpg';
import socks from '../components/images/socks.jpg';
import tshirt from '../components/images/tshirt.webp';
import  watch from '../components/images/watch.jpg';



function ProductList() {

    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([
        {
          "id": 1,
          "name": "T-shirt",
          "price": 15,
          "image": tshirt,
          "quality": 1
        },
        {
          "id": 2,
          "name": "Jeans",
          "price": 35,
          "image": jeans,
          "quality": 1
        },
    {
          "id": 3,
          "name": "Sneakers",
          "price": 75,
          "image": sneakers,
          "quality": 1
        },
        {
          "id": 4,
          "name": "Hat",
          "price": 10,
          "image": hat,
          "quality": 1
        },
        {
          "id": 5,
          "name": "Socks",
          "price": 10,
          "image": socks,
          "quality": 1
        },
        {
          "id": 6,
          "name": "Jacket",
          "price": 40,
          "image": jacket,
          "quality": 1
        },
        {
          "id": 7,
          "name": "Shorts",
          "price": 14,
          "image": short,
          "quality": 1
        },
        {
          "id": 8,
          "name": "Belt",
          "price": 5,
          "image": belt,
          "quality": 1
        },
        {
          "id": 9,
          "name": "Scarf",
          "price": 10,
          "image": scarf,
          "quality": 1
        },
        {
          "id": 10,
          "name": "Gloves",
          "price": 20,
          "image": gloves,
          "quality": 1
        },
        {
          "id": 11,
          "name": "Sweater",
          "price": 30,
          "image": sweater,
          "quality": 1
        },
        {
          "id": 12,
          "name": "Pajamas",
          "price": 20,
          "image": pajamas,
          "quality": 1
        },
        {
          "id": 13,
          "name": "Swimsuit",
          "price": 40,
          "image": swimsuit,
          "quality": 1
        },
        {
          "id": 14,
          "name": "Watch",
          "price": 30,
          "image": watch,
          "quality": 1
        },
        {
          "id": 15,
          "name": "Headset",
          "price": 10,
          "image": headset,
          "quality": 1
        },
      ]);

    const addToCart = (product) => {
        const exists = cart.find(item => item.id === product.id);
        if (exists) {
          setCart(cart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ));
        } else {
          setCart([...cart, { ...product, quantity: 1 }]);
        }
      };
      

      
  return (
    <>
    
    <div className='grid grid-cols-2 sm:grid-rows-2'>
    <div className='grid grid-cols-3 gap-10 bg-white border rounded-md p-5'>
      {products.map((product) => (
        <div key={product.id} className="product-card mt-3">
          <img src={product.image} alt={product.name} className="product-image size-48 rounded-md shadow-md shadow-black hover:border-2 hover:border-orange-600" />
          <figcaption>
            <h2 className='font-bold text-lg'>{product.name}</h2>
            <p className='text-orange-700 font-semibold'>${product.price}</p>
            <button onClick={() => addToCart(product)} className="rounded-full w-32 p-2 border-2-black">
              Add to Cart
            </button>
          </figcaption>
        </div>
      ))}
    </div>
  
    <Cart cart={cart} setCart={setCart} />
    </div>

    </>
  

  )
}

export default ProductList;