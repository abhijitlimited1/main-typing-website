// src/app/layout.tsx
import './globals.css';
import { Toaster } from "../components/ui/toaster";
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import Meta from '../components/meta';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-sans antialiased flex flex-col min-h-screen">
      {/* Default Meta - individual pages can override these values */}
      <Meta
        title="Typing Speed Test - Online Free Typing Practice | TypeAce"
        description="Take a free online typing speed test with TypeAce. Improve your typing practice and track your progress. Fast, simple, and accurate English typing test."
        robots="index, follow"
      />
      
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}