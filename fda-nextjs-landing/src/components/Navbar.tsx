'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true) }, []);

    // Font size logic
    const increaseFont = () => document.documentElement.style.fontSize = '110%';
    const decreaseFont = () => document.documentElement.style.fontSize = '90%';

    // High Contrast logic
    const toggleContrast = () => {
        const html = document.documentElement;
        if (html.style.filter === 'contrast(1.25)') {
            html.style.filter = 'none';
        } else {
            html.style.filter = 'contrast(1.25)';
        }
    };

    // Text to Speech logic
    const toggleTTS = () => {
        if (!window.speechSynthesis) return alert("Your browser doesn't support Text to Speech");
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
        } else {
            const text = document.body.innerText;
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
        }
    };

    const currentTheme = theme === 'system' ? resolvedTheme : theme;

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
            <div className="flex justify-between items-center py-4 px-4 md:px-[6%]">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 bg-gradient-to-tr from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-600/30">
                        <span className="text-white font-black text-lg">BP</span>
                    </div>
                    <span className="text-xl md:text-2xl font-black text-white tracking-wide">
                        Build<span className="text-amber-500">Pro</span>
                    </span>
                </Link>
                
                <ul className="hidden lg:flex gap-6 text-white/90 font-medium text-sm items-center">
                    <li><Link href="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
                    <li><Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
                    <li><a href="/#features" className="hover:text-amber-500 transition-colors">Features</a></li>
                    <li><a href="/#pricing" className="hover:text-amber-500 transition-colors">Pricing</a></li>
                </ul>

                <div className="hidden md:flex items-center gap-3">
                    <div className="flex items-center bg-slate-900 border border-slate-700/80 rounded-full px-3 py-1 gap-2 text-white">
                        <button onClick={decreaseFont} className="hover:text-amber-500 font-bold px-1 text-sm" title="Decrease Font">A-</button>
                        <button onClick={increaseFont} className="hover:text-amber-500 font-bold px-1 text-sm" title="Increase Font">A+</button>
                        <span className="text-slate-600">|</span>
                        
                        {/* Contrast SVG Icon */}
                        <button onClick={toggleContrast} className="hover:text-amber-500 p-1" title="Toggle Contrast">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 0 0 20z"></path></svg>
                        </button>
                        
                        {/* Speaker SVG Icon */}
                        <button onClick={toggleTTS} className="hover:text-amber-500 p-1" title="Read Aloud">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
                        </button>
                    </div>

                    {/* Dark Mode Toggle SVG */}
                    {mounted && (
                        <button 
                            onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')} 
                            className="text-white bg-slate-900 p-2 rounded-full border border-slate-700/80 hover:text-amber-500"
                            title="Toggle Dark Mode"
                        >
                            {currentTheme === 'dark' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                            )}
                        </button>
                    )}

                    <Link href="/#pricing" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:opacity-90 text-white px-5 py-2 rounded-xl font-bold text-xs transition-all shadow-lg">
                        Get Started
                    </Link>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-2xl text-white p-1">☰</button>
            </div>
            
            <div className={`lg:hidden absolute top-full left-0 w-full bg-slate-900 overflow-hidden transition-all duration-300 border-t border-white/10 shadow-2xl ${isOpen ? 'max-h-[400px] py-6' : 'max-h-0'}`}>
                <div className="px-6 flex flex-col gap-4">
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-white text-sm font-medium hover:text-amber-500">Home</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-white text-sm font-medium hover:text-amber-500">About Us</Link>
                    <a href="/#features" onClick={() => setIsOpen(false)} className="text-white text-sm font-medium hover:text-amber-500">Features</a>
                    <a href="/#pricing" onClick={() => setIsOpen(false)} className="text-white text-sm font-medium hover:text-amber-500">Pricing</a>
                </div>
            </div>
        </nav>
    );
}