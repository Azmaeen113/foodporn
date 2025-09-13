import { PieChart, Lock, Users, Flame } from "lucide-react";

const TokenomicsSection = () => {
  const tokenData = [
    {
      icon: Users,
      label: "Distribution",
      percentage: "100%",
      amount: "1,000,000,000",
      description: "Token distribution as planned",
      color: "from-electric to-neon"
    },
    {
      icon: Lock,
      label: "Team/Dev",
      percentage: "0%",
      amount: "0",
      description: "No team allocation, completely fair launch",
      color: "from-gold to-yellow-400"
    },
    {
      icon: Flame,
      label: "LP Burned",
      percentage: "100%",
      amount: "Forever",
      description: "Liquidity permanently locked",
      color: "from-red-500 to-orange-500"
    }
  ];

  const features = [
    "🔥 Zero Buy/Sell Tax",
    "🚀 Fair Launch on Solana",
    "💎 LP Burned Forever",
  "👥 Community Focused",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left Side - Token Distribution */}
          <div className="space-y-8">
            {tokenData.map((item, index) => (
              <div key={index} className="glass-card p-5 md:p-6 group hover:scale-[1.02] md:hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${item.color}/20 group-hover:${item.color}/30 transition-all`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.label}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.percentage}
                    </div>
                    <div className="text-sm text-muted-foreground">{item.amount}</div>
                  </div>
                </div>
                <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${item.color} transition-all duration-1000`}
                    style={{width: item.percentage}}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Features & Stats */}
          <div className="space-y-8">
            {/* Token Details Card (explicit fields requested) */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gradient-primary mb-4 text-center">Token Details</h3>
              <div className="grid grid-cols-1 gap-3 text-sm text-muted-foreground">
                <div className="flex justify-between"><span className="font-medium">Name</span><span>FOOD PORN</span></div>
                <div className="flex justify-between"><span className="font-medium">Ticker</span><span>$FP</span></div>
                <div className="flex justify-between"><span className="font-medium">Blockchain</span><span>SOLANA</span></div>
                <div className="flex justify-between"><span className="font-medium">Contract Address</span><span className="font-mono text-xs break-all">CTGYoRU9ncbrKvWsLGiZvNACjFedXszDSSY9Nv745mDY</span></div>
                <div className="flex justify-between"><span className="font-medium">Token Supply</span><span>1,000,000,000</span></div>
                <div className="flex justify-between"><span className="font-medium">Mint & Freeze</span><span>Revoked</span></div>
                <div className="flex justify-between"><span className="font-medium">Buy/Sell Tax</span><span>0%</span></div>
                <div className="flex justify-between"><span className="font-medium">Liquidity</span><span>Locked</span></div>
                <div className="flex justify-between"><span className="font-medium">LP</span><span>Burned</span></div>
                <div className="flex justify-between"><span className="font-medium">Contract</span><span>Renounced</span></div>
              </div>
            </div>
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
                Token Distribution
              </h3>
              <p className="text-muted-foreground">
                No team tokens, no private sales — distribution follows the stated allocation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;