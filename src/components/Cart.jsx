import React, { useState } from 'react';
import { TiShoppingCart } from "react-icons/ti";
import Modal from './Modal';

function Cart({ cart, setCart }) {
  const [showModal, setShowModal] = useState(false);

  const increase = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrease = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const remove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const confirmOrder = () => {
    setShowModal(true);
  };

  const startNewOrder = () => {
    setCart([]);
    setShowModal(false);
  };

  const getTotal = () => {
    return cart.reduce((total, item) =>
      total + Number(item.price) * item.quantity, 0
    ).toFixed(2);
  };

  return (
    <div className="p-4 border rounded-md bg-white">
      <div className="flex items-center gap-2">
      <TiShoppingCart className='size-10' /><h2 className=" flex text-xl font-bold text-orange-700">  Your Cart</h2>
      </div>
      

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="p-5 grid grid-cols-3">
              <div className="col-span-2">
                <h3 className="font-semibold">{item.name}</h3>
                <p>Price: ${Number(item.price).toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${(Number(item.price) * item.quantity).toFixed(2)}</p>
              </div>
              <div className="space-x-3 col-span-1 flex items-center justify-end">
                <button onClick={() => increase(item.id)} className="bg-green-600 text-white px-3 rounded">+</button>
                <button onClick={() => decrease(item.id)} className="bg-yellow-600 text-white px-3 rounded">-</button>
                <button onClick={() => remove(item.id)} className="px-3 rounded">❌</button>
              </div>
            </div>
          ))}

          <div className="mt-4 text-right">
            <p className="font-bold">Total: ${getTotal()}</p>
            <div className="mt-2 space-x-3">
              <button onClick={confirmOrder} className="bg-orange-600 text-white px-6 mb-2 py-2 rounded-full">Confirm Order</button>
              <button onClick={startNewOrder} className="bg-gray-500 text-white px-4 py-2 rounded-full">Start New Order</button>
            </div>
          </div>
        </>
      )}

      {showModal && (
        <Modal
          cart={cart}
          total={getTotal()}
          onClose={startNewOrder}
        />
      )}
    </div>
  );
}

export default Cart;
