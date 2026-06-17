"use client";

import { useState } from "react";

export default function MusicSection() {
  const [activeAlbum, setActiveAlbum] = useState(null);

  const albums = [
    {
      id: 1,
      title: "AM",
      artist: "Arctic Monkeys",
      cover: "https://upload.wikimedia.org/wikipedia/en/0/04/Arctic_Monkeys_-_AM.png",
      color: "#000000",
    },
    {
      id: 2,
      title: "Blonde",
      artist: "Frank Ocean",
      cover: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg",
      color: "#2C2C2C",
    },
    {
      id: 3,
      title: "Dev D",
      artist: "Amit Trivedi",
      cover: "https://c.saavncdn.com/264/Dev-D-Hindi-2008-20190731131105-500x500.jpg",
      color: "#7E1D1D",
    },
    {
      id: 4,
      title: "The Wall",
      artist: "Pink Floyd",
      cover: "https://upload.wikimedia.org/wikipedia/en/1/13/PinkFloydWallCoverOriginalNoText.jpg",
      color: "#C41E3A",
    }
  ];

  const repeatedAlbums = [...albums, ...albums, ...albums];

  return (
    <section className="px-5 pb-24 sm:px-8 lg:px-12 max-w-5xl mx-auto">
      <div className="bg-white rounded-[32px] border border-neutral-200/60 shadow-sm py-10 sm:py-16 text-center overflow-hidden relative">
        <h2 className="font-serif-display text-[32px] sm:text-[40px] font-bold text-neutral-900 mb-2 px-10">
          What I'm listening to
        </h2>
        <p className="text-[15px] sm:text-[17px] text-neutral-500 mb-16 px-10">
          My music taste is more chaotic than my git branches
        </p>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden flex items-center">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          <div className="music-marquee gap-10 sm:gap-14 px-8 py-4">
            {repeatedAlbums.map((album, index) => {
              // Create a unique key using index since we duplicated items
              const uniqueId = `${album.id}-${index}`;
              const isActive = activeAlbum === uniqueId;
              
              return (
                <div 
                  key={uniqueId} 
                  className="relative cursor-pointer group flex-shrink-0"
                  onClick={() => setActiveAlbum(isActive ? null : uniqueId)}
                >
                  {/* Vinyl Disk */}
                  <div 
                    className={`absolute top-0 right-0 h-full aspect-square rounded-full transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center ${
                      isActive ? 'translate-x-[55%] rotate-[360deg] drop-shadow-xl' : 'translate-x-0 rotate-0 drop-shadow-none'
                    }`}
                    style={{ zIndex: 0 }}
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full text-white drop-shadow-sm">
                      {/* Record Base */}
                      <circle cx="50" cy="50" r="49" fill="#425E62" />
                      <circle cx="50" cy="50" r="48" fill="#4B6B6E" />
                      
                      {/* Grooves */}
                      <circle cx="50" cy="50" r="43" fill="none" stroke="#3D565A" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="38" fill="none" stroke="#3D565A" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="33" fill="none" stroke="#3D565A" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="28" fill="none" stroke="#3D565A" strokeWidth="0.5" />
                      
                      {/* Dark inner circle */}
                      <circle cx="50" cy="50" r="23" fill="#3D565A" />
                      
                      {/* Outer label color */}
                      <circle cx="50" cy="50" r="16" fill={album.color} />
                      
                      {/* White inner play area */}
                      <circle cx="50" cy="50" r="10" fill="#ffffff" />
                      
                      {/* Play triangle */}
                      <path d="M48 46v8l6-4-6-4z" fill={album.color} />
                      
                      {/* Center hole */}
                      <circle cx="50" cy="50" r="2" fill="#e5e5e5" />
                    </svg>
                  </div>

                  {/* Album Cover */}
                  <div 
                    className="relative z-10 w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-lg shadow-xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 bg-neutral-100"
                  >
                    <img 
                      src={album.cover} 
                      alt={album.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1614613535808-3196b088bc8a?q=80&w=400&auto=format&fit=crop";
                      }}
                    />
                    {/* Subtle inner shadow for realism */}
                    <div className="absolute inset-0 border border-white/20 rounded-lg pointer-events-none" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
