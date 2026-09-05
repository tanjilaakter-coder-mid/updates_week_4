import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 flex flex-col justify-between">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-32 flex-grow">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
          About BuildPro
        </h1>
        <p className="text-lg leading-relaxed mb-8 opacity-90">
          BuildPro is an advanced site management and safety platform designed specifically for heavy construction teams, site managers, and hardworking field laborers. Our mission is to streamline project workflows and ensure maximum safety standards on every job site.
        </p>
        <Link href="/" className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all shadow-lg">
          &larr; Back to Home
        </Link>
      </div>

      {/* Footer Component */}
      <Footer />
    </main>
  );
}