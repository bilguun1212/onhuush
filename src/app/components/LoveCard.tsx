"use client";
import React, { useState } from 'react';

interface LoveCardProps {
  userName: string;
}

export const LoveCard: React.FC<LoveCardProps> = ({ userName }) => {
  const [noButtonStyle, setNoButtonStyle] = useState<React.CSSProperties>({});
  const [isAccepted, setIsAccepted] = useState(false);

  const moveNoButton = () => {
    // Дэлгэцийн 10%-иас 90%-ийн хооронд санамсаргүй байрлал сонгоно
    const x = Math.floor(Math.random() * 80) + 10;
    const y = Math.floor(Math.random() * 80) + 10;
    
    setNoButtonStyle({
      position: 'fixed', // Дэлгэцийн хаана ч хамаагүй үсэрдэг болгох
      left: `${x}%`,
      top: `${y}%`,
      transition: 'all 0.2s ease',
      zIndex: 999
    });
  };

  if (isAccepted) {
    return (
      <div className="text-center animate-in fade-in zoom-in duration-500">
        <div className="animate-bounce text-9xl mb-6">💖</div>
        <h1 className="text-4xl md:text-6xl font-black text-rose-600 mb-4 drop-shadow-sm">
          Kissu Missu! 👩‍❤️‍👨
        </h1>
        <p className="text-xl text-rose-500 font-medium">Huurhun. ✨</p>
        <div className="mt-8 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="animate-pulse text-2xl">🌸</span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-md p-10 rounded-[3rem] shadow-2xl border-4 border-white text-center max-w-lg w-full relative overflow-hidden">
      <div className="absolute top-4 left-4 animate-pulse text-2xl">💝</div>
      <div className="absolute bottom-4 right-4 animate-pulse text-2xl">💖</div>

      <div className="mb-6"><span className="text-7xl">👧🏻</span></div>
      
      <h1 className="text-3xl font-black text-rose-600 mb-6 leading-tight">
        Anhzaya uher mun uu? 🌹
      </h1>

      <p className="text-slate-600 mb-8 font-medium">
        (Gntshan songolttoi shu bandia! 😉)
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 min-h-[150px] relative">
        <button
          onClick={() => setIsAccepted(true)}
          className="px-10 py-4 bg-rose-500 text-white font-bold rounded-full text-xl hover:bg-rose-600 hover:scale-110 transition-all shadow-lg z-10"
        >
          Yes for sure 😍
        </button>

        <button
          // Хулгана дөхөхөд, дарах үед, эсвэл утсан дээр хүрэх үед бүгдэд нь үсэрнэ
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          onTouchStart={moveNoButton}
          className="px-10 py-4 bg-slate-400 text-white font-bold rounded-full text-xl transition-all"
          style={noButtonStyle}
        >
          Ugui guts 🥺
        </button>
      </div>
    </div>
  );
};