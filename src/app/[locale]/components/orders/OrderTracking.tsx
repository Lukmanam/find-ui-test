
import React from 'react';

const OrderTracking: React.FC = () => {
  return (
    <div className="p-6">
      <header className="mb-6">
        <button className="text-gray-500 mb-4">&larr; Back to Orders</button>
        <h1 className="text-2xl font-semibold">Order Tracking</h1>
        <p className="text-sm text-gray-600">View and update your product delivery information</p>
        <p className="mt-1 text-gray-800">Order number: <span className="font-medium">ADDGFG141474</span></p>
      </header>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Order Status</h2>
            <span className="text-green-500">Received Order</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white mx-auto">1</div>
              <p className="text-sm mt-2">On April 5</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 mx-auto">2</div>
              <p className="text-sm mt-2">In process</p>
              <p className="text-xs text-gray-500">On Friday, April 5th</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 mx-auto">3</div>
              <p className="text-sm mt-2">Confirmed</p>
              <p className="text-xs text-gray-500">On Friday, April 5th</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 mx-auto">4</div>
              <p className="text-sm mt-2">It was received</p>
              <p className="text-xs text-gray-500">On Friday, April 7th</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 mx-auto">5</div>
              <p className="text-sm mt-2">Delivery</p>
              <p className="text-xs text-gray-500">Expected Sunday 20th</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium">Order Information</h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-sm text-gray-600">Order date:</p>
              <p className="text-sm">2/2/2024</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Receipt date:</p>
              <p className="text-sm">2/20/2024</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Address:</p>
              <p className="text-sm">2B El-Modair St Abu Dhabi, UAE</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Payment method:</p>
              <p className="text-sm">Visa **56</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total money:</p>
              <p className="text-sm">5000 AED</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium">Product Details</h3>
          <p className="text-sm text-gray-600 mb-4">Once confirmed, the products cannot be canceled from the order</p>
          <div className="border-t border-b border-gray-200 py-4">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                <img src="/products/airpod-product.png" alt="Air pods" className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-medium">Air pods Apple</p>
                <p className="text-sm text-gray-500">300 AED</p>
                <p className="text-xs text-gray-400">This product cannot be exchanged or returned</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                <img src="/products/router.svg" alt="Air pods" className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-medium">Air pods Apple</p>
                <p className="text-sm text-gray-500">300 AED</p>
                <p className="text-xs text-gray-400">This product cannot be exchanged or returned</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                <img src="/products/printerHp.svg" alt="Air pods" className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-medium">Air pods Apple</p>
                <p className="text-sm text-gray-500">300 AED</p>
                <p className="text-xs text-gray-400">This product cannot be exchanged or returned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
