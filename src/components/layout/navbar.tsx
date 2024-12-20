'use client';



import { useScrollPosition } from '@/hooks/use-scroll-position';
import { GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import NavLinks from './navbar/nav-links';
import Hamburger from './navbar/hamburger';
import MobileMenu from './navbar/mobile-menu';
import ConnectWalletBtn from '../wallet/ConnectWalletBtn';


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const scrolled = useScrollPosition();

    const handleClose = () => setIsMenuOpen(false);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
                ? 'bg-background-dark/95 backdrop-blur-lg border-b border-primary-500/10 shadow-lg shadow-background-dark/50'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2 group">
                            <GraduationCap className={`h-8 w-8 transition-all duration-500 ease-in-out transform ${scrolled
                                ? 'text-primary-400 scale-90'
                                : 'text-white scale-100'
                                }`} />
                            <span className={`font-bold text-xl transition-all duration-500 ease-in-out transform ${scrolled
                                ? 'text-primary-100 scale-95'
                                : 'text-white scale-100'
                                }`}>
                                BlockLearn
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <NavLinks scrolled={scrolled} />
                        {/* <WalletConnect chainName="Kaia" /> */}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <Hamburger
                            isOpen={isMenuOpen}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />
                    </div>
                </div>
            </div>
            <ConnectWalletBtn />

            {/* Mobile menu */}
            <MobileMenu isOpen={isMenuOpen} onClose={handleClose} />
        </nav>
    );
}
