'use client';

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Check, Zap } from 'lucide-react';

const liteFeatures = [
  "1 страница (лендинг)",
  "Современный адаптивный дизайн",
  "Форма заявки + WhatsApp/Telegram",
  "Базовое SEO",
  "Подключение аналитики (GA4 или Meta Pixel)",
  "Оптимизация скорости загрузки",
  "SSL сертификат",
  "Техподдержка 7 дней"
];

export function LitePackageSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-black py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border-8 border-[#ff1493] transform rotate-45" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#00ffff] transform -rotate-12" />
        <div className="absolute top-1/2 right-10 w-8 h-40 bg-[#ff1493] transform rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-white mb-8 uppercase tracking-tight"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 900,
              lineHeight: 0.9,
              textShadow: '4px 4px 0px #ff1493, 8px 8px 0px rgba(0,0,0,0.3)',
              letterSpacing: '-0.02em'
            }}
            whileHover={{ scale: 1.02 }}
          >
            ЧТО ВХОДИТ В<br />
            <span className="text-[#ff1493]">$300</span>
          </motion.h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Полный пакет для запуска вашего бизнеса онлайн
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-black border-6 border-white shadow-[16px_16px_0px_#ff1493] relative overflow-hidden">
              {/* Header */}
              <div className="bg-[#ff1493] p-8 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center transform -rotate-12">
                      <Zap size={32} className="text-black" />
                    </div>
                    <div>
                      <h3 className="text-white text-3xl font-black uppercase tracking-wider">
                        LITE ПАКЕТ
                      </h3>
                      <p className="text-white/90 text-lg font-black">
                        Идеально для старта
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white text-5xl font-black mb-2">$300</div>
                    <div className="text-white/90 text-lg font-black uppercase">
                      Фиксированная цена
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white transform rotate-45" />
                <div className="absolute bottom-4 left-4 w-12 h-3 bg-black transform -rotate-12" />
              </div>

              {/* Features List */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {liteFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 group"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-8 h-8 bg-[#00ffff] border-2 border-black flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-transform duration-300">
                        <Check size={16} className="text-black transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                      <span className="text-white text-lg font-medium group-hover:text-[#00ffff] transition-colors duration-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bonus Section */}
                <motion.div
                  className="mt-8 p-6 bg-gray-800 border-4 border-[#00ffff] relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -top-3 left-6 bg-[#00ffff] text-black px-4 py-1 text-sm font-black uppercase tracking-wider">
                    БОНУС
                  </div>
                  <p className="text-white text-lg">
                    <span className="text-[#00ffff] font-black">БЕСПЛАТНО:</span> Консультация по запуску рекламы + гайд по привлечению первых клиентов
                  </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                  className="text-center mt-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <Button
                    className="bg-[#ff1493] hover:bg-[#e6127e] text-white border-4 border-black shadow-[8px_8px_0px_black] hover:shadow-[6px_6px_0px_black] transform hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 px-12 py-8 text-xl font-black uppercase tracking-wider"
                    size="lg"
                  >
                    Заказать Lite за $300
                  </Button>
                  <p className="text-gray-400 text-sm mt-4">
                    ⚡ Сайт будет готов через 24 часа
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}