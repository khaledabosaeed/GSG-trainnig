import React from "react";

interface TopBannerProps {
  message: string;
  actionText?: string;
}

export const TopBanner: React.FC<TopBannerProps> = ({
  message,
  actionText,
}) => {
  return (
    <div className="bg-black text-white py-3 text-center text-sm">
      <p>
        {message}{" "}
        {actionText && (
          <a
            href="/products"
            className="font-semibold underline cursor-pointer ml-2"
          >
            {actionText}
          </a>
        )}
      </p>
    </div>
  );
};
