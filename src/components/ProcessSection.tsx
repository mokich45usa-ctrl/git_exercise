'use client';

import { motion } from 'motion/react';
import { MessageSquare, Zap, Target } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'ВЫ ОСТАВЛЯЕТЕ',
    subtitle: 'ЗАЯВКУ',
    description: 'Рассказываете о своем бизнесе, целях и предпочтениях. Мы анализируем и готовим техническое задание.',
    icon: MessageSquare,
    color: '#ff1493'
  },
  {
    number: '02',
    title: 'МЫ ДЕЛАЕМ САЙТ',
    subtitle: 'ЗА 24 ЧАСА',
    description: 'Создаем современный дизайн, настраиваем функционал, подключаем аналитику и оптимизируем под поисковики.',
    icon: Zap,
    color: '#00ffff'
  },
  {
    number: '03',
    title: 'ВЫ ЗАПУСКАЕТЕ',
    subtitle: 'РЕКЛАМУ',
    description: 'Получаете готовый сайт, консультацию по запуску рекламы и начинаете привлекать первых клиентов.',
    icon: Target,
    color: '#9d4edd'
  }
];

export function ProcessSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-8 border-[#ff1493] transform rotate-45" />
        <div className="absolute top-20 right-20 w-24 h-6 bg-[#00ffff] transform -rotate-12" />
        <div className="absolute bottom-20 left-20 w-16 h-40 bg-[#9d4edd] transform rotate-12" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-6 border-[#ff1493] transform -rotate-45" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-white mb-8 uppercase tracking-tight"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 900,
              lineHeight: 0.9,
              textShadow: '4px 4px 0px #00ffff, 8px 8px 0px rgba(0,0,0,0.3)',
              letterSpacing: '-0.02em'
            }}
          >
            КАК ЭТО<br />
            <span className="text-[#ff1493]">РАБОТАЕТ</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Простой процесс от заявки до запуска рекламы
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#ff1493] via-[#00ffff] to-[#9d4edd] transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="relative">
                    {/* Step Number */}
                    <motion.div
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div 
                        className="w-16 h-16 border-4 border-black flex items-center justify-center text-black text-2xl font-black transform rotate-45"
                        style={{ backgroundColor: step.color }}
                      >
                        <span className="transform -rotate-45">{step.number}</span>
                      </div>
                    </motion.div>

                    {/* Main Card */}
                    <div 
                      className="bg-black border-4 border-white p-8 pt-12 relative group-hover:border-4 transition-all duration-300"
                      style={{
                        boxShadow: `12px 12px 0px ${step.color}`,
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `16px 16px 0px ${step.color}`;
                        e.currentTarget.style.transform = 'translate(-2px, -2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = `12px 12px 0px ${step.color}`;
                        e.currentTarget.style.transform = 'translate(0, 0)';
                      }}
                    >
                      {/* Icon */}
                      <motion.div
                        className="flex justify-center mb-6"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        <div 
                          className="w-20 h-20 border-4 border-black flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-300"
                          style={{ backgroundColor: step.color }}
                        >
                          <IconComponent size={36} className="text-black" />
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div className="text-center">
                        <h3 
                          className="text-white mb-2 uppercase tracking-wider"
                          style={{
                            fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                            fontWeight: 900,
                            lineHeight: 0.9,
                            textShadow: `2px 2px 0px ${step.color}`
                          }}
                        >
                          {step.title}
                        </h3>
                        <h4 
                          className="mb-4 uppercase tracking-wider"
                          style={{
                            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                            fontWeight: 800,
                            color: step.color,
                            textShadow: '1px 1px 0px rgba(0,0,0,0.5)'
                          }}
                        >
                          {step.subtitle}
                        </h4>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Decorative Elements */}
                      <div 
                        className="absolute top-4 right-4 w-6 h-6 transform rotate-45"
                        style={{ backgroundColor: step.color }}
                      />
                      <div 
                        className="absolute bottom-4 left-4 w-8 h-2 transform -rotate-12"
                        style={{ backgroundColor: step.color }}
                      />

                      {/* Bottom Accent */}
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-2"
                        style={{ backgroundColor: step.color }}
                      />
                    </div>
                  </div>

                  {/* Arrow (for desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                      <motion.div
                        className="text-white text-3xl"
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#ff1493] to-[#00ffff] p-1 inline-block transform rotate-1">
            <div className="bg-black p-6 transform -rotate-1">
              <p className="text-white text-xl font-black uppercase tracking-wider">
                🚀 Готовы начать? Оставьте заявку прямо сейчас!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}