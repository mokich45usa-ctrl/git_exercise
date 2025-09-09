'use client';

import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    clientName: "Анна Петрова",
    business: "Салон красоты 'Афродита'",
    website: "https://images.unsplash.com/photo-1633681140152-3b8726450518?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMHdlYnNpdGV8ZW58MXx8fHwxNzU1OTY5NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    message: "Спасибо огромное! Сайт получился именно таким, как я мечтала. Уже через день после запуска пошли первые заявки! 🔥",
    phone: "https://images.unsplash.com/photo-1642724978334-218b27d2c472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGF0c2FwcCUyMG1lc3NhZ2UlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1NTk2OTQ3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5
  },
  {
    id: 2,
    clientName: "Михаил Козлов",
    business: "Ресторан 'Вкус жизни'",
    website: "https://images.unsplash.com/photo-1682778418768-16081e4470a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTU4OTgwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    message: "Ребята, вы просто волшебники! За сутки сделали то, что другие обещали за месяц. Заказы через сайт уже идут! 💪",
    phone: "https://images.unsplash.com/photo-1605165540422-ecd23dcad583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMG1vYmlsZSUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzU1OTY5NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5
  },
  {
    id: 3,
    clientName: "Елена Смирнова",
    business: "Фитнес-клуб 'Энергия'",
    website: "https://images.unsplash.com/photo-1618355281782-b9475e02a65c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NTU5Njk0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    message: "Невероятно! Сайт выглядит дорого и профессионально. Клиенты в восторге, записи через сайт увеличились в разы! ⚡",
    phone: "https://images.unsplash.com/photo-1642724978334-218b27d2c472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGF0c2FwcCUyMG1lc3NhZ2UlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1NTk2OTQ3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="relative bg-gradient-to-b from-black to-gray-900 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-8 bg-[#ff1493] transform rotate-12" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border-8 border-[#00ffff] transform -rotate-12" />
        <div className="absolute top-1/2 left-10 w-8 h-32 bg-[#9d4edd] transform rotate-45" />
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
              textShadow: '4px 4px 0px #ff1493, 8px 8px 0px rgba(0,0,0,0.3)',
              letterSpacing: '-0.02em'
            }}
          >
            ЧТО ГОВОРЯТ<br />
            <span className="text-[#ff1493]">КЛИЕНТЫ</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Реальные отзывы от владельцев бизнеса
          </p>
        </motion.div>

        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Website Screenshot */}
                <motion.div
                  className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <div className="bg-black border-6 border-white shadow-[12px_12px_0px_#ff1493] overflow-hidden">
                      <div className="aspect-[4/3] relative">
                        <ImageWithFallback
                          src={testimonial.website}
                          alt={`Website for ${testimonial.business}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                        
                        {/* Website Label */}
                        <div className="absolute top-4 left-4 bg-[#00ffff] text-black px-3 py-1 text-sm font-black uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_black]">
                          ГОТОВЫЙ САЙТ
                        </div>

                        {/* Business Info */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <h4 className="text-white text-xl font-black mb-1">
                            {testimonial.business}
                          </h4>
                          <p className="text-gray-300">
                            Владелец: {testimonial.clientName}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#ff1493] transform rotate-45" />
                    <div className="absolute -bottom-3 -left-3 w-12 h-3 bg-[#00ffff] transform -rotate-12" />
                  </div>
                </motion.div>

                {/* Message Screenshot */}
                <motion.div
                  className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    {/* Phone Frame */}
                    <div className="bg-black border-4 border-[#00ffff] shadow-[8px_8px_0px_#ff1493] p-6 relative">
                      {/* Message Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-[#ff1493] border-2 border-black flex items-center justify-center transform rotate-45">
                          <MessageCircle size={16} className="text-black transform -rotate-45" />
                        </div>
                        <div>
                          <h5 className="text-white font-black text-sm uppercase">
                            {testimonial.clientName}
                          </h5>
                          <div className="flex items-center gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} size={12} className="text-[#ff1493] fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Message Bubble */}
                      <div className="bg-[#ff1493] text-black p-4 relative border-2 border-black shadow-[4px_4px_0px_black]">
                        <p className="font-black text-lg">
                          "{testimonial.message}"
                        </p>
                        
                        {/* Message Tail */}
                        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-[#ff1493] border-2 border-black transform rotate-45" />
                      </div>

                      {/* Time Stamp */}
                      <div className="text-gray-400 text-xs mt-2 text-right font-black uppercase">
                        Только что • Прочитано ✓✓
                      </div>

                      {/* Phone Mockup Elements */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full" />
                      <div className="absolute top-2 right-4 w-2 h-2 bg-[#00ffff] rounded-full" />
                    </div>

                    {/* Quote Decoration */}
                    <div className="absolute -top-4 -left-4 text-[#ff1493] text-6xl font-black opacity-50">
                      "
                    </div>
                    <div className="absolute -bottom-4 -right-4 text-[#00ffff] text-6xl font-black opacity-50 rotate-180">
                      "
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border-4 border-[#ff1493] p-6 shadow-[8px_8px_0px_#ff1493] relative">
              <div className="text-[#ff1493] text-4xl font-black mb-2">15+</div>
              <p className="text-white font-black uppercase tracking-wider">Запущенных сайтов</p>
              <div className="absolute top-2 right-2 w-4 h-4 bg-[#ff1493] transform rotate-45" />
            </div>
            <div className="bg-black border-4 border-[#00ffff] p-6 shadow-[8px_8px_0px_#00ffff] relative">
              <div className="text-[#00ffff] text-4xl font-black mb-2">24</div>
              <p className="text-white font-black uppercase tracking-wider">Часа на создание</p>
              <div className="absolute top-2 right-2 w-4 h-4 bg-[#00ffff] transform rotate-45" />
            </div>
            <div className="bg-black border-4 border-[#9d4edd] p-6 shadow-[8px_8px_0px_#9d4edd] relative">
              <div className="text-[#9d4edd] text-4xl font-black mb-2">100%</div>
              <p className="text-white font-black uppercase tracking-wider">Довольных клиентов</p>
              <div className="absolute top-2 right-2 w-4 h-4 bg-[#9d4edd] transform rotate-45" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}