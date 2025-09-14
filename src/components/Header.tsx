import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-white">Food Porn</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-xs text-gray-400 hidden md:block">
            Binance Wallet support coming soon!
          </div>
          <WalletMultiButton className="!bg-yellow-500 !text-black !font-bold !px-6 !py-2 !rounded-lg hover:!bg-yellow-600 transition-colors" />
        </div>
      </div>
    </header>
  );
};

export default Header;