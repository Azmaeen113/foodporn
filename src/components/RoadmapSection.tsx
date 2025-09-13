import { Rocket, Target, Globe, Crown, Star, Zap } from "lucide-react";

const RoadmapSection = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Launch & Community Building",
      status: "completed",
      icon: Rocket,
      items: [
        "✅ Token launch on Solana",
        "✅ Community building on Telegram/Twitter", 
        "✅ Food sharing contests",
        "✅ Initial marketing push"
      ],
      color: "from-green to-emerald-400"
    },
    {
      phase: "Phase 2", 
      title: "Platform Development",
      status: "active",
      icon: Target,
      items: [
        "🔥 Food sharing app development",
        "🚀 NFT food collections",
        "📈 Restaurant partnerships",
        "🤝 Celebrity chef collaborations"
      ],
      color: "from-orange to-yellow-400"
    },
    {
      phase: "Phase 3",
      title: "Global Expansion", 
      status: "upcoming",
      icon: Globe,
      items: [
        "🌍 International food communities",
        "📺 Celebrity chef partnerships",
        "🏢 Food festival sponsorships",
        "💎 Culinary education platform"
      ],
      color: "from-yellow to-orange-400"
    },
    {
      phase: "Phase 4",
      title: "Food Metaverse",
      status: "future",
      icon: Crown,
      items: [
        "👑 Virtual restaurants",
        "🏛️ Food gaming experiences",
        "🚀 Culinary education platform",
        "💰 Global food marketplace"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green';
      case 'active': return 'text-orange';
      case 'upcoming': return 'text-yellow';
      default: return 'text-orange-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'completed': return 'from-green/20 to-emerald-400/20';
      case 'active': return 'from-orange/20 to-yellow-400/20';
      case 'upcoming': return 'from-yellow/20 to-orange-400/20';
      default: return 'from-orange-500/20 to-red-500/20';
    }
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black font-display text-gradient-primary mb-6">
            Roadmap to Food Paradise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to food metaverse supremacy. This is how we make 
            food sharing great again, one phase at a time.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green via-orange via-yellow to-red-500 opacity-30"></div>

          {/* Phase Cards */}
          <div className="space-y-24">
            {phases.map((phase, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${phase.color} border-4 border-background animate-pulse-glow`}></div>
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className={`relative glass-card p-6 md:p-8 group hover:scale-105 transition-all duration-300 bg-gradient-to-br ${getStatusBg(phase.status)}`}>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-4 rounded-full bg-gradient-to-r ${phase.color}/20 group-hover:${phase.color}/30 transition-all`}>
                          <phase.icon className={`h-8 w-8 ${getStatusColor(phase.status)} group-hover:scale-110 transition-transform`} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                            {phase.phase}
                          </div>
                          <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                        </div>
                      </div>
                      <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide ${getStatusColor(phase.status)} bg-gradient-to-r ${getStatusBg(phase.status)} border border-current/20 shrink-0 text-center`}>
                        {phase.status === 'completed' ? 'COMPLETED' : phase.status === 'active' ? 'ACTIVE' : phase.status === 'future' ? 'FUTURE' : phase.status.toUpperCase()}
                      </div>
                    </div>

                    {/* Items List */}
                    <div className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-background/20 hover:bg-background/30 transition-all"
                        >
                          <span className="text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Progress Bar for Active Phase */}
                    {phase.status === 'active' && (
                      <div className="mt-6">
                        <div className="flex justify-between text-sm text-muted-foreground mb-2">
                          <span>Progress</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${phase.color} transition-all duration-1000`} style={{width: '75%'}}></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <Star className="h-12 w-12 mx-auto mb-4 text-yellow animate-pulse" />
            <h3 className="text-3xl font-bold text-gradient-gold mb-4">
              Join the Food Revolution
            </h3>
            <p className="text-muted-foreground mb-6">
              Be part of the most delicious story in crypto history. 
              Every holder is a stakeholder in this incredible food journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-gold text-lg font-bold px-8 py-3">
                <Zap className="mr-2 h-5 w-5" />
                Buy $FP
              </button>
              <button className="btn-glass text-lg font-semibold px-8 py-3">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;