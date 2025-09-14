import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter, SolflareWalletAdapter, BitgetWalletAdapter, CoinbaseWalletAdapter, TrustWalletAdapter, LedgerWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
const network = WalletAdapterNetwork.Mainnet;

// You can also provide a custom RPC endpoint.
const endpoint = clusterApiUrl(network);

// @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
// Only the wallets you configure here will be compiled into your application, and only the dependencies
// of wallets that your users connect to will be loaded.
const wallets = [
  new PhantomWalletAdapter(),
  new SolflareWalletAdapter(),
  new BitgetWalletAdapter(),
  new CoinbaseWalletAdapter(),
  new TrustWalletAdapter(),
  new LedgerWalletAdapter(),
  // new BinanceWalletAdapter(), // Binance Wallet integration coming soon
];

const App = () => (
  <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
);

export default App;
