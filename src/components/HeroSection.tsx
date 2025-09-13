import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, Twitter } from "lucide-react";
import foodPornLogo from "/food porn.jpg";
import fpLogo from "/food.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/energy.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 text-center">
        {/* Floating Food Porn Logo */}
        <div className="flex justify-center mb-8">
           <button onClick={() => window.open('https://share.google/ab8ULAvA0yMyIn4Ju', '_blank')} className="p-0 m-0">
             <img 
               src={foodPornLogo} 
               alt="Food Porn Logo" 
               className="w-64 h-64 object-cover float-animation pulse-glow rounded-full"
             />
           </button>
        </div>

        {/* Removed second logo image per request - keeping only the main floating logo */}

        {/* Main Quote */}
        <p className="text-3xl md:text-6xl font-black text-yellow-400 mb-3 md:mb-4 font-display tracking-tight animate-fade-in-up">
          "Flavors take flight — taste the moon with $FP!"
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto animate-fade-in-up">
          The most delicious meme coin on Solana. Share your food journey to the moon!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
          <Button 
            size="lg" 
            className="btn-gold text-lg font-bold px-10 py-6 group"
            onClick={() => window.open('https://raydium.io', '_blank')}
          >
            <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            BUY $FP NOW
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="btn-glass text-lg font-semibold px-8 py-6 group"
            onClick={() => window.open('https://t.me/FOODPORNTOKEN', '_blank')}
          >
            <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Join Telegram
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="btn-glass text-lg font-semibold px-8 py-6 group"
            onClick={() => window.open('https://x.com/FOODPORNMEME', '_blank')}
          >
            <Twitter className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Follow on X
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-20 max-w-5xl mx-auto">
          <div className="glass-card p-6 text-center animate-slide-in-right">
            <div className="text-3xl font-bold text-gradient-primary mb-2">1B</div>
            <div className="text-sm text-muted-foreground">Total Supply</div>
          </div>
          <div className="glass-card p-6 text-center animate-slide-in-right" style={{animationDelay: '0.2s'}}>
            <div className="text-3xl font-bold text-gradient-primary mb-2">0%</div>
            <div className="text-sm text-muted-foreground">Tax on Buy/Sell</div>
          </div>
          <div className="glass-card p-6 text-center animate-slide-in-right" style={{animationDelay: '0.4s'}}>
            <div className="text-3xl font-bold text-gradient-primary mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Liquidity Locked</div>
          </div>
          <div className="glass-card p-6 text-center animate-slide-in-right" style={{animationDelay: '0.6s'}}>
            <div className="text-3xl font-bold text-gradient-primary mb-2">✓</div>
            <div className="text-sm text-muted-foreground">Contract Renounced</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;