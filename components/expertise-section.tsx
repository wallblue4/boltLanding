"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Database, Globe, ShieldCheck, Smartphone } from 'lucide-react';

const expertiseAreas = [
  { icon: Database, label: 'Big Data' },
  { icon: Globe, label: 'Cloud Computing' },
  { icon: ShieldCheck, label: 'Cybersecurity' },
  { icon: Smartphone, label: 'IoT' },
];

export const ExpertiseSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="expertise" ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Our Expertise
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {expertiseAreas.map((area, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="flex flex-col items-center justify-center p-6 h-full bg-secondary/10 border-secondary/20 rotate-3d">
                <area.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-lg font-semibold text-center">{area.label}</h3>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-2xl font-semibold mb-4">
            <span className="text-primary">500+</span> Projects Completed
          </p>
          <p className="text-muted-foreground">
            Trusted by leading companies across various industries
          </p>
        </motion.div>
      </div>
    </section>
  );
};