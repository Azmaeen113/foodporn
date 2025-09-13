const Illustration = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`w-full flex justify-center mb-6 ${className}`}>
      {/* Simple SVG illustration adapted to the site's orange/dark theme */}
      <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="220" height="120" rx="20" fill="#1f1a17" />
        <g transform="translate(16,16)">
          <circle cx="36" cy="36" r="30" fill="#ff8a00" />
          <rect x="76" y="8" width="110" height="56" rx="10" fill="#2b1f18" stroke="#ff9f1c" strokeWidth="2" />
          <text x="86" y="40" fill="#ffb366" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700">Tokenomics</text>
        </g>
      </svg>
    </div>
  );
};

export default Illustration;
