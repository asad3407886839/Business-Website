import React from 'react';

const Detail = () => {
  return (
    <div className="bg-yellow-400 flex justify-center items-center min-h-screen">
      <div className="bg-white p-4" style={{ width: '40%' }}>
        <h2 className="text-center font-bold text-xl mb-4">About DK Group</h2>
        <p className="text-center mb-4">
          Welcome to DK Group: Where strategic investments meet social responsibility. Our platform is designed for those seeking financial growth with integrity. Through diverse projects and cryptocurrencies, we provide professional, attractive opportunities that generate monthly returns while making a positive impact on communities.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Lowest fees in market</li>
          <li>Fast and secure transaction</li>
          <li>256-bit secure encryption</li>
        </ul>
        <div className="flex justify-around">
          <img src="path_to_image_1.jpg" alt="Image 1" style={{ width: '30%' }} />
          <img src="path_to_image_2.jpg" alt="Image 2" style={{ width: '30%' }} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
