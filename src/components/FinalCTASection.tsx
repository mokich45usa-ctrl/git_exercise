'use client';

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export function FinalCTASection() {
  const [formData, setFormData] = useState({
    name: '',
    contact: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-black to-[#ff1493]/10 py-20 overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border-8 border-[#ff1493] transform rotate-45"
          animate={{ rotate: [45, 135, 45], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-6 bg-[#00ffff] transform -rotate-12"
          animate={{ rotate: [-12, 12, -12], x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-20 h-40 bg-[#9d4edd] transform rotate-12"
          animate={{ rotate: [12, -12, 12], y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-10 w-16 h-16 border-6 border-[#00ffff] transform -rotate-45"
          animate={{ rotate: [-45, 45, -45], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
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
            ВАШ САЙТ МОЖЕТ БЫТЬ<br />
            <span className="text-[#ff1493]">ГОТОВ УЖЕ ЗАВТРА</span><br />
            ВСЕГО ОТ $300
          </motion.h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Не теряйте клиентов из-за отсутствия сайта.<br />
            Закажите профессиональный сайт прямо сейчас!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-black border-6 border-white shadow-[20px_20px_0px_#ff1493] relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#ff1493] to-[#00ffff] p-8 relative">
              <div className="text-center">
                <h3 className="text-black text-3xl font-black uppercase tracking-wider mb-2">
                  ЗАКАЗАТЬ САЙТ
                </h3>
                <p className="text-black/80 text-lg font-black">
                  Заполните форму и получите консультацию в течение 10 минут
                </p>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-black transform rotate-45" />
              <div className="absolute bottom-4 right-4 w-12 h-3 bg-black transform -rotate-12" />
            </div>

            {/* Form */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-white text-lg font-black uppercase tracking-wider mb-3">
                      Ваше имя *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Введите ваше имя"
                      className="bg-gray-800 border-4 border-[#ff1493] text-white placeholder-gray-400 text-lg p-4 focus:border-[#00ffff] focus:ring-0 transition-colors duration-300"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-white text-lg font-black uppercase tracking-wider mb-3">
                      Телефон или Email *
                    </label>
                    <Input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      placeholder="+7 (xxx) xxx-xx-xx или email"
                      className="bg-gray-800 border-4 border-[#ff1493] text-white placeholder-gray-400 text-lg p-4 focus:border-[#00ffff] focus:ring-0 transition-colors duration-300"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Button
                    type="submit"
                    className="bg-[#ff1493] hover:bg-[#e6127e] text-white border-4 border-black shadow-[8px_8px_0px_black] hover:shadow-[6px_6px_0px_black] transform hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 px-16 py-8 text-2xl font-black uppercase tracking-wider mb-4"
                    size="lg"
                  >
                    🚀 Заказать сайт
                  </Button>
                  <p className="text-gray-400 text-sm">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </motion.div>
              </form>

              {/* Alternative Contact Methods */}
              <motion.div
                className="mt-8 pt-8 border-t-4 border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-center text-white text-lg font-black uppercase tracking-wider mb-6">
                  Или свяжитесь с нами прямо сейчас:
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    className="bg-[#25D366] hover:bg-[#1eb855] text-white border-4 border-black shadow-[6px_6px_0px_black] hover:shadow-[4px_4px_0px_black] transform hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 px-8 py-6 text-lg font-black uppercase tracking-wider flex items-center gap-3"
                  >
                    <MessageCircle size={24} />
                    WhatsApp
                  </Button>
                  
                  <Button
                    className="bg-[#0088cc] hover:bg-[#006da3] text-white border-4 border-black shadow-[6px_6px_0px_black] hover:shadow-[4px_4px_0px_black] transform hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 px-8 py-6 text-lg font-black uppercase tracking-wider flex items-center gap-3"
                  >
                    <MessageCircle size={24} />
                    Telegram
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="border-4 border-white text-white hover:bg-white hover:text-black shadow-[6px_6px_0px_rgba(255,255,255,0.3)] hover:shadow-[4px_4px_0px_rgba(255,255,255,0.3)] transform hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 px-8 py-6 text-lg font-black uppercase tracking-wider bg-transparent flex items-center gap-3"
                  >
                    <Phone size={24} />
                    Позвонить
                  </Button>
                </div>
              </motion.div>

              {/* Guarantee */}
              <motion.div
                className="mt-8 bg-gradient-to-r from-[#ff1493]/20 to-[#00ffff]/20 border-4 border-[#ff1493] p-6 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-3 left-6 bg-[#ff1493] text-white px-4 py-1 text-sm font-black uppercase tracking-wider border-2 border-black">
                  ГАРАНТИЯ
                </div>
                <div className="text-center">
                  <p className="text-white text-lg font-black mb-2">
                    ⚡ Ваш сайт будет готов через 24 часа или мы вернем деньги!
                  </p>
                  <p className="text-gray-300">
                    Мы настолько уверены в качестве нашей работы, что даем 100% гарантию на сроки
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Line */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 bg-black border-4 border-[#00ffff] px-8 py-4 shadow-[8px_8px_0px_#00ffff]">
            <div className="text-[#00ffff] text-2xl">🚀</div>
            <p className="text-white font-black uppercase tracking-wider">
              15+ сайтов уже запущено в рекламу
            </p>
            <div className="text-[#ff1493] text-2xl">🔥</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}