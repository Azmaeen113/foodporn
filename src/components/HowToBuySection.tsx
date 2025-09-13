import { Wallet, ExternalLink, Coins, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowToBuySection = () => {
  const steps = [
    {
      icon: Wallet,
      title: "Set up Phantom Wallet",
      description: "Download Phantom, Solflare, or any Solana-compatible wallet. Fund it with SOL from your favorite exchange.",
      link: "https://phantom.app",
      linkText: "Download Phantom"
    },
    {
      icon: ExternalLink,
      title: "Buy SOL on Exchange",
      description: "Purchase SOL on your favorite exchange like Binance, Coinbase, or Kraken. Transfer to your wallet.",
      link: "https://coinbase.com",
      linkText: "Buy SOL"
    },
    {
      icon: Coins,
      title: "Connect to Raydium/Jupiter",
      description: "Go to Raydium or Jupiter DEX. Connect your wallet and search for $FP token. Contract: CTGYoRU9ncbrKvWsLGiZvNACjFedXszDSSY9Nv745mDY",
      link: "https://raydium.io",
      linkText: "Trade on Raydium"
    },
    {
      icon: CheckCircle,
      title: "Swap SOL for $FP",
      description: "Swap your SOL for $FP tokens. Welcome to the food revolution! Share your food journey to the moon!",
      link: "",
      linkText: "Join Community"
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange/5 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black font-display text-gradient-gold mb-6">
            How to Buy Food Porn
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join the hungriest community on Solana. It's easier than cooking dinner 
            and way more delicious than any restaurant!
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group flex flex-col">
              {/* Connection Line - Only show on large screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-orange/50 to-transparent z-0 transform translate-x-4"></div>
              )}
              
              {/* Step Card */}
              <div className="glass-card p-6 lg:p-8 text-center relative z-10 group-hover:scale-105 transition-all duration-300 flex-1 flex flex-col">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-orange to-yellow rounded-full flex items-center justify-center text-black font-bold text-sm z-20">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-4 lg:mb-6 flex justify-center">
                  <div className="p-4 lg:p-6 rounded-full bg-gradient-to-r from-orange/20 to-yellow/20 group-hover:from-orange/30 group-hover:to-yellow/30 transition-all">
                    <step.icon className="h-8 w-8 lg:h-10 lg:w-10 text-orange group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-gradient-primary">{step.title}</h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-4 lg:mb-6 flex-1">{step.description}</p>

                {/* Action Button */}
                <div className="mt-auto">
                  {step.link && (
                    <Button 
                      variant="outline" 
                      className="btn-glass w-full group-hover:bg-orange/10 text-sm lg:text-base"
                      onClick={() => window.open(step.link, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {step.linkText}
                    </Button>
                  )}
                  
                  {!step.link && (
                    <Button 
                      variant="outline" 
                      className="btn-glass w-full text-sm lg:text-base"
                      onClick={() => {
                        if (step.linkText === "Join Community") {
                          window.open('https://t.me/FOODPORNTOKEN', '_blank');
                        }
                      }}
                    >
                      {step.linkText}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gradient-primary mb-4">
              Ready for Your Food Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Don't wait - the most delicious token in crypto history is happening now!
            </p>
            <Button 
              size="lg" 
              className="btn-gold text-lg font-bold px-10 md:px-12 py-5 md:py-6 mx-auto"
              onClick={() => window.open('https://raydium.io', '_blank')}
            >
              <Coins className="mr-2 h-5 w-5" />
              Buy $FP Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuySection;