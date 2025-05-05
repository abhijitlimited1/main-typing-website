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
        title="Type Ace - Online Typing Test & Practice"
        description="Improve your typing speed and accuracy with Type Ace. Free online typing tests, practice sessions, and detailed performance analysis."
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