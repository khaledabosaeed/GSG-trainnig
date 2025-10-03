import React from 'react';

interface TopBannerProps {
  message: string;
  actionText?: string;
  onActionClick?: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({
  message,
  actionText,
  onActionClick
}) => {
  return (
    <div className="bg-black text-white py-3 text-center text-sm">
      <p>
        {message}{' '}
        {actionText && (
          <span
            onClick={onActionClick}
            className="font-semibold underline cursor-pointer ml-2"
          >
            {actionText}
          </span>
        )}
      </p>
    </div>
  );
};
