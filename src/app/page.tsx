import { LoveCard } from '@/app/components/LoveCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-200 flex flex-col items-center justify-center p-6 font-sans">
      <LoveCard userName="Anhzaya" />
      
      <footer className="mt-12 text-rose-400 font-medium italic">
        Made with ❤️ by BILGUUN AH
      </footer>
    </main>
  );
}