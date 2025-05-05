import React from 'react';
import { IoCheckmarkCircleOutline } from "react-icons/io5";


function Modal({ cart, total, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[300px] md:w-[400px]">
        <div className="items-center space-x-2 mb-4">
          <span className="text-green-600 text-2xl"><IoCheckmarkCircleOutline  className='m-1'/></span>
          <h2 className="text-xl font-bold text-gray-800">Order Confirmed</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">We hope you enjoy your food!</p>

        <div className="bg-orange-50 rounded-lg p-4 mb-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-3">
                <img src={item.image.desktop} alt={item.name} className="w-10 h-10 rounded object-cover" />
                <div>
                  <h4 className="text-sm font-semibold">{item.name}</h4>
                  <p className="text-xs text-gray-500">
                    {item.quantity}x &nbsp; ${parseFloat(item.price).toFixed(2)}
                  </p>
                </div>
              </div>
              <p className="text-sm font-medium">${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
          <hr className="my-2" />
          <div className="flex justify-between text-sm font-semibold">
            <span>Order Total</span>
            <span>${total}</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-700 transition"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default Modal;
