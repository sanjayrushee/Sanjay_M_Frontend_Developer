import React from 'react'

const Whyus = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center mt-20'>
        <h1 className="m-4 font-sm text-4xl">About EthAi</h1>
        <p className='text-center text-lg font-normal text-[#B0FAFF] md:mx-44 md:my-3 '>At Eth Ai, we’re all about making crypto trading easier and more intuitive. We provide tools that help traders keep up with all new market trends, track top traders’ movements.</p>
        <button className="bg-[#CDFCFF] text-[#0B2A2D] px-5 py-2 m-3 rounded-md font-bold">Read more</button>
    </div>
    <div className='  m-4 bg-[#0C2B2F] p-4'>
    <div className='py-4'>
        <img src="why-us-one.png" alt="" />
        <h1 className="">Stay Aheads</h1>
        <p>No more guesswork—get clear, trustable insights.</p>
    </div>
    <div className='py-4'>
        <img src="why-us-two.png" alt="" />
        <h1 className="">Know Your Assets</h1>
        <p>Always stay on top of how your investments are performing.</p>
    </div>
    <div className='py-4'>
        <img src="why-us-three.png" alt="" />
        <h1 className="">Simple, Not Overwhelming</h1>
        <p>Our tools are designed to make complex market analysis easy to understand and act on.</p>
    </div>  <div className='py-4'>
        <img src="why-us-four.png" alt="" />
        <h1 className="">Future-Proof</h1>
        <p>We’re constantly improving, adding new features to help you make the most informed decisions possible.</p>
    </div>
    </div>
    </>
  ) 
}

export default Whyus
