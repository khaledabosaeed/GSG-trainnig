import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  imageSrc,
  
}) => {
  return (
    <div className="bg-black text-white rounded-lg p-12 flex items-center justify-between">
      <div>
        <div className="flex items-center space-x-4 mb-6">
          <svg
            width="40"
            height="49"
            viewBox="0 0 40 49"
            fill="none"
            className="text-white"
          >
            <path
              d="M33.5 8.5H31.5C31.5 6.29086 30.6571 4.16174 29.1569 2.58579C27.6566 1.00984 25.5986 0.125 23.5 0.125H16.5C14.4014 0.125 12.3434 1.00984 10.8431 2.58579C9.34286 4.16174 8.5 6.29086 8.5 8.5H6.5C4.77609 8.5 3.12279 9.21116 1.90381 10.4801C0.684819 11.7491 0 13.4674 0 15.25V42.25C0 44.0326 0.684819 45.7509 1.90381 47.0199C3.12279 48.2888 4.77609 49 6.5 49H33.5C35.2239 49 36.8772 48.2888 38.0962 47.0199C39.3152 45.7509 40 44.0326 40 42.25V15.25C40 13.4674 39.3152 11.7491 38.0962 10.4801C36.8772 9.21116 35.2239 8.5 33.5 8.5ZM16.5 4.625H23.5C24.4283 4.625 25.3185 5.00937 25.9749 5.69515C26.6313 6.38093 27 7.30435 27 8.5H13C13 7.30435 13.3687 6.38093 14.0251 5.69515C14.6815 5.00937 15.5717 4.625 16.5 4.625ZM35 42.25C35 43.0456 34.684 43.8087 34.1213 44.3713C33.5587 44.934 32.7956 45.25 32 45.25H8C7.20435 45.25 6.44129 44.934 5.87868 44.3713C5.31607 43.8087 5 43.0456 5 42.25V15.25C5 14.4544 5.31607 13.6913 5.87868 13.1287C6.44129 12.566 7.20435 12.25 8 12.25H32C32.7956 12.25 33.5587 12.566 34.1213 13.1287C34.684 13.6913 35 14.4544 35 15.25V42.25Z"
              fill="white"
            />
          </svg>
          <span className="text-lg">{subtitle}</span>
        </div>
        <h2 className="text-5xl text-white font-semibold mb-6 leading-tight">{title}</h2>
        <a
          href='/products'
          className="cursor-pointer flex items-center text-white border-b-2 border-white pb-1 hover:opacity-80"
        >
          Shop Now
          <ChevronRight size={20} className="ml-2" />
        </a>
      </div>
      <div>
        <img src={imageSrc} alt={title} className="w-96" />
      </div>
    </div>
  );
};
