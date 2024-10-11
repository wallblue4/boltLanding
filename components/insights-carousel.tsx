"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Card } from '@/components/ui/card';

const insights = [
  {
    title: 'The Future of AI in Healthcare',
    excerpt: 'Exploring how artificial intelligence is revolutionizing patient care and medical research.',
    image: 'https://source.unsplash.com/random/800x600?ai,healthcare',
  },
  {
    title: 'Ethical Considerations in AI Development',
    excerpt: 'Addressing the moral implications and responsibilities in creating AI systems.',
    image: 'https://source.unsplash.com/random/800x600?ai,ethics',
  },
  {
    title: 'AI-Driven Financial Forecasting',
    excerpt: 'How machine learning models are improving accuracy in financial predictions and risk assessment.',
    image: 'https://source.unsplash.com/random/800x600?ai,finance',
  },
  {
    title: 'The Role of AI in Sustainable Development',
    excerpt: 'Leveraging artificial intelligence to address global environmental challenges.',
    image: 'https://source.unsplash.com/random/800x600?ai,sustainability',
  },
];

export const InsightsCarousel = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <section id="insights" ref={ref} className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Latest Insights
        </motion.h2>
        {domLoaded && (
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {insights.map((insight, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-secondary/10 border-secondary/20 overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
                    <p className="text-muted-foreground">{insight.excerpt}</p>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};