import { FaTelegram, FaInstagramSquare, FaTwitterSquare, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="] text-white py-12 flex flex-col items-center space-y-8">
      {/* dApp Information Section */}
      <div className="max-w-md p-8 bg-[#0C2B2F] border border-teal-400 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Explore Our <span className="text-teal-400">dApp</span>
        </h2>
        <p className="text-sm mb-6">
          EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends.
          The platform offers intuitive AI features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.
        </p>
        <button className="bg-teal-400 text-black py-2 px-6 rounded-full font-bold shadow-lg">
          Open dApp
        </button>
      </div>

      {/* Social Media and Branding Section */}
      <div className="text-center flex flex-col items-center">
        <img src="mobile_logo.png" alt="EthAi Logo" className="mb-4" width="60" /> {/* Replace with actual path */}
        <h3 className="text-xl font-bold mb-4">EthAi</h3>
        
        <div className="flex justify-center space-x-6 text-2xl">
          <a href="#" aria-label="Telegram"><FaTelegram /></a>
          <a href="#" aria-label="Instagram"><FaInstagramSquare /></a>
          <a href="#" aria-label="Twitter"><FaTwitterSquare /></a>
          <a href="#" aria-label="Discord"><FaDiscord /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
