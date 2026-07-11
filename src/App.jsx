import React from 'react';
import { useState } from 'react';
import StartCarousel from './StartCarousel'; // или укажи правильный путь, например, './components/StartCarousel'
import { useRef } from 'react';

function App() {
const [isSidebarOpen, setIsSidebarOpen] = useState(true);
const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true)
const [isScrolled, setIsScrolled] = useState(false);
const handleScroll = (e) => {
  if (e.target.scrollTop > 50) {
    setIsScrolled(true);
  } else {
    setIsScrolled(false);
  }
};



const onSliderScroll = (direction, sliderId) => {
    const slider = document.getElementById(sliderId);
    if (slider) {
      const scrollAmount = 500;
      if (direction === 'left') {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };


const tasteData = [
  { id: 1, title: "Madara Speech", desc: "авг. 2022 г. • 2 мин.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300" },
  { id: 2, title: "Dad tax vs cakes", desc: "2 июл. • 1 мин.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" },
  { id: 3, title: "5 Dates in 24 Hours", desc: "19 июн. • 21 мин.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" },
  { id: 4, title: "أثرى الأشخاص في العالم", desc: "авг. 2022 г. • 26 мин.", img: "https://images.unsplash.com/photo-1614680376593-902f74fa0d41?w=300" },
  { id: 5, title: "Dangerously yours", desc: "янв. 2023 г. • 3 мин.", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" }
];

// 2. Недавно прослушанное
const recentlyPlayedData = [
  { id: 1, title: "Chill Lofi Beats", desc: "Расслабляющий плейлист для кодинга", img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300" },
  { id: 2, title: "Synthwave Drive", desc: "Ночной ретро-вайб 80-х", img: "https://images.unsplash.com/photo-1515462277126-270d878326e5?w=300" },
  { id: 3, title: "Underground Rap", desc: "Тяжелые биты и сочный флоу", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300" },
  { id: 4, title: "Podcast #42", desc: "Выпуск 12 • ИИ захватывает мир", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=300" },
  { id: 5, title: "Acoustic Evenings", desc: "Ламповый звук гитары", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" }
];

// 3. Хиты недели
const weeklyHitsData = [
  { id: 1, title: "Cyberpunk 2077 OST", desc: "Саундтрек Найт-Сити", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300" },
  { id: 2, title: "Phonk Shift", desc: "Для жесткого дрифта и тренировок", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300" },
  { id: 3, title: "Pop Anthems", desc: "Главные треки мировых чартов", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" },
  { id: 4, title: "Rock Classics", desc: "Легендарные хиты на все времена", img: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300" },
  { id: 5, title: "Deep House Vibe", desc: "Клубный кач и глубокий бас", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300" }
];

// 4. Оливер Три и его треки
const oliverTreeData = [
  { id: 1, title: "Oliver Tree", desc: "Артист", img: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=300" }, 
  { id: 2, title: "Miss You", desc: "Oliver Tree, Robin Schulz", img: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=300" },
  { id: 3, title: "Life Goes On", desc: "Популярный трек Оливера", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300" },
  { id: 4, title: "Little Big", desc: "Коллаборации и похожие", img: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?w=300" },
  { id: 5, title: "Alternative Pop", desc: "Микс в стиле Оливера Три", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" }
];

const popularPlaylistsData = [
  { id: 1, title: "Today's Top Hits", desc: "Jung Kook, Taylor Swift и др.", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" },
  { id: 2, title: "Chillout Mix", desc: "Спокойная музыка на вечер", img: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300" },
  { id: 3, title: "All Out 2010s", desc: "Главные ностальгические треки", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300" },
  { id: 4, title: "Mega Hit Mix", desc: "Танцевальные бомбы этого года", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" },
  { id: 5, title: "Focus Flow", desc: "Инструментальный хип-хоп", img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300" }
];

// 6. Электронная музыка
const electroMusicData = [
  { id: 1, title: "Techno Anthems", desc: "Берлинский андеграунд", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" },
  { id: 2, title: "House Party", desc: "Энергичный хаус для вечеринок", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300" },
  { id: 3, title: "EDM Mainstage", desc: "Крупнейшие фестивали мира", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300" },
  { id: 4, title: "Ambient Dreams", desc: "Глубокое погружение и синтезаторы", img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300" },
  { id: 5, title: "Drum & Bass Area", desc: "Быстрый темп и мощный ломаный бит", img: "https://images.unsplash.com/photo-1515462277126-270d878326e5?w=300" }
];

// 7. Подкасты для вас
const podcastsData = [
  { id: 1, title: "Joe Rogan Experience", desc: "Интервью обо всем на свете", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=300" },
  { id: 2, title: "Lex Fridman Podcast", desc: "Беседы про науку, ИИ и жизнь", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" },
  { id: 3, title: "Huberman Lab", desc: "Как оптимизировать работу мозга", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" },
  { id: 4, title: "Tech Stuff", desc: "Разбор главных новостей технологий", img: "https://images.unsplash.com/photo-1614680376593-902f74fa0d41?w=300" },
  { id: 5, title: "True Crime Stories", desc: "Детективные расследования", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300" }
];

// 8. Новые релизы
const newReleasesData = [
  { id: 1, title: "The Weeknd - Dawn FM", desc: "Новый концептуальный релиз", img: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=300" },
  { id: 2, title: "Travis Scott - Utopia", desc: "Главный рэп-альбом года", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300" },
  { id: 3, title: "Billie Eilish Single", desc: "Мрачный и меланхоличный поп", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" },
  { id: 4, title: "Fred again.. Album", desc: "Эмоциональная электроника", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300" },
  { id: 5, title: "Dua Lipa Club Mix", desc: "Новый диско-сингл", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" }
];

// 9. Метал и Рок
const metalRockData = [
  { id: 1, title: "Bring Me The Horizon", desc: "Пост-хардкор и альтернатива", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300" },
  { id: 2, title: "Metallica", desc: "Классика трэш-метала", img: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300" },
  { id: 3, title: "Linkin Park Hits", desc: "Лучшее из ню-метала 2000-х", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" },
  { id: 4, title: "Rammstein Essentials", desc: "Индустриальный немецкий метал", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300" },
  { id: 5, title: "Spiritbox", desc: "Современный прогрессивный метал", img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300" }
];

// 10. Топ чарты
const topChartsData = [
  { id: 1, title: "World Top 50", desc: "Главные треки планеты Земля", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" },
  { id: 2, title: "Russia Top 50", desc: "Самые популярные треки в СНГ", img: "https://images.unsplash.com/photo-1614680376593-902f74fa0d41?w=300" },
  { id: 3, title: "USA Top 50", desc: "Американский чарт Billboard", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300" },
  { id: 4, title: "Viral 50 Global", desc: "Тренды ТикТока и интернета", img: "https://images.unsplash.com/photo-1515462277126-270d878326e5?w=300" },
  { id: 5, title: "Daily Top Tracks", desc: "Ежедневное обновление чарта", img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300" }
];


const workoutMusicData = [
  { id: 1, title: "Beast Mode", desc: "Чистая мотивация и мощный бас", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=300" },
  { id: 2, title: "Cardio Fast Beats", desc: "Идеальный темп для бега", img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=300" },
  { id: 3, title: "Gym Hip-Hop", desc: "Агрессивный рэп для тяжелых весов", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300" },
  { id: 4, title: "Power Rock Workout", desc: "Драйвовые гитары для жесткого сета", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300" },
  { id: 5, title: "Stretching Chill", desc: "Расслабляющий звук для заминки", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300" }
];

// 12. Атмосфера видеоигр (OST)
const gamingOstData = [
  { id: 1, title: "Witcher 3: Wild Hunt", desc: "Славянские мотивы и дух приключений", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300" },
  { id: 2, title: "Doom Eternal OST", desc: "Тяжелый индастриал-метал от Мика Гордона", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300" },
  { id: 3, title: "GTA V: Radio Mirror Park", desc: "Лучший инди-поп и синти-вейб", img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=300" },
  { id: 4, title: "Skyrim Atmosphere", desc: "Эпический хор и фэнтезийный эмбиент", img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300" },
  { id: 5, title: "Minecraft Calm", desc: "Ностальгические пиксельные мелодии C418", img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300" }
];

// 13. Акустика и Каверы
const acousticCoversData = [
  { id: 1, title: "Unplugged Classics", desc: "Знаменитые рок-хиты без электричества", img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300" },
  { id: 2, title: "Pop Goes Acoustic", desc: "Свежие радио-хиты под гитару", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" },
  { id: 3, title: "Piano Favourites", desc: "Невероятные фортепианные аранжировки", img: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300" },
  { id: 4, title: "Indie Folk Vibe", desc: "Ламповый фолк у костра", img: "https://images.unsplash.com/photo-1487180142328-0c4e37023af5?w=300" },
  { id: 5, title: "Lo-Fi Guitar", desc: "Спокойные переборы с виниловым треском", img: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?w=300" }
];

// 14. Джаз и Блюз вечер
const jazzEveningData = [
  { id: 1, title: "Late Night Jazz", desc: "Майлз Дэвис и золотая эпоха", img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300" },
  { id: 2, title: "Coffee & Saxophone", desc: "Идеальный фон для чашки эспрессо", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" },
  { id: 3, title: "Blue Note Session", desc: "Классический нью-йоркский блюз", img: "https://images.unsplash.com/photo-1525994886773-080587e161c2?w=300" },
  { id: 4, title: "Vocal Jazz Gems", desc: "Элла Фицджеральд и Луи Армстронг", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300" },
  { id: 5, title: "Bossa Nova Chill", desc: "Расслабляющие бразильские ритмы", img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300" }
];

// 15. Тренды TikTok
const tiktokTrendsData = [
  { id: 1, title: "Speed Up Anthems", desc: "Ускоренные версии главных хитов", img: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=300" },
  { id: 2, title: "Viral Dance 2026", desc: "Под эту музыку танцуют абсолютно все", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300" },
  { id: 3, title: "Phonk Mashups", desc: "Трендовые склейки и агрессивный звук", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300" },
  { id: 4, title: "Sad Boy Vibes", desc: "Меланхоличные треки из ночных рексов", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300" },
  { id: 5, title: "Retro Revival", desc: "Старые треки, получившие вторую жизнь", img: "https://images.unsplash.com/photo-1515462277126-270d878326e5?w=300" }
];

  return (
    // 1. ОДИН БОЛЬШОЙ ГЛАВНЫЙ ДИВ (Фиксирует экран, запрещает общий скролл)
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-black text-white font-sans selection:bg-green-500/30">
          <nav className='w-[1366px] h-[64px] rounded-0 text-[#B3B3B3] text-[16px] flex gap-3 '>
            <div className='flex '>
              <div className='ml-8  flex   gap-7'>
                <div className='mt-4'><i class="fa-brands fa-spotify text-white text-[34px]"></i></div>
                <div className='mt-3'><button className='rounded-full bg-[#1F1F1F] p-2.5 transition-transform duration-300 ease-out hover:scale-[1.04] hover:bg-[#282828]'><i class="fa-solid fa-house text-white text-2xl"></i></button></div>
              </div>
             <div class="flex items-center bg-[#242424] hover:bg-[#2a2a2a] focus-within:ring-2 focus-within:ring-white h-12 mt-3 ml-4 px-4 rounded-full w-[440px] transition-colors duration-200">
  
              <button class="text-gray-400 hover:text-white mr-3">
                <i class="fa-solid fa-magnifying-glass text-lg"></i>
              </button>

                <input 
                  type="text" 
                  placeholder="Что хочешь включить?" 
                  class="w-full  bg-transparent text-sm text-white placeholder-[#B3B3B3] outline-none pr-2"
                />

            <div class="w-[1px] h-6 bg-gray-600 mx-2"></div>

            <button class="text-gray-400 hover:text-white hover:scale-105 transition-transform pl-1">
              <i class="fa-solid fa-folder text-lg"></i>
            </button>


            </div>
              <div className='flex gap-2 mx-2 mt-2'>
                <button className='font-bold hover:text-white transition-transform duration-300 ease-out hover:scale-[1.04]'>Premium</button>
                <button className='font-bold  hover:text-white transition-transform duration-300 ease-out hover:scale-[1.04]'>Справка</button>
                <button className='font-bold  hover:text-white transition-transform duration-300 ease-out hover:scale-[1.04]'>Скачать</button>
              </div>
            </div>
            <div className='flex gap-4'>
              <h1 className='text-3xl text-white mt-3.5'>|</h1>
              <div className='flex gap-4 mx-2 mt-2'>
                <button className='text-[14px] font-bold hover:text-white transition-transform duration-300 ease-out hover:scale-[1.04]'><i class="fa-regular fa-circle-down"></i>Установить приложение</button>
                <a href='https://signinatspotify-gesh.vercel.app/' className='mt-4.5 text-[14px] font-bold hover:text-white transition-transform duration-300 ease-out hover:scale-[1.04]'>Зарегистрироваться</a>
                <a href='https://signup-at-spotifyclone-mzqr.vercel.app/' className='text-black font-bold bg-white rounded-4xl w-29 h-13 hover:text-black transition-transform duration-300 ease-out hover:scale-[1.04] hover:bg-gray-100 inline-flex items-center justify-center'>Войти</a>
              </div>
            </div>
          </nav>
      {/* 2. РАБОЧАЯ ОБЛАСТЬ (Делит экран по горизонтали на 3 колонки) */}
      <div className="flex flex-1 overflow-hidden p-2 gap-2">
          
        {/* ================= ЛЕВЫЙ САЙДБАР ================= */}
        <div className="w-108 h-full bg-[#121212] rounded-lg p-4 flex flex-col gap-6 shrink-0">
      
         <div className='w-full flex justify-between'>
          <div className='mt-2'><h1 className='text-[16px] text-white font-bold'>Моя медиатека</h1></div>
          <div><button className='text-[#B3B3B3] bg-[#1f1f1f] hover:bg-[#2A2A2A] transition-colors duration-300  w-[104px] h-[38px] flex items-center justify-center text-center font-bold rounded-4xl text-[16px]'><span className='text-[#B3B3B3] text-[20px] mb-0.5 '>+</span><span className='text-white mx-2'>создать</span></button></div>
         </div>


          <div className='w-[420px] h-[260px] overflow-y-auto custom-scrollbar [&::-webkit-scrollbar]:w-2 
  [&::-webkit-scrollbar-thumb]:bg-transparent 
  hover:[&::-webkit-scrollbar-thumb]:bg-[#3b3b3b] 
  [&::-webkit-scrollbar-thumb]:rounded-0'>

            <div className='grid gap-6'>

              <div className='bg-[#1F1F1F] w-[404px] h-[134px] rounded-xl px-[20px] py-[16px]'>
              <div className='grid gap-1.5'>
                <h1 className='font-bold text-[16px] '>Создай свой первый плейлист</h1>
                <p className=' font-normal text-[14px]'>Это совсем не сложно! Мы поможем.</p>
              </div>
              <div className='mt-4'>
                <button className='bg-white text-black rounded-3xl font-bold w-[145px] h-[31px] text-[14px]'>Создать плейлист</button>
              </div>
              </div>

              <div className='bg-[#1F1F1F] w-[404px] h-[134px] rounded-xl px-[20px] py-[16px]'>
              <div className='grid gap-1.5'>
                <h1 className='font-bold text-[16px] '>Подпишись на интересные подкасты</h1>
                <p className=' font-normal text-[14px]'>Ты будешь узнавать о новых выпусках.</p>
              </div>
              <div className='mt-4'>
                <button className='bg-white text-black rounded-3xl font-bold w-[145px] h-[31px] text-[14px]'>Обзор</button>
              </div>
              </div>

            </div>

          </div>

          <div className='w-[420px] h-[250px] '>
            <div className='w-[420px] h-[122px] grid gap-2 mx-4'>
              <a href="https://www.spotify.com/uz/legal/end-user-agreement/" className='text-[12px]  text-[#B3B3B3] hover:text-white transition-transform duration-300 ease-in-out'>Юридическая информация</a>
              <a href="https://www.spotify.com/uz/safetyandprivacy" className='text-[12px]  text-[#B3B3B3] hover:text-white transition-transform duration-300 ease-in-out'>Центр безопасности и конфиденциальности</a>
              <div className='flex gap-3'>
                <a href="https://www.spotify.com/uz/legal/privacy-policy/" className='text-[12px]  text-[#B3B3B3] hover:text-white transition-transform duration-300 ease-in-out'>Политика конфиденциальности</a>
                <a href="https://www.spotify.com/uz/legal/cookies-policy/" className='text-[12px]  text-[#B3B3B3] hover:text-white transition-transform duration-300 ease-in-out'>Файлы cookie</a>
                <a href="https://www.spotify.com/uz/legal/privacy-policy/#s3" className='text-[12px]  text-[#B3B3B3] hover:text-white transition-transform duration-300 ease-in-out'>О рекламе</a>
              </div>
              <a href="https://www.spotify.com/uz/accessibility" className='text-[12px]  text-[#B3B3B3] hover:text-white transition-transform duration-300 ease-in-out'>Специальные возможности</a>
              <a href="https://www.spotify.com/uz/legal/cookies-policy/" className='text-[12px] text-white hover:underline'>Файлы cookie</a>
            </div>
            <button className='mt-7 mx-4 flex items-center gap-1.5 border border-[#727272] hover:border-white text-white font-bold text-[14px] px-3 py-1.5 rounded-full transition-colors duration-200 '>
            <i className="fa-solid fa-globe text-base"></i>
            <span>Русский</span>
          </button>
          </div>
        </div>
        
        {/* ================= ЦЕНТРАЛЬНАЯ ЧАСТЬ (Хедер + Музыка) ================= */}
        <div className="flex-1 h-full flex flex-col bg-[#121212] rounded-lg overflow-hidden bg-gradient-to-b from-[#1f1f1f] to-[#121212]">
          
          {/* ----- ХЕДЕР ----- */}
            <nav className={`w-full sticky top-0 h-15 px-5 py-4 transition-colors duration-300 ${isScrolled ? 'bg-[#121212]' : 'bg-[#454548]/80 backdrop-blur-md'}`}>
              <div className='flex gap-3'>
                <button className='text-black text-[14px] bg-white w-12 h-8 rounded-2xl hover:bg-[#c5c5c5]'>Все</button>
                <button className='text-white text-[14px] bg-[#313131] hover:bg-[#5E5E60] w-19 h-8 rounded-2xl'>Музыка </button>
                <button className='text-white text-[14px] bg-[#313131] hover:bg-[#5E5E60] w-20 h-8 rounded-2xl'>Подкасты</button>
              </div>
            </nav>
            
          {/* ----- КОНТЕНТ МУЗЫКИ (СКРОЛЛИТСЯ ВНИЗ) ----- */}
          <div onScroll={handleScroll} className=" flex-1 overflow-y-auto px-6 pb-6 grow transition-all duration-300  [&::-webkit-scrollbar]:w-2 
  [&::-webkit-scrollbar-thumb]:bg-transparent 
  hover:[&::-webkit-scrollbar-thumb]:bg-[#3b3b3b] 
  [&::-webkit-scrollbar-thumb]:rounded-0">
            <div className='h-48 bg-gradient-to-b from-[#454548] via-[#2c2c2c] to-[#161616] to-transparent mx-[-24px] mt-[-24px]'>
              
{/* Измени класс сетки на mt-6 (или mt-8) */}
        <div className="grid grid-cols-2 gap-4 mt-6">
  
            {/* Карточка 1 */}
            <div className="mt-10 ml-6 relative bg-white/5 hover:bg-white/10 h-16 rounded-md cursor-pointer transition flex items-center gap-4 pr-4 group overflow-hidden">
              <div className="w-16 h-full bg-[#282828] rounded-l-md shrink-0"><img src="src/img/missyou.png" alt="" /></div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm  text-white">MIS YOU-Bonus...</p>
                <p className='font-bold text-[14px] text-[#B1B1B1]'>Oliver Tree,Robin...</p>
              </div>
              
              {/* ЗЕЛЕНАЯ КНОПКА ИГРАТЬ (Появляется при ховере на карточку) */}
              <button className="absolute right-4 bottom-2 bg-[#1db954] hover:bg-[#1ed760] text-black w-10 h-10 rounded-full flex items-center justify-center shadow-xl opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out hover:scale-105">
                <i className="fa-solid fa-play text-sm ml-0.5"></i>
              </button>
            </div>


            <div className="mt-10 mr-6 relative bg-white/5 hover:bg-white/10 h-16 rounded-md cursor-pointer transition  flex items-center gap-4 pr-4 group overflow-hidden">
              <div className="w-16 h-full bg-[#282828] rounded-l-md shrink-0"><img src="src/img/Spotify-Web-Player-Music-for-everyone-07-07-2026_10_42_AM.png" alt="" className='w-16 h-16'/></div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm  text-white">Oliver Tree</p>
              
              </div>
              
              {/* ЗЕЛЕНАЯ КНОПКА ИГРАТЬ (Появляется при ховере на карточку) */}
              <button className="absolute right-4 bottom-2 bg-[#1db954] hover:bg-[#1ed760] text-black w-10 h-10 rounded-full flex items-center justify-center shadow-xl opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out hover:scale-105">
                <i className="fa-solid fa-play text-sm ml-0.5"></i>
              </button>
            </div>

            {/* Точно так же сделай для второй карточки (с Oliver Tree) */}

        </div>
                </div>
            
            {/* Сетка треков/карточек */}
            <StartCarousel />

<div className="space-y-10 bg-[#121212] p-6 text-white min-h-screen select-none">

      {/* ================= СЕКЦИЯ 1: ВЫПУСКИ НА ТВОЙ ВКУС ================= */}
      <div className="relative group w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold hover:underline cursor-pointer">Выпуски на твой вкус</h2>
          <span className="text-xs font-bold text-[#b3b3b3] hover:underline cursor-pointer uppercase tracking-wider">Показать все</span>
        </div>
        <div className="relative w-full">
          <button onClick={() => onSliderScroll('left', 'taste-slider')} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105">
            <svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8.53a.75.75 0 0 1 0-1.06L9.97.47a.75.75 0 0 1 1.06 0z"></path></svg>
          </button>
          <button onClick={() => onSliderScroll('right', 'taste-slider')} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105">
            <svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06l7.53-7.53a.75.75 0 0 0 0-1.06L6.03.47a.75.75 0 0 0-1.06 0z"></path></svg>
          </button>
          <div id="taste-slider" className="flex gap-4 overflow-x-auto w-full pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)' }}>
            {tasteData.map((song) => (
              <div key={song.id} className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors duration-300 group/card cursor-pointer flex-shrink-0 w-[200px]">
                <div className="relative mb-3 aspect-square w-full shadow-md shadow-black/70">
                  <img src={song.img} alt={song.title} className="w-full h-full object-cover rounded-md" />
                  <button className="absolute bottom-2 right-2 bg-[#1db954] p-3 rounded-full text-black opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 shadow-xl hover:scale-105"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
                </div>
                <h3 className="font-bold text-sm truncate mb-1 w-full">{song.title}</h3>
                <p className="text-xs text-[#a7a7a7] h-8 overflow-hidden line-clamp-2">{song.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= СЕКЦИЯ 2: НЕДАВНО ПРОСЛУШАННОЕ ================= */}
      <div className="relative group w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold hover:underline cursor-pointer">Недавно прослушанное</h2>
          <span className="text-xs font-bold text-[#b3b3b3] hover:underline cursor-pointer uppercase tracking-wider">Показать все</span>
        </div>
        <div className="relative w-full">
          <button onClick={() => onSliderScroll('left', 'recent-slider')} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8.53a.75.75 0 0 1 0-1.06L9.97.47a.75.75 0 0 1 1.06 0z"></path></svg></button>
          <button onClick={() => onSliderScroll('right', 'recent-slider')} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06l7.53-7.53a.75.75 0 0 0 0-1.06L6.03.47a.75.75 0 0 0-1.06 0z"></path></svg></button>
          <div id="recent-slider" className="flex gap-4 overflow-x-auto w-full pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)' }}>
            {recentlyPlayedData.map((song) => (
              <div key={song.id} className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors duration-300 group/card cursor-pointer flex-shrink-0 w-[200px]">
                <div className="relative mb-3 aspect-square w-full shadow-md shadow-black/70">
                  <img src={song.img} alt={song.title} className="w-full h-full object-cover rounded-md" />
                  <button className="absolute bottom-2 right-2 bg-[#1db954] p-3 rounded-full text-black opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 shadow-xl hover:scale-105"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
                </div>
                <h3 className="font-bold text-sm truncate mb-1 w-full">{song.title}</h3>
                <p className="text-xs text-[#a7a7a7] h-8 overflow-hidden line-clamp-2">{song.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= СЕКЦИЯ 3: ХИТЫ НЕДЕЛИ ================= */}
      <div className="relative group w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold hover:underline cursor-pointer">Хиты недели</h2>
          <span className="text-xs font-bold text-[#b3b3b3] hover:underline cursor-pointer uppercase tracking-wider">Показать все</span>
        </div>
        <div className="relative w-full">
          <button onClick={() => onSliderScroll('left', 'hits-slider')} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8.53a.75.75 0 0 1 0-1.06L9.97.47a.75.75 0 0 1 1.06 0z"></path></svg></button>
          <button onClick={() => onSliderScroll('right', 'hits-slider')} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06l7.53-7.53a.75.75 0 0 0 0-1.06L6.03.47a.75.75 0 0 0-1.06 0z"></path></svg></button>
          <div id="hits-slider" className="flex gap-4 overflow-x-auto w-full pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)' }}>
            {weeklyHitsData.map((song) => (
              <div key={song.id} className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors duration-300 group/card cursor-pointer flex-shrink-0 w-[200px]">
                <div className="relative mb-3 aspect-square w-full shadow-md shadow-black/70">
                  <img src={song.img} alt={song.title} className="w-full h-full object-cover rounded-md" />
                  <button className="absolute bottom-2 right-2 bg-[#1db954] p-3 rounded-full text-black opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 shadow-xl hover:scale-105"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
                </div>
                <h3 className="font-bold text-sm truncate mb-1 w-full">{song.title}</h3>
                <p className="text-xs text-[#a7a7a7] h-8 overflow-hidden line-clamp-2">{song.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= СЕКЦИЯ 4: КРУГЛЫЙ АВАТАР OLIVER TREE ================= */}
      <div className="relative group w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold hover:underline cursor-pointer">В стиле Оливера Три</h2>
          <span className="text-xs font-bold text-[#b3b3b3] hover:underline cursor-pointer uppercase tracking-wider">Показать все</span>
        </div>
        <div className="relative w-full">
          <button onClick={() => onSliderScroll('left', 'oliver-slider')} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8.53a.75.75 0 0 1 0-1.06L9.97.47a.75.75 0 0 1 1.06 0z"></path></svg></button>
          <button onClick={() => onSliderScroll('right', 'oliver-slider')} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06l7.53-7.53a.75.75 0 0 0 0-1.06L6.03.47a.75.75 0 0 0-1.06 0z"></path></svg></button>
          <div id="oliver-slider" className="flex gap-4 overflow-x-auto w-full pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)' }}>
            {oliverTreeData.map((item) => (
              <div key={item.id} className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors duration-300 group/card cursor-pointer flex-shrink-0 w-[200px]">
                
                {/* Круглая аватарка только для самого Оливера (первый элемент) */}
                <div className={`relative mb-3 aspect-square w-full shadow-md shadow-black/70 overflow-hidden ${item.id === 1 ? 'rounded-full' : 'rounded-md'}`}>
                  <img src={item.img} alt={item.title} className={`w-full h-full object-cover ${item.id === 1 ? 'rounded-full' : 'rounded-md'}`} />
                  <button className="absolute bottom-2 right-2 bg-[#1db954] p-3 rounded-full text-black opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 shadow-xl hover:scale-105"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
                </div>

                <h3 className="font-bold text-sm truncate mb-1 w-full">{item.title}</h3>
                <p className="text-xs text-[#a7a7a7] h-8 overflow-hidden line-clamp-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
{/* ================= СЕКЦИЯ 5: ПОПУЛЯРНЫЕ ПЛЕЙЛИСТЫ ================= */}
      <div className="relative group w-full mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold hover:underline cursor-pointer">Популярные плейлисты</h2>
          <span className="text-xs font-bold text-[#b3b3b3] hover:underline cursor-pointer uppercase tracking-wider">Показать все</span>
        </div>
        <div className="relative w-full">
          <button onClick={() => onSliderScroll('left', 'playlists-slider')} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8.53a.75.75 0 0 1 0-1.06L9.97.47a.75.75 0 0 1 1.06 0z"></path></svg></button>
          <button onClick={() => onSliderScroll('right', 'playlists-slider')} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06l7.53-7.53a.75.75 0 0 0 0-1.06L6.03.47a.75.75 0 0 0-1.06 0z"></path></svg></button>
          <div id="playlists-slider" className="flex gap-4 overflow-x-auto w-full pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)' }}>
            {popularPlaylistsData.map((item) => (
              <div key={item.id} className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors duration-300 group/card cursor-pointer flex-shrink-0 w-[200px]">
                <div className="relative mb-3 aspect-square w-full shadow-md shadow-black/70">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-md" />
                  <button className="absolute bottom-2 right-2 bg-[#1db954] p-3 rounded-full text-black opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 shadow-xl hover:scale-105"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
                </div>
                <h3 className="font-bold text-sm truncate mb-1 w-full">{item.title}</h3>
                <p className="text-xs text-[#a7a7a7] h-8 overflow-hidden line-clamp-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= СЕКЦИЯ 6: ЭЛЕКТРОННАЯ МУЗЫКА ================= */}
      <div className="relative group w-full mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold hover:underline cursor-pointer">Электронная музыка</h2>
          <span className="text-xs font-bold text-[#b3b3b3] hover:underline cursor-pointer uppercase tracking-wider">Показать все</span>
        </div>
        <div className="relative w-full">
          <button onClick={() => onSliderScroll('left', 'electro-slider')} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8.53a.75.75 0 0 1 0-1.06L9.97.47a.75.75 0 0 1 1.06 0z"></path></svg></button>
          <button onClick={() => onSliderScroll('right', 'electro-slider')} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06l7.53-7.53a.75.75 0 0 0 0-1.06L6.03.47a.75.75 0 0 0-1.06 0z"></path></svg></button>
          <div id="electro-slider" className="flex gap-4 overflow-x-auto w-full pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)' }}>
            {electroMusicData.map((item) => (
              <div key={item.id} className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors duration-300 group/card cursor-pointer flex-shrink-0 w-[200px]">
                <div className="relative mb-3 aspect-square w-full shadow-md shadow-black/70">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-md" />
                  <button className="absolute bottom-2 right-2 bg-[#1db954] p-3 rounded-full text-black opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 shadow-xl hover:scale-105"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
                </div>
                <h3 className="font-bold text-sm truncate mb-1 w-full">{item.title}</h3>
                <p className="text-xs text-[#a7a7a7] h-8 overflow-hidden line-clamp-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= СЕКЦИЯ 7: ПОДКАСТЫ ДЛЯ ВАС ================= */}
      <div className="relative group w-full mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold hover:underline cursor-pointer">Подкасты для вас</h2>
          <span className="text-xs font-bold text-[#b3b3b3] hover:underline cursor-pointer uppercase tracking-wider">Показать все</span>
        </div>
        <div className="relative w-full">
          <button onClick={() => onSliderScroll('left', 'podcasts-slider')} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8.53a.75.75 0 0 1 0-1.06L9.97.47a.75.75 0 0 1 1.06 0z"></path></svg></button>
          <button onClick={() => onSliderScroll('right', 'podcasts-slider')} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06l7.53-7.53a.75.75 0 0 0 0-1.06L6.03.47a.75.75 0 0 0-1.06 0z"></path></svg></button>
          <div id="podcasts-slider" className="flex gap-4 overflow-x-auto w-full pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)' }}>
            {podcastsData.map((item) => (
              <div key={item.id} className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors duration-300 group/card cursor-pointer flex-shrink-0 w-[200px]">
                <div className="relative mb-3 aspect-square w-full shadow-md shadow-black/70">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-md" />
                  <button className="absolute bottom-2 right-2 bg-[#1db954] p-3 rounded-full text-black opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 shadow-xl hover:scale-105"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
                </div>
                <h3 className="font-bold text-sm truncate mb-1 w-full">{item.title}</h3>
                <p className="text-xs text-[#a7a7a7] h-8 overflow-hidden line-clamp-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= СЕКЦИЯ 8: НОВЫЕ РЕЛИЗЫ ================= */}
      <div className="relative group w-full mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold hover:underline cursor-pointer">Новые релизы</h2>
          <span className="text-xs font-bold text-[#b3b3b3] hover:underline cursor-pointer uppercase tracking-wider">Показать все</span>
        </div>
        <div className="relative w-full">
          <button onClick={() => onSliderScroll('left', 'new-slider')} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8.53a.75.75 0 0 1 0-1.06L9.97.47a.75.75 0 0 1 1.06 0z"></path></svg></button>
          <button onClick={() => onSliderScroll('right', 'new-slider')} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06l7.53-7.53a.75.75 0 0 0 0-1.06L6.03.47a.75.75 0 0 0-1.06 0z"></path></svg></button>
          <div id="new-slider" className="flex gap-4 overflow-x-auto w-full pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)' }}>
            {newReleasesData.map((item) => (
              <div key={item.id} className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors duration-300 group/card cursor-pointer flex-shrink-0 w-[200px]">
                <div className="relative mb-3 aspect-square w-full shadow-md shadow-black/70">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-md" />
                  <button className="absolute bottom-2 right-2 bg-[#1db954] p-3 rounded-full text-black opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 shadow-xl hover:scale-105"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
                </div>
                <h3 className="font-bold text-sm truncate mb-1 w-full">{item.title}</h3>
                <p className="text-xs text-[#a7a7a7] h-8 overflow-hidden line-clamp-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= СЕКЦИЯ 9: МЕТАЛ И РОК ================= */}
      <div className="relative group w-full mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold hover:underline cursor-pointer">Метал и Рок</h2>
          <span className="text-xs font-bold text-[#b3b3b3] hover:underline cursor-pointer uppercase tracking-wider">Показать все</span>
        </div>
        <div className="relative w-full">
          <button onClick={() => onSliderScroll('left', 'metal-slider')} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8.53a.75.75 0 0 1 0-1.06L9.97.47a.75.75 0 0 1 1.06 0z"></path></svg></button>
          <button onClick={() => onSliderScroll('right', 'metal-slider')} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06l7.53-7.53a.75.75 0 0 0 0-1.06L6.03.47a.75.75 0 0 0-1.06 0z"></path></svg></button>
          <div id="metal-slider" className="flex gap-4 overflow-x-auto w-full pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)' }}>
            {metalRockData.map((item) => (
              <div key={item.id} className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors duration-300 group/card cursor-pointer flex-shrink-0 w-[200px]">
                <div className="relative mb-3 aspect-square w-full shadow-md shadow-black/70">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-md" />
                  <button className="absolute bottom-2 right-2 bg-[#1db954] p-3 rounded-full text-black opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 shadow-xl hover:scale-105"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
                </div>
                <h3 className="font-bold text-sm truncate mb-1 w-full">{item.title}</h3>
                <p className="text-xs text-[#a7a7a7] h-8 overflow-hidden line-clamp-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= СЕКЦИЯ 10: ТОП ЧАРТЫ ================= */}
      <div className="relative group w-full mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold hover:underline cursor-pointer">Топ чарты</h2>
          <span className="text-xs font-bold text-[#b3b3b3] hover:underline cursor-pointer uppercase tracking-wider">Показать все</span>
        </div>
        <div className="relative w-full">
          <button onClick={() => onSliderScroll('left', 'charts-slider')} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8.53a.75.75 0 0 1 0-1.06L9.97.47a.75.75 0 0 1 1.06 0z"></path></svg></button>
          <button onClick={() => onSliderScroll('right', 'charts-slider')} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06l7.53-7.53a.75.75 0 0 0 0-1.06L6.03.47a.75.75 0 0 0-1.06 0z"></path></svg></button>
          <div id="charts-slider" className="flex gap-4 overflow-x-auto w-full pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)' }}>
            {topChartsData.map((item) => (
              <div key={item.id} className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors duration-300 group/card cursor-pointer flex-shrink-0 w-[200px]">
                <div className="relative mb-3 aspect-square w-full shadow-md shadow-black/70">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-md" />
                  <button className="absolute bottom-2 right-2 bg-[#1db954] p-3 rounded-full text-black opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 shadow-xl hover:scale-105"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
                </div>
                <h3 className="font-bold text-sm truncate mb-1 w-full">{item.title}</h3>
                <p className="text-xs text-[#a7a7a7] h-8 overflow-hidden line-clamp-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative group w-full mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold hover:underline cursor-pointer">Музыка для тренировок</h2>
          <span className="text-xs font-bold text-[#b3b3b3] hover:underline cursor-pointer uppercase tracking-wider">Показать все</span>
        </div>
        <div className="relative w-full">
          <button onClick={() => onSliderScroll('left', 'workout-slider')} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8.53a.75.75 0 0 1 0-1.06L9.97.47a.75.75 0 0 1 1.06 0z"></path></svg></button>
          <button onClick={() => onSliderScroll('right', 'workout-slider')} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06l7.53-7.53a.75.75 0 0 0 0-1.06L6.03.47a.75.75 0 0 0-1.06 0z"></path></svg></button>
          <div id="workout-slider" className="flex gap-4 overflow-x-auto w-full pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)' }}>
            {workoutMusicData.map((item) => (
              <div key={item.id} className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors duration-300 group/card cursor-pointer flex-shrink-0 w-[200px]">
                <div className="relative mb-3 aspect-square w-full shadow-md shadow-black/70">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-md" />
                  <button className="absolute bottom-2 right-2 bg-[#1db954] p-3 rounded-full text-black opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 shadow-xl hover:scale-105"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
                </div>
                <h3 className="font-bold text-sm truncate mb-1 w-full">{item.title}</h3>
                <p className="text-xs text-[#a7a7a7] h-8 overflow-hidden line-clamp-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= СЕКЦИЯ 12: АТМОСФЕРА ВИДЕОИГР ================= */}
      <div className="relative group w-full mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold hover:underline cursor-pointer">Атмосфера видеоигр</h2>
          <span className="text-xs font-bold text-[#b3b3b3] hover:underline cursor-pointer uppercase tracking-wider">Показать все</span>
        </div>
        <div className="relative w-full">
          <button onClick={() => onSliderScroll('left', 'gaming-slider')} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8.53a.75.75 0 0 1 0-1.06L9.97.47a.75.75 0 0 1 1.06 0z"></path></svg></button>
          <button onClick={() => onSliderScroll('right', 'gaming-slider')} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06l7.53-7.53a.75.75 0 0 0 0-1.06L6.03.47a.75.75 0 0 0-1.06 0z"></path></svg></button>
          <div id="gaming-slider" className="flex gap-4 overflow-x-auto w-full pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)' }}>
            {gamingOstData.map((item) => (
              <div key={item.id} className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors duration-300 group/card cursor-pointer flex-shrink-0 w-[200px]">
                <div className="relative mb-3 aspect-square w-full shadow-md shadow-black/70">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-md" />
                  <button className="absolute bottom-2 right-2 bg-[#1db954] p-3 rounded-full text-black opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 shadow-xl hover:scale-105"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
                </div>
                <h3 className="font-bold text-sm truncate mb-1 w-full">{item.title}</h3>
                <p className="text-xs text-[#a7a7a7] h-8 overflow-hidden line-clamp-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= СЕКЦИЯ 13: АКУСТИКА И КАВЕРЫ ================= */}
      <div className="relative group w-full mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold hover:underline cursor-pointer">Акустика и каверы</h2>
          <span className="text-xs font-bold text-[#b3b3b3] hover:underline cursor-pointer uppercase tracking-wider">Показать все</span>
        </div>
        <div className="relative w-full">
          <button onClick={() => onSliderScroll('left', 'acoustic-slider')} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8.53a.75.75 0 0 1 0-1.06L9.97.47a.75.75 0 0 1 1.06 0z"></path></svg></button>
          <button onClick={() => onSliderScroll('right', 'acoustic-slider')} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06l7.53-7.53a.75.75 0 0 0 0-1.06L6.03.47a.75.75 0 0 0-1.06 0z"></path></svg></button>
          <div id="acoustic-slider" className="flex gap-4 overflow-x-auto w-full pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)' }}>
            {acousticCoversData.map((item) => (
              <div key={item.id} className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors duration-300 group/card cursor-pointer flex-shrink-0 w-[200px]">
                <div className="relative mb-3 aspect-square w-full shadow-md shadow-black/70">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-md" />
                  <button className="absolute bottom-2 right-2 bg-[#1db954] p-3 rounded-full text-black opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 shadow-xl hover:scale-105"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
                </div>
                <h3 className="font-bold text-sm truncate mb-1 w-full">{item.title}</h3>
                <p className="text-xs text-[#a7a7a7] h-8 overflow-hidden line-clamp-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= СЕКЦИЯ 14: ДЖАЗ И БЛЮЗ ВЕЧЕР ================= */}
      <div className="relative group w-full mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold hover:underline cursor-pointer">Джаз и блюз вечер</h2>
          <span className="text-xs font-bold text-[#b3b3b3] hover:underline cursor-pointer uppercase tracking-wider">Показать все</span>
        </div>
        <div className="relative w-full">
          <button onClick={() => onSliderScroll('left', 'jazz-slider')} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8.53a.75.75 0 0 1 0-1.06L9.97.47a.75.75 0 0 1 1.06 0z"></path></svg></button>
          <button onClick={() => onSliderScroll('right', 'jazz-slider')} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06l7.53-7.53a.75.75 0 0 0 0-1.06L6.03.47a.75.75 0 0 0-1.06 0z"></path></svg></button>
          <div id="jazz-slider" className="flex gap-4 overflow-x-auto w-full pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)' }}>
            {jazzEveningData.map((item) => (
              <div key={item.id} className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors duration-300 group/card cursor-pointer flex-shrink-0 w-[200px]">
                <div className="relative mb-3 aspect-square w-full shadow-md shadow-black/70">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-md" />
                  <button className="absolute bottom-2 right-2 bg-[#1db954] p-3 rounded-full text-black opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 shadow-xl hover:scale-105"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
                </div>
                <h3 className="font-bold text-sm truncate mb-1 w-full">{item.title}</h3>
                <p className="text-xs text-[#a7a7a7] h-8 overflow-hidden line-clamp-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= СЕКЦИЯ 15: ТРЕНДЫ TIKTOK ================= */}
      <div className="relative group w-full mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold hover:underline cursor-pointer">Тренды TikTok</h2>
          <span className="text-xs font-bold text-[#b3b3b3] hover:underline cursor-pointer uppercase tracking-wider">Показать все</span>
        </div>
        <div className="relative w-full">
          <button onClick={() => onSliderScroll('left', 'tiktok-slider')} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8.53a.75.75 0 0 1 0-1.06L9.97.47a.75.75 0 0 1 1.06 0z"></path></svg></button>
          <button onClick={() => onSliderScroll('right', 'tiktok-slider')} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[#0a0a0a]/90 hover:bg-[#1f1f1f] text-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#282828] cursor-pointer hover:scale-105"><svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06l7.53-7.53a.75.75 0 0 0 0-1.06L6.03.47a.75.75 0 0 0-1.06 0z"></path></svg></button>
          <div id="tiktok-slider" className="flex gap-4 overflow-x-auto w-full pb-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)' }}>
            {tiktokTrendsData.map((item) => (
              <div key={item.id} className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors duration-300 group/card cursor-pointer flex-shrink-0 w-[200px]">
                <div className="relative mb-3 aspect-square w-full shadow-md shadow-black/70">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-md" />
                  <button className="absolute bottom-2 right-2 bg-[#1db954] p-3 rounded-full text-black opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 shadow-xl hover:scale-105"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
                </div>
                <h3 className="font-bold text-sm truncate mb-1 w-full">{item.title}</h3>
                <p className="text-xs text-[#a7a7a7] h-8 overflow-hidden line-clamp-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

            {/* Искусственно раздуваем контент в высоту для проверки скролла вниз */}
            <footer>
              <hr className='bg-[#292929] border-t border-[#292929]'/>
            <div className='footerb flex gap-10 text-white mt-2 mb-2'>
  <div>
    <h4 className="font-bold mb-3">Компания</h4>
    <ul className="space-y-2 list-none p-0 m-0">
      <li><a href="#" className="spotify-link">О нас</a></li>
      <li><a href="#" className="spotify-link">Вакансии</a></li>
      <li><a href="#" className="spotify-link">For the Record</a></li>
    </ul>
  </div>
  
  <div>
    <h4 className="font-bold mb-3">Сообщества</h4>
    <ul className="space-y-2 list-none p-0 m-0">
      <li><a href="#" className="spotify-link">Для исполнителей</a></li>
      <li><a href="#" className="spotify-link">Для разработчиков</a></li>
      <li><a href="#" className="spotify-link">Реклама</a></li>
      <li><a href="#" className="spotify-link">Для инвесторов</a></li>
      <li><a href="#" className="spotify-link">Для вендоров</a></li>
    </ul>
  </div>
  
  <div>
    <h4 className="font-bold mb-3">Полезные ссылки</h4>
    <ul className="space-y-2 list-none p-0 m-0">
      <li><a href="#" className="spotify-link">Справка</a></li>
      <li><a href="#" className="spotify-link">Бесплатное мобильное приложение</a></li>
      <li><a href="#" className="spotify-link">Популярное в разных странах</a></li>
      <li><a href="#" className="spotify-link">Топ текстов песен</a></li>
      <li><a href="#" className="spotify-link">Импорт музыки</a></li>
    </ul>
  </div>
  
  <div>
    <h4 className="font-bold mb-3">Планы Spotify</h4>
    <ul className="space-y-2 list-none p-0 m-0">
      <li><a href="#" className="spotify-link">Индивидуальная подписка Spotify Premium</a></li>
      <li><a href="#" className="spotify-link">Premium для двоих</a></li>
      <li><a href="#" className="spotify-link">Premium для семьи</a></li>
      <li><a href="#" className="spotify-link">Premium для студентов</a></li>
      <li><a href="#" className="spotify-link">Бесплатная версия Spotify</a></li>
    </ul>
  </div>
</div>

<hr className='bg-[#292929] border-t border-[#292929]'/>

<div className='flex gap-4 items-start pt-5 '>
  {/* Инстаграм */}
  <a 
    href="https://instagram.com" 
    target="_blank" 
    rel="noreferrer" 
    className="w-10 h-10 bg-[#292929] hover:bg-[#727272] text-[#B1B1B1] hover:text-white flex items-center justify-center rounded-full transition-all duration-200"
  >
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  </a>

  {/* Икс (Твиттер) */}
  <a 
    href="https://x.com" 
    target="_blank" 
    rel="noreferrer" 
    className="w-10 h-10 bg-[#292929] hover:bg-[#727272] text-[#B1B1B1] hover:text-white flex items-center justify-center rounded-full transition-all duration-200"
  >
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  </a>

  {/* Фейсбук */}
  <a 
    href="https://facebook.com" 
    target="_blank" 
    rel="noreferrer" 
    className="w-10 h-10 bg-[#292929] hover:bg-[#727272] text-[#B1B1B1] hover:text-white flex items-center justify-center rounded-full transition-all duration-200"
  >
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  </a>
</div>

<div className='flex flex-wrap gap-x-6 gap-y-2 pt-8 mt-8 border-t border-[#292929] text-xs text-[#B1B1B1]'>
  <a href="#" className="hover:text-[#1DB954] transition-colors duration-200 no-underline">
    Юридическая информация
  </a>
  <a href="#" className="hover:text-[#1DB954] transition-colors duration-200 no-underline">
    Центр безопасности и конфиденциальности
  </a>
  <a href="#" className="hover:text-[#1DB954] transition-colors duration-200 no-underline">
    Политика конфиденциальности
  </a>
  <a href="#" className="hover:text-[#1DB954] transition-colors duration-200 no-underline">
    Файлы cookie
  </a>
  <a href="#" className="hover:text-[#1DB954] transition-colors duration-200 no-underline">
    О рекламе
  </a>
  <a href="#" className="hover:text-[#1DB954] transition-colors duration-200 no-underline">
    Специальные возможности
  </a>
  
  {/* Копирайт в самом конце, если нужен (опционально) */}
  <div className="ml-auto text-[#B1B1B1]">
    © 2026 Spotify AB
  </div>
</div>
            </footer>
            
          </div>

        </div>





        {/* ================= ПРАВЫЙ САЙДБАР (О треке Worth Nothing) ================= */}
        <div className={`relative h-full bg-[#121212] p-5 transition-all duration-300 ease-in-out flex flex-col ${isSidebarOpen ? 'w-[300px]' : 'w-[60px]'}`} >
  
  {/* Кнопка-крестик / стрелочка */}
  <button 
    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    className="mt-1 absolute top-4 left-4 text-gray-400 hover:text-white text-lg transition-colors z-10 focus:outline-none"
  >
    {isSidebarOpen ? (
      <i className="fa-solid fa-xmark"></i>
    ) : (
      <i className="fa-solid fa-chevron-left"></i>
    )}
  </button>
  <div className="flex-none mb-4">
      <h3 className="text-lg font-semibold text-white ml-20 ">Oliver Tree</h3>
    </div>

  {/* Главный контейнер содержимого (плавно исчезает при закрытии) */}
  <div className={` flex flex-col flex-1 min-h-0 transition-opacity duration-200 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
    
  
    

    {/* СКРОЛЛЕР: Вот сюда вставляй свою музыку и всё остальное */}
    {/* Всё, что внутри этого дива, будет прокручиваться, если не поместится в экран */}
    <div className="flex-1 overflow-y-auto pr-1 space-y-4 [&::-webkit-scrollbar]:w-2 
  [&::-webkit-scrollbar-thumb]:bg-transparent 
  hover:[&::-webkit-scrollbar-thumb]:bg-[#3b3b3b] 
  [&::-webkit-scrollbar-thumb]:rounded-0 px-2 ">
      <div className='w-60'>
        <img src="src/img/missyou.png" alt="" className='min-w-full h-67'/>
      </div>
      <div className='flex gap-2'>
        <div className='grid gap-2 w-50'>
          <h1 className='text-2xl text-white font-bold hover:underline'>Miss You - Bon..</h1>
          <p className='text-[14px] text-[#B1B1B1] hover:text-white hover:underline'>Oliver Tree, Robin Schruz</p>
        </div>
        <div className='mt-10 ml-4'>
          <button className=' flex items-center justify-center rounded-full w-8  h-8 border-2 border-[#B1B1B1] hover:border-white'><span className='text-[#B1B1B1] text-xl font-bold mb-0.5 hover:text-white '>+</span></button>
        </div>
      </div>
      <div className='bg-[#1F1F1F] rounded-xl '>
        <img src="src/img/Spotify-Web-Player-Music-for-everyone-07-01-2026_11_25_AM.png" alt="" />
        <div className='flex gap-2 mt-3 px-3'>
          <h1 className='text-white font-bold'>Oliver Tree</h1><div className="flex items-center justify-center w-6 h-6 bg-[#1db954] text-white rounded-full">
          {/* Маленькая белая галочка из Font Awesome */}
          <i className="fa-solid fa-check text-xs"></i>
           </div>
        </div>
          <div className='grid gap-2 px-3 py-3'>
            <h1 className='text-[#B1B1B1] text-[16px] font-bold'>27 929 406
            Слушатели за месяц
            </h1>
            <button className='w-28 px-2 rounded-full  px-1 h-8 border border-[#8f8f8f] text-[12px] font-bold transition-transform duration-300 ease-out hover:scale-[1.04] hover:border-white'>Подписатся</button>
            <p className='text-[14px] font-bold text-[#B1B1B1]'>An internet based vocalist, producer, writer, director and performance artist, Oliver Tree explores the intersection...</p>
          </div>
      </div>
      <div className='bg-[#1F1F1F] rounded-xl px-3 py-3 grid gap-2'>
        <div className='flex justify-between'>
          <h1 className='font-bold text-[14px] text-white'>Сведения</h1> <button    className='text-[14px] text-[#B1B1B1] font-bold transition-transform duration-300 ease-out hover:scale-[1.04] hover:text-white hover:underline'>Показать все</button>
        </div>
        <div className='flex justify-between rounded-xl hover:bg-[#3d3d3d] px-1 py-1'>
          <div className='grid gap-1'><h1 className='text-white text-[16px] font-bold hover:underline'>Oliver Tree</h1><p className='text-[#B1B1B1] font-bold text-[14px]'>Основной</p></div><button className='w-28 px-2 rounded-full  px-1 h-8 border border-[#8f8f8f] text-[12px] font-bold transition-transform duration-300 ease-out hover:scale-[1.04] hover:border-white mt-2.5'>Подписатся</button>
        </div>
        <div><div className='grid gap-1'><h1 className='text-white text-[16px] font-bold'>Oliver Tree Nickell</h1><p className='text-[#B1B1B1] font-bold text-[14px]'>Автор</p></div></div>
        <div></div>
        <div><div className='grid gap-1'><h1 className='text-white text-[16px] font-bold'>Aanner Petulla</h1><p className='text-[#B1B1B1] font-bold text-[14px]'>Автор</p></div></div>
        <div></div>
      </div>
      <div className='bg-[#1F1F1F] rounded-xl px-3 py-3 grid gap-3'>
        <div className='flex justify-between'>
          <h1 className='text-[16px] font-bold text-white'>Далее в...</h1><button    className='text-[14px] text-[#B1B1B1] font-bold transition-transform duration-300 ease-out hover:scale-[1.04] hover:text-white hover:underline'>Показать очередь</button>
        </div>
        <div className='px-1 py-1 hover:bg-[#424242] rounded-[5px] flex gap-1.5'>
          <img src="src/img/missyou.png" alt="" className='min-w-12 h-12'/>
          <div>
          <h1 className='text-[14px] font-bold text-white'>Miss you-Bonus...</h1>
          <div className='flex gap-1'>
            <div className='mt-0.5 bg-[#B1B1B1] text-[#181818] w-4 h-4 flex justify-center items-center rouneded-[4px] font-bold'>E</div>
            <p className='text-[14px] font-bold text-[#B1B1B1] mb-0.5 '>Oliver Tree,Robi...</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>

</div>

    </div>

      {/* 3. НИЖНЯЯ ПАНЕЛЬ (Плеер — всегда прижат к низу экрана) */}
      <div className="h-20 bg-black border-t border-[#282828] flex items-center justify-between px-4 shrink-0 z-10">
        {/* Левая часть плеера: Текущая песня */}
        <div className="flex items-center gap-3 w-1/4">
          <div className="w-14 h-14 bg-[#282828] rounded-md overflow-hidden shrink-0">
              <img src="src/img/missyou.png" alt="" className='min-w-16 h-16'/>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate hover:underline cursor-pointer">Miss you - Bonus track</p>
            <p className="text-xs text-gray-400 truncate hover:underline cursor-pointer">Oliver Tree,Robbin Schrooz</p>
          </div>
        </div>

        {/* Средняя часть: Кнопки управления плеером */}
        <div className="flex flex-col items-center gap-2 flex-1 max-w-xl">
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-white text-lg"><i class="fa-solid fa-shuffle"></i></button>
            <button className="text-gray-400 hover:text-white text-xl"><i class="fa-solid fa-backward-step"></i></button>
            <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold hover:scale-105 transition"><i class="fa-solid fa-play"></i></button>
            <button className="text-gray-400 hover:text-white text-xl"><i class="fa-solid fa-forward-step"></i></button>
            <button className="text-gray-400 hover:text-white text-lg"><i class="fa-solid fa-repeat"></i></button>
          </div>
          {/* Полоса прогресса трека */}
          <div className="w-full flex items-center gap-2 text-xs text-gray-400">
            <span>0:45</span>
            <div className="flex-1 h-1 bg-[#4d4d4d] rounded-full group cursor-pointer">
              <div className="h-full bg-white group-hover:bg-green-500 w-1/4 rounded-full relative"></div>
            </div>
            <span>2:15</span>
          </div>
        </div>

        {/* Правая часть: Громкость и утилиты */}
        <div className="flex items-center gap-3 w-1/4 justify-end text-gray-400">
          <button className="hover:text-white"><i class="fa-solid fa-microphone"></i></button>
          <button className="hover:text-white"><i class="fa-solid fa-list-ul"></i></button>
          <button className="hover:text-white"><i class="fa-solid fa-display"></i></button>
          <button className="hover:text-white"><i class="fa-solid fa-volume-high"></i></button>
          <div className="w-24 h-1 bg-[#4d4d4d] rounded-full cursor-pointer">
            <div className="h-full bg-white w-2/3 rounded-full hover:bg-green-500"></div>
          </div>
          <button className="hover:text-white"><i class="fa-solid fa-window-restore"></i></button>
          <button className="hover:text-white"><i class="fa-solid fa-expand"></i></button>
        </div>
      </div>

    </div>
  );
}

export default App;