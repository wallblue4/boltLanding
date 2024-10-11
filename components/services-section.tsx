"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Brain, Cpu, LineChart, Zap } from 'lucide-react';

const services = [
  {
    title: 'AI Strategy Consulting',
    description: 'Develop a comprehensive AI roadmap tailored to your business needs.',
    icon: Brain,
  },
  {
    title: 'Machine Learning Solutions',
    description: 'Custom ML models to solve complex business problems and drive insights.',
    icon: Cpu,
  },
  {
    title: 'Data Analytics & Visualization',
    description: 'Transform raw data into actionable insights with advanced analytics.',
    icon: LineChart,
  },
  {
    title: 'AI-Powered Automation',
    description: 'Streamline operations and boost efficiency with intelligent automation.',
    icon: Zap,
  },
];

export const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="service-card h-full bg-secondary/10 border-secondary/20 p-6 flex flex-col items-center text-center">
                <service.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};