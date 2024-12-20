'use client';

import { useScrollPosition } from '@/hooks/use-scroll-position';
import {
    GraduationCap,
    Search,
    Moon,
    Sun
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import NavLinks from './navbar/nav-links';
import Hamburger from './navbar/hamburger';
import MobileMenu from './navbar/mobile-menu';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const scrolled = useScrollPosition();

    const handleClose = () => setIsMenuOpen(false);
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out 
                ${scrolled
                    ? 'bg-white/90 dark:bg-background-dark/95 backdrop-blur-xl border-b border-gray-100 dark:border-primary-500/10 shadow-md'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="flex items-center space-x-3 group"
                        >
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <GraduationCap
                                    className={`h-8 w-8 transition-all duration-500 ease-in-out 
                                    ${scrolled
                                            ? 'text-sky-600 dark:text-primary-400'
                                            : 'text-white'
                                        }`}
                                />
                            </motion.div>
                            <span
                                className={`font-bold text-xl transition-all duration-500 ease-in-out 
                                ${scrolled
                                        ? 'text-gray-800 dark:text-primary-100'
                                        : 'text-white'
                                    }`}
                            >
                                BlockLearn
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <NavLinks scrolled={scrolled} />
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Search */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-2 rounded-full transition-colors 
                            ${scrolled
                                    ? 'text-gray-600 hover:bg-gray-100'
                                    : 'text-white hover:bg-white/20'
                                }`}
                        >
                            <Search size={20} />
                        </motion.button>

                        {/* Dark Mode Toggle */}
                        <motion.button
                            onClick={toggleDarkMode}
                            whileHover={{ rotate: 180 }}
                            className={`p-2 rounded-full transition-colors 
                            ${scrolled
                                    ? 'text-gray-600 hover:bg-gray-100'
                                    : 'text-white hover:bg-white/20'
                                }`}
                        >
                            <AnimatePresence mode="wait">
                                {isDarkMode ? (
                                    <motion.div
                                        key="moon"
                                        initial={{ opacity: 0, rotate: -180 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 180 }}
                                    >
                                        <Moon size={20} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="sun"
                                        initial={{ opacity: 0, rotate: -180 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 180 }}
                                    >
                                        <Sun size={20} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        {/* Wallet Connect or Login */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-full font-semibold transition-all 
                            ${scrolled
                                    ? 'bg-sky-500 text-white hover:bg-sky-600'
                                    : 'bg-white/20 text-white hover:bg-white/30'
                                }`}
                        >
                            Connect Wallet
                        </motion.button>
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

            {/* Mobile menu */}
            <MobileMenu isOpen={isMenuOpen} onClose={handleClose} />
        </motion.nav>
    );
}