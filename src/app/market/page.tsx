"use client";
import Navbar from "../components/navbar";
import React, { useState } from "react";

interface PageProps {
  className?: string;
}

const Page: React.FC<DetailProps> = ({ className }) => {
  const [showToaster, setShowToaster] = useState(false);

  const handleBuyClick = () => {
    // 當按下 "Buy" 按鈕時，設置 showToaster 為 true，從而顯示 toaster
    setShowToaster(true);
  };

  return (
    <div className="flex flex-col min-h-screen items-center">
      <Navbar />
      {showToaster && (
        <div className="mt-[70px] toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
          </div>
        </div>
      )}
      <div className="mt-[120px] w-1/2 border-2 card card-side bg-base-100 shadow-xl">
        <figure>
          <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">SpiderMan !</h2>
          <p>Rescue the world for every.</p>
          <p>99 USDT</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleBuyClick}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;