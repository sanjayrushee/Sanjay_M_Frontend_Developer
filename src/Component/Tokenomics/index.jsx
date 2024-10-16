import React from 'react';

const Tokenomics = () => {
  return (
    <div  className="flex flex-col items-center text-white ">
      <h1 className="text-2xl font-bold mb-4">Tokenomics</h1>
      <div>
        <img src="Tokenomics.png" alt="tokenomics" />
      </div>
      
      <div className="m-4  w-11/12 max-w-md grid grid-cols-3 gap-y-4 bg-[#0C2B2F] rounded-lg shadow-lg p-4">
        <div className="col-span-1">Name</div>
        <div className="col-span-1 text-center">:</div>
        <div className="col-span-1">EthAi</div>

        <div className="col-span-1">Token Name</div>
        <div className="col-span-1 text-center">:</div>
        <div className="col-span-1">$EthAi</div>

        <div className="col-span-1">Token Standard</div>
        <div className="col-span-1 text-center">:</div>
        <div className="col-span-1">ERC20</div>

        <div className="col-span-1">Blockchain</div>
        <div className="col-span-1 text-center">:</div>
        <div className="col-span-1">Ethereum</div>

        <div className="col-span-1">Total Supply</div>
        <div className="col-span-1 text-center">:</div>
        <div className="col-span-1">100 Million</div>

        <div className="col-span-1">Tax</div>
        <div className="col-span-1 text-center">:</div>
        <div className="col-span-1">5%/5%</div>
      </div>
      
      <div className="m-4 w-11/12  max-w-md grid grid-cols-3 gap-y-4 bg-[#0C2B2F] rounded-lg shadow-lg p-4">
        <div className="col-span-1">Team</div>
        <div className="col-span-1 text-center">:</div>
        <div className="col-span-1">35%</div>

        <div className="col-span-1">Marketing</div>
        <div className="col-span-1 text-center">:</div>
        <div className="col-span-1">5%</div>

        <div className="col-span-1">Liquidity Pool</div>
        <div className="col-span-1 text-center">:</div>
        <div className="col-span-1">90%</div>
      </div>
    </div>
  );
};

export default Tokenomics;
