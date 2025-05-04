import React, { useState, useEffect } from 'react';
import Cart from './Cart';

import belt from '../components/images/belt.jpg';
import gloves from '../components/images/gloves.jpg';
import hat from '../components/images/hat.jpg';
import dress from '../components/images/dress.jpg';
import jacket from '../components/images/jacket.jpg';
import jeans from '../components/images/jeans.webp';
import pajamas from '../components/images/pajamas.jpg';
import scarf from '../components/images/scarf.jpg';
import short from '../components/images/short.jpg';
import sneakers from '../components/images/sneakers.jpg';
import swimsuit from '../components/images/swimsuit.jpg';
import sweater from '../components/images/sweater.jpg';
import shirt from '../components/images/shirt.jpg';
import tshirt from '../components/images/tshirt.jpg';
import sandal from '../components/images/sandal.jpg';


function ProductList() {

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const [products] = useState([
   
    { id: 1, name: "Hat", price: 10, image: hat },
    { id: 2, name: "Jeans", price: 35, image: jeans },
    { id: 3, name: "Sneakers", price: 75, image: sneakers },
    { id: 1, name: "Scarf", price: 10, image: scarf },
    { id: 5,name: "Belt", price: 5, image: belt },
    { id: 6, name: "Jacket", price: 40, image: jacket },
    { id: 7, name: "Shorts", price: 14, image: short },
    { id: 8, name: "Sandal", price: 30, image: sandal },
    { id: 9, name: "Shirt", price: 5, image: shirt },
    { id: 10, name: "Gloves", price: 20, image: gloves },
    { id: 11, name: "Sweater", price: 30, image: sweater },
    { id: 12, name: "Pajamas", price: 20, image: pajamas },
    { id: 13, name: "Swimsuit", price: 40, image: swimsuit },
    { id: 14, name: "T-shirt", price: 15, image: tshirt },
    { id: 15, name: "Dress", price: 10, image: dress },
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
      <div className='grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 gap-10 p-5 border-8 border-black rounded-lg'>
        <div className='grid col-span-2 sm:w-full lg:grid-cols-3 md:grid-cols-2 md:w-full gap-10 bg-white border rounded-md p-5'>
          {products.map((product) => (
            <div key={product.id} className="product-card bg-white border rounded-md p-5">
              <img
                src={product.image}
                alt={product.name}
                className="product-image rounded-md shadow-md shadow-black hover:border-2 hover:border-orange-600"
              />
              <figcaption>
                <h2 className='font-bold text-lg'>{product.name}</h2>
                <p className='text-orange-700 font-semibold'>${product.price}</p>

                <button
                onClick={() => {
                  addToCart(product);
                  console.log(`${product.name} added to cart!`);
               }}
                className=" text-black w-32 p-2 border-1 border-black rounded-full hover:bg-orange-700">
                Add to Cart
                </button>

              </figcaption>
            </div>
          ))}
        </div>

        <div className="col-span-1">
          <Cart cart={cart} setCart={setCart} />
        </div>
      </div>
    </>
  );
}

export default ProductList;
