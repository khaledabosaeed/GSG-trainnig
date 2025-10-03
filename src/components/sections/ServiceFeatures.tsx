import React from 'react';
import { Headphones } from 'lucide-react';

interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ServiceFeatures: React.FC = () => {
  const features: ServiceFeature[] = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M2 8L20 2L38 8V14C38 26 32 34 20 38C8 34 2 26 2 14V8Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path d="M14 20L18 24L26 16" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      ),
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140'
    },
    {
      icon: <Headphones size={32} className="text-white" />,
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M2 8L20 2L38 8V14C38 26 32 34 20 38C8 34 2 26 2 14V8Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path d="M14 20L18 24L26 16" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      ),
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {features.map((feature, index) => (
        <div key={index} className="text-center">
          <div className="bg-gray-300 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <div className="bg-black rounded-full w-14 h-14 flex items-center justify-center">
              {feature.icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};
