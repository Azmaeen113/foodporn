import { Twitter, MessageCircle, ExternalLink, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import fpLogo from "/food.jpg";

const FooterSection = () => {
  const socialLinks = [
    { icon: Twitter, label: "Twitter", url: "https://x.com/FOODPORNMEME", handle: "@FOODPORNMEME" },
    { icon: MessageCircle, label: "Telegram", url: "https://t.me/FOODPORNTOKEN", handle: "t.me/FOODPORNTOKEN" },
    { icon: ExternalLink, label: "Raydium", url: "https://raydium.io", handle: "Trade Now" },
    { icon: ExternalLink, label: "Jupiter", url: "https://jup.ag", handle: "Trade Now" },
    { icon: Globe, label: "Website", url: "#", handle: "foodporn.com" }
  ];

  const quickLinks = [
    { label: "How to Buy", href: "#buy" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Community", href: "#community" }
  ];

  return (
    <footer className="relative bg-background-secondary border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <img src={fpLogo} alt="$FP Logo" className="h-12 object-contain rounded-lg" />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              The most delicious token in crypto history. Join millions of food lovers sharing their 
              culinary journey and making food great again with $FP.
            </p>
            
            {/* Contract Address */}
            <div className="glass-card p-4">
              <div className="text-sm text-muted-foreground mb-2">Contract Address:</div>
              <div className="flex items-center justify-between">
                <code className="text-xs text-orange font-mono bg-background/30 px-2 py-1 rounded">
                  CTGYoRU9ncbrKvWsLGiZvNACjFedXszDSSY9Nv745mDY
                </code>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="text-xs hover:text-orange"
                  onClick={() => navigator.clipboard.writeText('CTGYoRU9ncbrKvWsLGiZvNACjFedXszDSSY9Nv745mDY')}
                >
                  Copy
                </Button>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="text-xs text-muted-foreground/70 leading-relaxed">
              <p className="mb-2">
                <strong>Disclaimer:</strong> $FP is a meme coin on Solana. Always DYOR before investing. 
                Share your food journey responsibly!
              </p>
              <p>
                Cryptocurrency investments are subject to high market risk. 
                Please make your investments cautiously.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gradient-primary mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-orange transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-gradient-primary mb-6">Community</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-orange transition-colors duration-200 group"
                >
                  <div className="p-2 rounded-lg bg-background/30 group-hover:bg-orange/10 transition-colors">
                    <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{social.label}</div>
                    <div className="text-xs text-muted-foreground/70">{social.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 Food Porn ($FP). All rights reserved. Made with 🍕 by the community.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-orange transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-orange transition-colors">Audit Report</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10">
        <div className="w-2 h-2 bg-orange rounded-full animate-ping"></div>
      </div>
      <div className="absolute top-20 left-10">
        <div className="w-1 h-1 bg-yellow rounded-full animate-pulse"></div>
      </div>
    </footer>
  );
};

export default FooterSection;