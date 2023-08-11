import React from "react";
import { Link } from "react-router-dom";
import ComingSoonImage from "../assets/images/coming-soon-image.jpg";

export const ComingSoon = () => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="items-stretch overflow-hidden">
        <main
          className="min-h-screen bg-cover bg-top sm:bg-top"
          style={{
            backgroundImage: `url(${ComingSoonImage})`,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
            <p className="text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide">
              Coming soon
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
              Đang phát triển
            </h1>
            <p className="mt-2 text-lg font-medium text-black text-opacity-50">
              Vui lòng trở lại khi có thông báo từ đội phát triển.
            </p>
            <div className="mt-6">
              <Link
                to="/dashboard"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
              >
                Quay lại dashboard
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
