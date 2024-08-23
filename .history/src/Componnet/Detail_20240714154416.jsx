import React from 'react';

const Detail = () => {
  return (
    <div className="bg-yellow-400 flex justify-center items-center min-h-screen">
      <div className="p-4" style={{ width: '60%' }}>
        <h2 className="text-center font-bold text-xl mb-4 text-black">About DK Group</h2>
        <div className="flex flex-col items-center text-black">
          {/* <img 
            src="https://dkgroup.pk/wp-content/uploads/2024/03/black-1536x1025.png" 
            alt="DK Group" 
            className="w-1/3 mb-4 " 
          /> */}
          <p className="text-center mb-4">
           <h1 className='font bold'> Token Harvest: Unleash Daily Gains from Idle Assets.</h1>
           <br/> Earn daily rewards effortlessly as your<br/> idle tokens work for you with unmatched efficiency<br/> Embrace the power of passive income with <br/> our innovative platform, maximizing your earnings while you relax.
          </p>
          <ul className="list-disc list-inside mb-4 flex flex-col items-center">
            <li>Lowest fees in market</li>
            <li>Fast and secure transaction</li>
            <li>256-bit secure encryption</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
