import React from 'react';
import OrderCard from './OrderCard';

const ordersinProcess = [
  {
    sellerName: 'Karim Muhammad',
    items: [
      { name: 'Air pods Apple', price: '300 AED', imageSrc: '/products/airpod-product.png' },
      { name: 'Router WE', price: '300 AED', imageSrc: '/products/router.svg' },
      { name: 'Printer HP', price: '300 AED', imageSrc: '/products/printerHp.svg' },
    ],
    orderNumber: 'NGG41111',
    orderTime: '10:50PM',
    status: 'In Process',
    trackingSteps: [
      { date: '05-04-2024', description: 'Received order', completed: true },
      { date: '06-04-2024', description: 'Order processed', completed: true },
      { date: '07-04-2024', description: 'Shipped', completed: true },
      { date: '08-04-2024', description: 'Delivered', completed: false },
    ],
    Address: '28 El-Modair St Abu Dhabi, UAE', 
    paymentMethod: {
      type: 'card',
      detail: 'Visa**56',
      total: 5000
    }
  },
  {
    sellerName: 'Karim Muhammad',
    items: [
      { name: 'Air pods Apple', price: '300 AED', imageSrc: '/products/airpod-product.png' },
      { name: 'Router WE', price: '300 AED', imageSrc: '/products/router.svg' },
      { name: 'Printer HP', price: '300 AED', imageSrc: '/products/printerHp.svg'},
    ],
    orderNumber: 'NGG41111',
    orderTime: '10:50PM',
    status: 'In Process',
    trackingSteps: [
      { date: '05-04-2024', description: 'Received order', completed: true },
      { date: '06-04-2024', description: 'Order processed', completed: true },
      { date: '07-04-2024', description: 'Shipped', completed: true },
      { date: '08-04-2024', description: 'Delivered', completed: false },
    ],
    Address: '28 El-Modair St Abu Dhabi, UAE', 
    paymentMethod: {
      type: 'card',
      detail: 'Visa**56',
      total: 5000
    }
  },  
];

const ordersCompleted = [
  {
    sellerName: 'Karim Muhammad',
    items: [
      { name: 'Air pods Apple', price: '300 AED', imageSrc: '/products/airpod-product.png' },
      { name: 'Router WE', price: '300 AED', imageSrc: '/products/router.svg' },
      { name: 'Printer HP', price: '300 AED', imageSrc: '/products/printerHp.svg' },
    ],
    orderNumber: 'NGG41111',
    orderTime: '10:50PM',
    status: 'complete',
    trackingSteps: [
      { date: '05-04-2024', description: 'Received order', completed: true },
      { date: '06-04-2024', description: 'Order processed', completed: true },
      { date: '07-04-2024', description: 'Shipped', completed: true },
      { date: '08-04-2024', description: 'Delivered', completed: true },
    ],
    Address: '28 El-Modair St Abu Dhabi, UAE', 
    paymentMethod: {
      type: 'card',
      detail: 'Visa**56',
      total: 5000
    }
  }
];

const OrderList: React.FC = () => {
  return (
    <div className="p-2">
      <h1 className="text-xl font-bold mb-4">Orders</h1>
      <h2 className='text-2xl  mb-2'>in Process</h2>
      <div>
        {ordersinProcess.map((order, index) => (
          <OrderCard
            key={index}
            sellerName={order.sellerName}
            items={order.items}
            orderNumber={order.orderNumber}
            orderTime={order.orderTime}
            status={order.status as 'In Process' | 'Complete'} 
            Address={order.Address} 
            trackingSteps={order.trackingSteps}
          />
        ))}
      </div>
      <h2 className='text-2xl  mb-2'>Completed</h2>
      <div>
        {ordersCompleted.map((order, index) => (
          <OrderCard
            key={index}
            sellerName={order.sellerName}
            items={order.items}
            orderNumber={order.orderNumber}
            orderTime={order.orderTime}
            status={order.status as 'In Process' | 'Complete'} 
            Address={order.Address} 
            trackingSteps={order.trackingSteps}
          />
        ))}
      </div>
    </div>
  );
}

export default OrderList;

