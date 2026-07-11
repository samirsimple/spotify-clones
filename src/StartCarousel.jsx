import React, { useState } from 'react';

const StartCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = 3;

  const handleNext = () => {
    setActiveIndex((prev) => (prev === totalCards - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
  };

  return (
    <div className="w-full max-w-4xl p-8 bg-[#121212] text-white rounded-2xl shadow-2xl">
      {/* Шапка со стрелочками */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-black tracking-tight">С чего начать</h2>
        <div className="flex gap-3">
          <button 
            onClick={handlePrev} 
            className="p-2 bg-[#1f1f1f] hover:bg-[#2a2a2a] text-zinc-400 hover:text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-all duration-200 active:scale-95"
          >
            &lt;
          </button>
          <button 
            onClick={handleNext} 
            className="p-2 bg-[#1f1f1f] hover:bg-[#2a2a2a] text-zinc-400 hover:text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-all duration-200 active:scale-95"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Контейнер для карточек */}
      <div className="min-h-[280px] flex w-full transition-all duration-300">
        
        {/* Карточка 3 (Зеленая) */}
        {activeIndex === 0 && (
          <div className="w-full p-8 bg-gradient-to-br from-[#0f7150] to-[#0a4b35] rounded-2xl flex flex-col justify-between shadow-lg border border-emerald-800 animate-fade-in">
            <div>
              <h3 className="text-4xl font-black tracking-tighter mb-4">3. Посмотри...</h3>
              <p className="text-emerald-100 text-lg max-w-md font-medium leading-relaxed">
                Открой для себя уникальные ролики и клипы от любимых исполнителей и авторов контента.
              </p>
            </div>
            <button className="mt-6 self-start bg-white text-black font-bold px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-all duration-200 text-base shadow-md">
              Поиск видео
            </button>
          </div>
        )}

        {/* Карточка 4 (Бордовая) */}
        {activeIndex === 1 && (
          <div className="w-full p-8 bg-gradient-to-br from-[#511536] to-[#340d22] rounded-2xl flex flex-col justify-between shadow-lg border border-pink-900 animate-fade-in">
            <div>
              <h3 className="text-4xl font-black tracking-tighter mb-4">4. Добавь трек...</h3>
              <p className="text-pink-100 text-lg max-w-md font-medium leading-relaxed">
                Пополняй очередь воспроизведения и просто перетаскивай композиции, чтобы мгновенно менять их порядок.
              </p>
            </div>
            <button className="mt-6 self-start bg-[#1ed760] hover:bg-[#1fdf64] text-black font-bold px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-all duration-200 text-base shadow-md">
              Показать очередь
            </button>
          </div>
        )}

        {/* Карточка 5 (Синяя) */}
        {activeIndex === 2 && (
          <div className="w-full p-8 bg-gradient-to-br from-[#1e3a8a] to-[#172554] rounded-2xl flex flex-col justify-between shadow-lg border border-blue-900 animate-fade-in">
            <div>
              <h3 className="text-4xl font-black tracking-tighter mb-4">5. Настрой звук</h3>
              <p className="text-blue-100 text-lg max-w-md font-medium leading-relaxed">
                Включи максимальное качество стриминга и настрой эквалайзер под свои наушники.
              </p>
            </div>
            <button className="mt-6 self-start bg-white text-blue-900 font-bold px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-all duration-200 text-base shadow-md">
              Открыть настройки
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default StartCarousel;