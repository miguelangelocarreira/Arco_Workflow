import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    setTimeout(() => setStage(1), 100);
    setTimeout(() => setStage(2), 2000);
    setTimeout(onComplete, 2500);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[60] bg-black flex items-center justify-center transition-opacity duration-700 ${
        stage === 2 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className={`flex items-center gap-3 transition-all duration-1000 transform ${
          stage >= 1 ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90"
        }`}
      >
        <div className="flex items-center gap-1">
          <span className="text-5xl font-black text-white tracking-tighter" style={{ fontFamily: 'sans-serif' }}>
            ARCO
          </span>
          <div className="h-3 w-3 rounded-full bg-orange-500 mt-3 ml-1"></div>
        </div>
      </div>
    </div>
  );
};