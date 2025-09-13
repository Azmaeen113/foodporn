import { Shield, Users, Zap, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Zero Tax Forever",
      description: "No buying or selling fees. Ever. That's a promise from the Food Porn community."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "100% community ownership. No team tokens, no insider allocations."
    },
    {
      icon: Zap,
      title: "Instant Transactions",
      description: "Lightning-fast transactions on Solana. Your food journey starts instantly."
    },
    {
      icon: TrendingUp,
      title: "Huge Potential",
      description: "The most delicious meme coin in crypto history. Share Your Food Journey!"
    }
  ];

  return (
    <section className="section-padding bg-background-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange/10 via-transparent to-yellow/10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-black font-display text-gradient-primary mb-6">
                The Most Delicious Token in History
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                This is the official meme coin of Solana called Food PORN. Buy and land to the moon.
                What did you eat for Breakfast / LUNCH / DINNER? Let's share the photo in the community
                and build a strong community together.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With zero taxes, complete community ownership, and the backing of the most
                passionate food lovers, $FP is the place to celebrate food and connect with
                other members who love sharing delicious moments.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient-gold mb-2">1B</div>
                <div className="text-sm text-muted-foreground">Total Supply</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient-gold mb-2">LP</div>
                <div className="text-sm text-muted-foreground">Burned Forever</div>
              </div>
            </div>
          </div>

          {/* Right Content - Circular Photo for "Most Delicious Token" */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/food porn.jpg"
                alt="The Most Delicious Token"
                className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover float-animation rounded-full border-4 border-white/20 shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow/20 to-orange/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-14 md:mt-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-gradient-to-r from-orange/20 to-yellow/20 group-hover:from-orange/30 group-hover:to-yellow/30 transition-all">
                  <feature.icon className="h-8 w-8 text-orange group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gradient-primary">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;