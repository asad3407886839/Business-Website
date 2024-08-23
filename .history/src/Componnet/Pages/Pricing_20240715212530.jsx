import React from 'react';

const Pricing = () => {
  return (
    <div className='flex flex-col items-center  bg-gradient-to-b from-yellow-100 via-white to-yellow-100'>
      <div className="text-center mb-12 m-4">
        <h1 className="text-5xl font-bold text-yellow-500 m-5">Pricing</h1>
        <p className="mt-4 text-base">
        DK Group offers competitive pricing structures tailored to client needs<br/> ensuring affordability and value across its comprehensive<br/>  range of financial services.
        </p>
      </div>
      <div className="flex justify-around flex-wrap max-w-4xl ">
        <div className="flex flex-col items-center max-w-xs p-4">
          <img src="https://dkgroup.pk/wp-content/uploads/2024/03/div-1.png" alt="Send & Receive" className="mb-2" />
          <p className="text-sm">Send & Receive</p>
        </div>
        <div className="flex flex-col items-center max-w-xs p-4">
          <img src="https://dkgroup.pk/wp-content/uploads/2024/03/div-2.png" alt="Trading Charts" className="mb-2" />
          <p className="text-sm">Trading Charts</p>
        </div>
        <div className="flex flex-col items-center max-w-xs p-4">
          <img src="https://dkgroup.pk/wp-content/uploads/2024/03/div-3.png" alt="Wallet" className="mb-2" />
          <p className="text-sm">Wallet</p>
        </div>
        <div className="flex flex-col items-center max-w-xs p-4">
          <img src="https://dkgroup.pk/wp-content/uploads/2024/03/div-4.png" alt="Real Time Trading" className="mb-2" />
          <p className="text-sm">Real Time Trading</p>
        </div>
        <div className="flex justify-around p-5">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 m-3 p-5">
                <h2 className="text-xl font-bold mb-2">BASIC</h2>
                <p className="text-2xl mb-2">50,000 PKR</p>
                <p className="text-sm mb-6">Get a steady return on your investment with our Basic Plan.</p>
                <ul className="text-sm">
                    <li>Fixed Profit On Investment</li>
                    <li>Secure Transactions</li>
                    <li>Transparent Returns</li>
                    <li>Diverse Portfolios</li>
                    <li>Withdraw Your Investment After 9 Months</li>
                </ul>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Let's Start</button>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 m-3 p-5">
                <h2 className="text-xl font-bold mb-2">Pro</h2>
                <p className="text-2xl mb-2">100,000 PKR</p>
                <p className="text-sm mb-6">Earn more with our Pro Plan, where returns are based on a percentage.</p>
                <ul className="text-sm">
                    <li>Profit On Your Current Investment</li>
                    <li>Secure Transactions</li>
                    <li>Accessible Platform</li>
                    <li>Dedicated Support</li>
                    <li>Withdraw Your Investment After 9 Months</li>
                </ul>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Let's Start</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
