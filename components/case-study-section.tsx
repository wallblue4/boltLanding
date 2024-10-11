"use client";

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as d3 from 'd3';
import { Card } from '@/components/ui/card';

const data = [
  { label: 'Efficiency Increase', value: 85 },
  { label: 'Cost Reduction', value: 40 },
  { label: 'Revenue Growth', value: 60 },
];

export const CaseStudySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const chartRef = useRef(null);

  useEffect(() => {
    if (inView && chartRef.current) {
      const svg = d3.select(chartRef.current);
      const width = 300;
      const height = 200;
      const margin = { top: 20, right: 20, bottom: 30, left: 40 };

      const x = d3.scaleBand()
        .range([margin.left, width - margin.right])
        .padding(0.1);

      const y = d3.scaleLinear()
        .range([height - margin.bottom, margin.top]);

      x.domain(data.map(d => d.label));
      y.domain([0, d3.max(data, d => d.value)]);

      svg.selectAll('*').remove();

      svg.append('g')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x));

      svg.append('g')
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));

      svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', d => x(d.label))
        .attr('y', d => y(d.value))
        .attr('width', x.bandwidth())
        .attr('height', d => height - margin.bottom - y(d.value))
        .attr('fill', '#4F46E5')
        .transition()
        .duration(1000)
        .attr('y', d => y(d.value))
        .attr('height', d => height - margin.bottom - y(d.value));
    }
  }, [inView]);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section id="case-study" ref={ref} className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Case Study: AI-Driven Transformation
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-secondary/10 border-secondary/20 p-6">
              <h3 className="text-2xl font-semibold mb-4">Global Manufacturing Company</h3>
              <p className="text-muted-foreground mb-4">
                We implemented an AI-powered predictive maintenance system, resulting in:
              </p>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>85% increase in equipment efficiency</li>
                <li>40% reduction in maintenance costs</li>
                <li>60% growth in overall productivity</li>
              </ul>
            </Card>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <svg ref={chartRef} width="100%" height="300" />
          </motion.div>
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <blockquote className="text-xl italic text-muted-foreground">
            "Futurion Partners' AI solution revolutionized our operations, driving unprecedented efficiency and growth."
          </blockquote>
          <p className="mt-2 font-semibold">- CTO, Global Manufacturing Company</p>
        </motion.div>
      </div>
    </section>
  );
};