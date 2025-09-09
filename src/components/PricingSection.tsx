'use client';

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Zap, Star, Crown, Gem } from 'lucide-react';

const packages = [
  {
    id: 'lite',
    name: 'LITE',
    price: '$300',
    icon: Zap,
    color: '#00ffff',
    popular: false,
    features: [
      '1 страница (лендинг)',
      'SEO',
      'Форма заявки',
      'Базовая аналитика'
    ],
    description: 'Для быстрого старта'
  },
  {
    id: 'standard',
    name: 'STANDARD',
    price: '$600-800',
    icon: Star,
    color: '#ff1493',
    popular: true,
    features: [
      '3-5 страниц',
      'Расширенное SEO',
      'Карта и контакты',
      'Интеграции',
      'Чат-бот'
    ],
    description: 'Для растущего бизнеса'
  },
  {
    id: 'pro',
    name: 'PRO',
    price: '$1200-1500',
    icon: Crown,
    color: '#9d4edd',
    popular: false,
    features: [
      '5-10 страниц',
      'Блог',
      'Онлайн-чат',
      'CRM интеграция',
      'Продвинутая аналитика'
    ],
    description: 'Корпоративное решение'
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    price: '$2500+',
    icon: Gem,
    color: '#f72585',
    popular: false,
    features: [
      'Полный кастом',
      'E-commerce',
      'Мультиязычность',
      'Поддержка 1 месяц',
      'Индивидуальный дизайн'
    ],
    description: 'Максимальные возможности'
  }
];

export function PricingSection() {
  return (
    <section className="relative bg-black py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 100px, #ff1493 100px, #ff1493 102px),
            repeating-linear-gradient(90deg, transparent, transparent 100px, #00ffff 100px, #00ffff 102px)
          `
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 border-6 border-[#ff1493] transform rotate-45" />
      <div className="absolute top-40 right-10 w-12 h-32 bg-[#00ffff] transform -rotate-12" />
      <div className="absolute bottom-20 left-10 w-32 h-8 bg-[#9d4edd] transform rotate-12" />

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
              textShadow: '4px 4px 0px #ff1493, 8px 8px 0px rgba(0,0,0,0.3)',
              letterSpacing: '-0.02em'
            }}
          >
            ВЫБИРАЙТЕ ПАКЕТ<br />
            <span className="text-[#ff1493]">ПОД ВАШИ ЗАДАЧИ</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Каждый пакет — это готовое решение для вашего бизнеса
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <motion.div
                key={pkg.id}
                className="relative group"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: pkg.popular ? 1.02 : 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-[#ff1493] text-white px-4 py-2 text-sm font-black uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_black] transform rotate-2">
                      ХИТ ПРОДАЖ
                    </div>
                  </div>
                )}

                <div 
                  className={`relative bg-gray-900 border-4 border-white h-full group-hover:border-4 transition-all duration-300 ${
                    pkg.popular ? 'scale-105 border-[#ff1493]' : ''
                  }`}
                  style={{
                    boxShadow: `12px 12px 0px ${pkg.color}`,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `16px 16px 0px ${pkg.color}`;
                    e.currentTarget.style.transform = pkg.popular ? 'scale(1.05) translate(-2px, -2px)' : 'translate(-2px, -2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `12px 12px 0px ${pkg.color}`;
                    e.currentTarget.style.transform = pkg.popular ? 'scale(1.05) translate(0, 0)' : 'translate(0, 0)';
                  }}
                >
                  {/* Header */}
                  <div 
                    className="p-6 relative"
                    style={{ backgroundColor: pkg.color }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300"
                      >
                        <IconComponent size={24} className="text-black" />
                      </div>
                      <div className="text-right">
                        <div className="text-black text-2xl font-black">{pkg.price}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-black text-2xl font-black uppercase tracking-wider mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-black/80 font-black text-sm uppercase">
                      {pkg.description}
                    </p>

                    {/* Decorative Corner */}
                    <div className="absolute top-2 right-2 w-4 h-4 bg-black transform rotate-45" />
                  </div>

                  {/* Features */}
                  <div className="p-6 flex-grow">
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center gap-3 text-white"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.1) }}
                          viewport={{ once: true }}
                        >
                          <div 
                            className="w-4 h-4 transform rotate-45 flex-shrink-0"
                            style={{ backgroundColor: pkg.color }}
                          />
                          <span className="text-sm font-medium">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <Button
                      className="w-full bg-transparent border-4 border-white text-white hover:bg-white hover:text-black shadow-[4px_4px_0px_rgba(255,255,255,0.3)] hover:shadow-[6px_6px_0px_rgba(255,255,255,0.3)] transform hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150 py-6 font-black uppercase tracking-wider"
                      style={{
                        borderColor: pkg.color,
                        color: pkg.color
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = pkg.color;
                        e.currentTarget.style.color = 'black';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = pkg.color;
                      }}
                    >
                      Заказать пакет
                    </Button>
                  </div>

                  {/* Bottom Accent */}
                  <div 
                    className="h-2"
                    style={{ backgroundColor: pkg.color }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            className="border-4 border-white text-white hover:bg-white hover:text-black shadow-[8px_8px_0px_rgba(255,255,255,0.3)] hover:shadow-[6px_6px_0px_rgba(255,255,255,0.3)] transform hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 px-12 py-8 text-xl font-black uppercase tracking-wider bg-transparent"
            size="lg"
          >
            Посмотреть все цены
          </Button>
        </motion.div>
      </div>
    </section>
  );
}