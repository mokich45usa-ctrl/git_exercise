'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const websitePreviewUrls = [
  "https://images.unsplash.com/photo-1630522790858-50b4ef44944b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc1NTg3OTgxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1691073121676-1ab3a6d3d743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbGFwdG9wfGVufDF8fHx8MTc1NTg3MjUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NTg1Nzc3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
];

export function BrutalistHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [phase, setPhase] = useState<'initial' | 'zooming' | 'carousel'>('initial');

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('zooming');
      setTimeout(() => {
        setPhase('carousel');
      }, 1500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase === 'carousel') {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % websitePreviewUrls.length);
          setIsAnimating(false);
        }, 800);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [phase]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Layer */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{
          scale: phase === 'zooming' ? 3 : phase === 'carousel' ? 5 : 1,
        }}
        transition={{ duration: 1.5, ease: [0.645, 0.045, 0.355, 1] }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1660404871825-6172f096ebfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnV0YWxpc3QlMjBhcmNoaXRlY3R1cmUlMjBjb25jcmV0ZXxlbnwxfHx8fDE3NTU5Njg2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Brutalist architecture background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4">
        <AnimatePresence mode="wait">
          {phase === 'initial' || phase === 'zooming' ? (
            <motion.div
              key="initial-content"
              className="text-center max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ 
                opacity: 0, 
                scale: 0.8,
                filter: "blur(4px)"
              }}
              transition={{ duration: 0.8 }}
            >
              {/* Brutalist Typography */}
              <motion.h1 
                className="text-white mb-8 tracking-tight"
                style={{
                  fontSize: 'clamp(2.5rem, 8vw, 7rem)',
                  fontWeight: 900,
                  lineHeight: 0.85,
                  textShadow: '4px 4px 0px #ff1493, 8px 8px 0px rgba(0,0,0,0.3)',
                  letterSpacing: '-0.05em'
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                ВАШ НОВЫЙ САЙТ<br />
                <span className="text-[#ff1493]">ВСЕГО ЗА 24 ЧАСА</span><br />
                — от $300
              </motion.h1>

              <motion.p 
                className="text-gray-300 mb-12 max-w-2xl mx-auto"
                style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                  fontWeight: 500,
                  lineHeight: 1.4
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Современный дизайн, готовый к рекламе и SEO.<br />
                Запустите бизнес онлайн уже завтра.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Button
                  className="bg-[#ff1493] hover:bg-[#e6127e] text-white border-4 border-black shadow-[6px_6px_0px_black] hover:shadow-[4px_4px_0px_black] transform hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 px-8 py-6 text-lg font-black uppercase tracking-wider"
                  size="lg"
                >
                  Запустить сайт за $300
                </Button>
                <Button
                  variant="outline"
                  className="border-4 border-white text-white hover:bg-white hover:text-black shadow-[6px_6px_0px_rgba(255,255,255,0.3)] hover:shadow-[4px_4px_0px_rgba(255,255,255,0.3)] transform hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 px-8 py-6 text-lg font-black uppercase tracking-wider bg-transparent"
                  size="lg"
                >
                  Посмотреть все цены
                </Button>
              </motion.div>

              {/* Trust Line */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-3 bg-black/50 border-2 border-[#00ffff] px-6 py-3 backdrop-blur-sm">
                  <div className="text-[#00ffff] text-lg">🚀</div>
                  <p className="text-white font-black text-sm uppercase tracking-wider">
                    15+ сайтов уже запущено в рекламу
                  </p>
                  <div className="text-[#ff1493] text-lg">🔥</div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="carousel-content"
              className="w-full max-w-6xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.645, 0.045, 0.355, 1] }}
            >
              {/* Website Preview Carousel */}
              <div className="relative h-[600px] perspective-[1000px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    className="absolute inset-0"
                    initial={{ 
                      scale: 0.3, 
                      rotateY: -90,
                      opacity: 0,
                      z: -100
                    }}
                    animate={{ 
                      scale: 1, 
                      rotateY: 0,
                      opacity: 1,
                      z: 0
                    }}
                    exit={{ 
                      scale: 3, 
                      rotateY: 90,
                      opacity: 0,
                      z: 100
                    }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.645, 0.045, 0.355, 1]
                    }}
                  >
                    <div className="relative w-full h-full border-8 border-white shadow-[20px_20px_0px_#ff1493] bg-black">
                      <ImageWithFallback
                        src={websitePreviewUrls[currentSlide]}
                        alt={`Website preview ${currentSlide + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                      
                      {/* Preview Label */}
                      <div className="absolute top-6 left-6 bg-[#ff1493] text-white px-4 py-2 font-black uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_black]">
                        Сайт #{currentSlide + 1}
                      </div>

                      {/* Preview Info */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-white text-2xl font-black mb-2 text-shadow-lg">
                          {currentSlide === 0 && "Современный Бизнес"}
                          {currentSlide === 1 && "Интернет-Магазин"}
                          {currentSlide === 2 && "Креативное Портфолио"}
                        </h3>
                        <p className="text-gray-300 text-lg">
                          {currentSlide === 0 && "Корпоративный сайт с современным дизайном"}
                          {currentSlide === 1 && "E-commerce решение для онлайн торговли"}
                          {currentSlide === 2 && "Портфолио для творческих профессионалов"}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  {websitePreviewUrls.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-4 h-4 border-2 border-white cursor-pointer ${
                        index === currentSlide ? 'bg-[#ff1493]' : 'bg-transparent'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        if (!isAnimating) {
                          setIsAnimating(true);
                          setTimeout(() => {
                            setCurrentSlide(index);
                            setIsAnimating(false);
                          }, 400);
                        }
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* CTA Section for Carousel Phase */}
              <motion.div 
                className="text-center mt-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <h2 className="text-white text-3xl font-black mb-8 uppercase tracking-wider">
                  Выберите свой стиль
                </h2>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button
                    className="bg-[#ff1493] hover:bg-[#e6127e] text-white border-4 border-black shadow-[6px_6px_0px_black] hover:shadow-[4px_4px_0px_black] transform hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 px-8 py-6 text-lg font-black uppercase tracking-wider"
                    size="lg"
                  >
                    Запустить сайт за $300
                  </Button>
                  <Button
                    variant="outline"
                    className="border-4 border-white text-white hover:bg-white hover:text-black shadow-[6px_6px_0px_rgba(255,255,255,0.3)] hover:shadow-[4px_4px_0px_rgba(255,255,255,0.3)] transform hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 px-8 py-6 text-lg font-black uppercase tracking-wider bg-transparent"
                    size="lg"
                  >
                    Посмотреть все цены
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-4 border-[#ff1493] bg-transparent transform rotate-45" />
      <div className="absolute top-8 right-8 w-12 h-12 bg-[#ff1493] transform rotate-12" />
      <div className="absolute bottom-8 left-8 w-20 h-4 bg-white transform -rotate-12" />
      <div className="absolute bottom-8 right-8 w-8 h-20 border-4 border-white bg-transparent" />
    </div>
  );
}