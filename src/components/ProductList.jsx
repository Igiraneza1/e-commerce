import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import productsData from '../data/data.json';


function ProductList() {

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const[products] = useState(productsData);

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
                className="product-image rounded-md shadow-md shadow-black hover:border-2 hover:border-orange-600 "
              />
              <figcaption>
                <h2 className='font-bold text-lg'>{product.name}</h2>
                <p className='text-orange-700 font-semibold'>${product.price}</p>

                <button
                onClick={() => {
                  addToCart(product);
                  console.log(`${product.name} added to cart!`);
               }}
                className=" text-black w-32 p-2 border-1 border-black rounded-full hover:bg-orange-700 focus:ring-4 focus:ring-orange-500">
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
