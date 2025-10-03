import React from 'react';

interface PromoBannerProps {
  category?: string;
  title: string;
  imageSrc: string;
  countdown?: {
    hours: number;
    days: number;
    minutes: number;
    seconds: number;
  };
  onBuyNow?: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({
  category,
  title,
  imageSrc,
  countdown,
  onBuyNow
}) => {
  return (
    <div className="bg-black text-white rounded-lg p-12 flex items-center justify-between">
      <div>
        {category && <p className="text-[#00FF66] font-semibold mb-6">{category}</p>}
        <h2 className="text-5xl text-white font-semibold mb-8 leading-tight">{title}</h2>

        {countdown && (
          <div className="flex items-center space-x-6 mb-8">
            <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
              <p className="text-xl font-bold">{countdown.hours}</p>
              <p className="text-xs">Hours</p>
            </div>
            <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
              <p className="text-xl font-bold">{countdown.days}</p>
              <p className="text-xs">Days</p>
            </div>
            <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
              <p className="text-xl font-bold">{countdown.minutes}</p>
              <p className="text-xs">Minutes</p>
            </div>
            <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
              <p className="text-xl font-bold">{countdown.seconds}</p>
              <p className="text-xs">Seconds</p>
            </div>
          </div>
        )}

        <button
          onClick={onBuyNow}
          className="bg-[#00FF66] text-white px-10 py-3 rounded hover:bg-green-600"
        >
          Buy Now!
        </button>
      </div>
      <div>
        <img src={imageSrc} alt={title} className="w-96" />
      </div>
    </div>
  );
};
