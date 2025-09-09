'use client';

import { motion } from 'motion/react';
import { Zap, DollarSign, Rocket } from 'lucide-react';

const advantages = [
  {
    icon: Zap,
    title: "СКОРОСТЬ",
    subtitle: "САЙТ ЗА 24 ЧАСА",
    description: "Пока конкуренты думают, ваш сайт уже работает и привлекает клиентов",
    color: "#ff1493"
  },
  {
    icon: DollarSign,
    title: "ПРОЗРАЧНАЯ",
    subtitle: "ЦЕНА — ОТ $300",
    description: "Никаких скрытых платежей. Фиксированная стоимость — знаете сразу, сколько потратите",
    color: "#00ffff"
  },
  {
    icon: Rocket,
    title: "ГОТОВ К РЕКЛАМЕ",
    subtitle: "И SEO",
    description: "Оптимизация под поисковики, подключение аналитики — запускайте рекламу сразу",
    color: "#ff1493"
  }
];

export function AdvantagesSection() {
  return (
    <section className="relative bg-black py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, #ff1493 50px, #ff1493 52px)`
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-16 right-16 w-24 h-6 bg-[#00ffff] transform rotate-12" />
      <div className="absolute bottom-16 left-16 w-16 h-16 border-6 border-[#ff1493] transform -rotate-12" />
      <div className="absolute top-1/2 left-10 w-6 h-24 bg-white transform -rotate-45" />

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
              textShadow: '3px 3px 0px #00ffff, 6px 6px 0px rgba(0,0,0,0.3)',
              letterSpacing: '-0.02em'
            }}
          >
            ПОЧЕМУ<br />
            <span className="text-[#ff1493]">МЫ?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div 
                  className="relative bg-gray-900 border-4 border-white p-8 h-full group-hover:border-4 transition-all duration-300"
                  style={{
                    boxShadow: `12px 12px 0px ${advantage.color}`,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `16px 16px 0px ${advantage.color}`;
                    e.currentTarget.style.transform = 'translate(-2px, -2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `12px 12px 0px ${advantage.color}`;
                    e.currentTarget.style.transform = 'translate(0, 0)';
                  }}
                >
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div 
                      className="w-20 h-20 flex items-center justify-center border-4 border-black transform rotate-12 group-hover:rotate-0 transition-transform duration-300"
                      style={{ backgroundColor: advantage.color }}
                    >
                      <IconComponent size={40} className="text-black" />
                    </div>
                    {/* Icon Shadow */}
                    <div 
                      className="absolute top-2 left-2 w-20 h-20 -z-10"
                      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 
                      className="text-white mb-2 uppercase tracking-wider"
                      style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                        fontWeight: 900,
                        lineHeight: 0.9,
                        textShadow: `2px 2px 0px ${advantage.color}`
                      }}
                    >
                      {advantage.title}
                    </h3>
                    <h4 
                      className="mb-4 uppercase tracking-wider"
                      style={{
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        fontWeight: 800,
                        color: advantage.color,
                        textShadow: '1px 1px 0px rgba(0,0,0,0.5)'
                      }}
                    >
                      {advantage.subtitle}
                    </h4>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div 
                    className="absolute top-4 right-4 w-6 h-6 transform rotate-45"
                    style={{ backgroundColor: advantage.color }}
                  />

                  {/* Bottom Accent */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-2"
                    style={{ backgroundColor: advantage.color }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}