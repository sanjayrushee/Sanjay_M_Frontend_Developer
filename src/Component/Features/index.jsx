const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center">
    <h1>Our Features</h1>
    <div className="flex flex-col items-center m-4 justify-center bg-[#0C2B2F] p-4">
        <img src="trade_optimizer.png" />
        <h1>Trade Optimizer</h1>
        <p>Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.</p>
    </div>
    <div className="flex flex-col items-start m-4 justify-center bg-[#0C2B2F] p-4">
        <h1 className="">Market Insight</h1>
        <p className="">Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.</p>
    </div>
    <div className="flex flex-col items-center m-4 justify-center bg-[#0C2B2F] p-4">
        <h1>Trade Optimizer</h1>
        <p>Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.</p>
        <img src="risk_guard.png" />
    </div>
    <div className="flex flex-col items-start m-4 justify-center bg-[#0C2B2F] p-4">
        <h1 className="">Portfolio Sync</h1>
        <p className="">Easily manage your portfolio. You'll always know what you own, how it's performing, and where it’s headed.</p>
    </div>
    <div className="flex flex-col items-start m-4 justify-center bg-[#0C2B2F] p-4">
        <h1 className="">Opportunity Scout</h1>
        <p className="">Find exciting new projects, events and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.</p>
    </div>
</div>

  )
}

export default Features

