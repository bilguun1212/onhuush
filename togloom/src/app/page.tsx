"use client";
import React, { useState } from 'react';

const RomanticPage = () => {
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [isAccepted, setIsAccepted] = useState(false);
  const [score, setScore] = useState(0);

  
  const moveNoButton = () => {
    const x = Math.random() * 80;
    const y = Math.random() * 80;
    setNoButtonStyle({
      position: 'absolute',
      left: `${x}%`,
      top: `${y}%`,
      transition: 'all 0.2s ease'
    });
  };

  if (isAccepted) {
    return (
      <main className="min-h-screen bg-rose-100 flex flex-col items-center justify-center p-4 text-center">
        <div className="animate-bounce text-9xl mb-6">💖</div>
        <h1 className="text-4xl md:text-6xl font-black text-rose-600 mb-4 drop-shadow-sm">
         Kissu Missu! 👩‍❤️‍👨
        </h1>
        <p className="text-xl text-rose-500 font-medium">
          Huurhun. ✨
        </p>
        <div className="mt-8 flex gap-2">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="animate-pulse text-2xl">🌸</span>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-200 flex flex-col items-center justify-center p-6 font-sans">
      <div className="bg-white/80 backdrop-blur-md p-10 rounded-[3rem] shadow-2xl border-4 border-white text-center max-w-lg w-full relative overflow-hidden">
        
     
        <div className="absolute top-4 left-4 animate-pulse text-2xl">💝</div>
        <div className="absolute bottom-4 right-4 animate-pulse text-2xl">💖</div>

        <div className="mb-6">
          <span className="text-7xl">👧🏻</span>
        </div>
        
        <h1 className="text-3xl font-black text-rose-600 mb-6 leading-tight">
          Anhzaya uher mun uu? 🌹
        </h1>

        <p className="text-slate-600 mb-8 font-medium">
          (Gntshan songolttoi shu bandia! 😉)
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 min-h-[100px] relative">
          <button
            onClick={() => setIsAccepted(true)}
            className="px-10 py-4 bg-rose-500 text-white font-bold rounded-full text-xl hover:bg-rose-600 hover:scale-110 transition-all shadow-lg z-10"
          >
            Yes for sure 😍
          </button>

          <button
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            style={noButtonStyle}
            className="px-10 py-4 bg-slate-400 text-white font-bold rounded-full text-xl z-0"
          >
            Ugui guts 🥺
          </button>
        </div>
      </div>

      <footer className="mt-12 text-rose-400 font-medium italic">
        Made with ❤️ by [BILGUUN AH]
      </footer>
    </main>
  );
};

export default RomanticPage;