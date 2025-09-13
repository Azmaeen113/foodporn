import { PieChart } from "lucide-react";

const TokenomicsSection = () => {

  const features = [
    "🔥 Zero Buy/Sell Tax",
    "🚀 Fair Launch on Solana",
    "💎 LP Burned Forever",
    "👥 100% Community Owned",
    "⚡ Solana Fast & Cheap",
    "🛡️ Rugproof Design"
  ];

  return (
    <section className="section-padding bg-background-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 px-2">
          <h2 className="text-4xl md:text-6xl font-black font-display text-gradient-gold mb-4 md:mb-6">
            Tokenomics
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The most delicious and fair tokenomics in crypto. No hidden allocations, 
            no team dumps, just pure food community power.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Features & Stats */}
          <div className="space-y-8">
            {/* Key Stats */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-3xl font-bold text-gradient-primary mb-8 text-center">
                Key Metrics
              </h3>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-gold mb-2">1B</div>
                  <div className="text-sm text-muted-foreground">Total Supply</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-gold mb-2">0%</div>
                  <div className="text-sm text-muted-foreground">Tax Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-gold mb-2">SOL</div>
                  <div className="text-sm text-muted-foreground">Blockchain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-gold mb-2">∞</div>
                  <div className="text-sm text-muted-foreground">LP Lock</div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gradient-primary mb-6">
                Why $FP?
              </h3>
              <div className="grid grid-cols-1 gap-3 md:gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-orange/5 to-yellow/5 hover:from-orange/10 hover:to-yellow/10 transition-all"
                  >
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="glass-card p-6 md:p-8 text-center">
              <PieChart className="h-16 w-16 mx-auto mb-4 text-orange animate-spin" style={{animationDuration: '10s'}} />
              <h3 className="text-xl font-bold text-gradient-primary mb-2">
                100% Community Distribution
              </h3>
              <p className="text-muted-foreground">
                No team tokens, no private sales, just pure food community ownership
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;