import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import productsData from '../data/data.json';


function ProductList() {

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const[products, setProducts] = useState(productsData);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/data.json');
        if (!response.ok) {
          throw new Error(`error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };

    fetchProducts();
  }, []);
  

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  

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
      <div className='grid grid-cols-1 lg:grid-cols-4  md:grid-cols-2 border-8 border-black rounded-lg'>
        <div className='grid col-span-3 sm:w-full lg:grid-cols-3 md:grid-cols-2 md:w-full gap-10 bg-white border rounded-md p-5'>
          {products.map((product) => (
            <div key={product.id} className="product-card bg-white border rounded-md">
              <img
                src={product.image.desktop}
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
                className=" text-black w-full border-1 border-black rounded-full hover:bg-orange-600 focus:ring-4 focus:ring-orange-500">
                  🛒 Add to Cart
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
