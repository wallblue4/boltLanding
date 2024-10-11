"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Facebook, Twitter, LinkedIn, Instagram } from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef } from 'react';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

export const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (inView && !map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [-74.006, 40.7128], // New York City coordinates
        zoom: 12
      });
    }
  }, [inView]);

  return (
    <footer ref={ref} className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Futurion Partners</h3>
            <p className="text-muted-foreground">
              Transforming businesses with cutting-edge AI solutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#case-study">Case Study</Link></li>
              <li><Link href="#expertise">Expertise</Link></li>
              <li><Link href="#insights">Insights</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <LinkedIn />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div ref={mapContainer} className="h-64 rounded-lg overflow-hidden" />
        </motion.div>
        <motion.div
          className="mt-8 text-center text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p>&copy; 2023 Futurion Partners. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};