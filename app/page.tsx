"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Typed from 'typed.js';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { CaseStudySection } from '@/components/case-study-section';
import { ExpertiseSection } from '@/components/expertise-section';
import { InsightsCarousel } from '@/components/insights-carousel';
import { ContactForm } from '@/components/contact-form';
import { Footer } from '@/components/footer';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050A30] to-[#000C66] text-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <CaseStudySection />
      <ExpertiseSection />
      <InsightsCarousel />
      <ContactForm />
      <Footer />
    </main>
  );
}