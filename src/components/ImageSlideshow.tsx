import { useRef, useEffect } from "react";

const ImageSlideshow = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoSrc = "/videooo.mp4";

  useEffect(() => {
    // Try to play the video programmatically (some browsers require user interaction otherwise).
    const v = videoRef.current;
    if (v) {
      v.play().catch(() => {
        // If autoplay is blocked, leave it muted and show controls as fallback
        v.muted = true;
        v.playsInline = true;
      });
    }
  }, []);

  return (
    <section className="relative py-16 bg-background-secondary overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black font-display text-gradient-gold mb-4">
            Food Porn Community Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visual highlights of the most delicious community in crypto history
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Video Display */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <video
              ref={videoRef}
              src={videoSrc}
              className="w-full h-96 md:h-[500px] object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/placeholder.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlideshow;
