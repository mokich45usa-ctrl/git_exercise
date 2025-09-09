'use client';

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const portfolioItems = [
  {
    id: 1,
    title: "Сайт для салона красоты — готов за 1 день",
    image: "https://images.unsplash.com/photo-1633681140152-3b8726450518?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMHdlYnNpdGV8ZW58MXx8fHwxNzU1OTY5NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Красота"
  },
  {
    id: 2,
    title: "Ресторан — от дизайна до запуска",
    image: "https://images.unsplash.com/photo-1682778418768-16081e4470a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTU4OTgwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Ресторан"
  },
  {
    id: 3,
    title: "Фитнес-клуб — готов к рекламе",
    image: "https://images.unsplash.com/photo-1618355281782-b9475e02a65c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NTU5Njk0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Фитнес"
  },
  {
    id: 4,
    title: "Недвижимость — премиум решение",
    image: "https://images.unsplash.com/photo-1557696859-ebd88b12be5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NTU5Njk0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Недвижимость"
  },
  {
    id: 5,
    title: "Стоматология — медицинский сайт",
    image: "https://images.unsplash.com/photo-1643660527072-9c702932f606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjB3ZWJzaXRlfGVufDF8fHx8MTc1NTk2OTQ3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Медицина"
  },
  {
    id: 6,
    title: "Юридическая фирма — корпоративный стиль",
    image: "https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBmaXJtJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NTU5Njk0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Юриспруденция"
  }
];

export function PortfolioSection() {
  return (
    <section className="relative bg-gradient-to-b from-black to-gray-900 py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-8 bg-[#00ffff] transform -rotate-12 opacity-80" />
      <div className="absolute top-20 right-20 w-16 h-16 border-4 border-[#ff1493] transform rotate-45" />
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-[#ff1493] transform rotate-12 opacity-60" />

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
            ПРИМЕРЫ<br />
            <span className="text-[#ff1493]">РАБОТ</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Каждый сайт создан с нуля за 24 часа и готов к запуску рекламы
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative bg-black border-4 border-white shadow-[8px_8px_0px_#ff1493] group-hover:shadow-[12px_12px_0px_#ff1493] transition-all duration-300 overflow-hidden">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-[#00ffff] text-black px-3 py-1 text-sm font-black uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_black]">
                    {item.category}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#ff1493]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-white text-4xl font-black mb-2">👁</div>
                      <p className="text-white text-lg font-black uppercase tracking-wider">Смотреть</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-white font-black text-lg mb-2 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-[#00ffff] text-sm font-black uppercase">За 24 часа</span>
                    <div className="w-6 h-6 bg-[#ff1493] transform rotate-45"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            className="bg-[#ff1493] hover:bg-[#e6127e] text-white border-4 border-black shadow-[8px_8px_0px_black] hover:shadow-[6px_6px_0px_black] transform hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 px-12 py-8 text-xl font-black uppercase tracking-wider"
            size="lg"
          >
            Хочу такой же сайт
          </Button>
        </motion.div>
      </div>
    </section>
  );
}