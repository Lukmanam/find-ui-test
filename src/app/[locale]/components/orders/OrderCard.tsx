import React from 'react';
import Link from 'next/link';

interface Item {
  name: string;
  price: string;
  imageSrc: string;
}
interface TrackingStep {
  date: string;
  description: string;
  completed: boolean;
}

interface OrderCardProps {
  sellerName: string;
  items: Item[];
  orderNumber: string;
  orderTime: string;
  Address:string;
  status: 'In Process' | 'Complete';
  trackingSteps: TrackingStep[];
}

const OrderCard: React.FC<OrderCardProps> = ({ sellerName, items, orderNumber, orderTime, status }) => {
  
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-md bg-white">
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold">Seller Name: {sellerName}</span>
        <div className='flex flex-col space-y-2'>
          {status === 'In Process' ? (
            <>
            <Link href={`/my_account/orderTracking`}></Link>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Order Tracking</button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded">Edit Order</button>
            </>
          ) : (
            <>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2"><div className='flex pl-1 pr-1'><img src="/icons/review.svg" alt="Review" className="w-4 h-4 mr-1"/>Review</div></button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded">Return Order</button>
            </>
          )}
        </div>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img src={item.imageSrc} alt={item.name} className="w-12 h-12" />
            <div>
              <div>{item.name}</div>
              <div>{item.price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end ">
        <div className="text-right">
          <div>Order number: {orderNumber}</div>
          <div>On the day: {orderTime}</div>
        </div>
      </div>
    </div>
  );
  
};

export default OrderCard;
