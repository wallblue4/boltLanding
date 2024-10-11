"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glassmorphism' : ''}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <motion.svg
            className="w-10 h-10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </motion.svg>
        </Link>
        <div className="hidden md:flex space-x-6">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#case-study">Case Study</NavLink>
          <NavLink href="#expertise">Expertise</NavLink>
          <NavLink href="#insights">Insights</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <Button
          className="md:hidden"
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-background border-t border-border"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink>
            <NavLink href="#case-study" onClick={() => setIsMobileMenuOpen(false)}>Case Study</NavLink>
            <NavLink href="#expertise" onClick={() => setIsMobileMenuOpen(false)}>Expertise</NavLink>
            <NavLink href="#insights" onClick={() => setIsMobileMenuOpen(false)}>Insights</NavLink>
            <NavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children, onClick }) => (
  <Link href={href} onClick={onClick}>
    <span className="text-sm font-medium hover:text-primary transition-colors">{children}</span>
  </Link>
);