import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-5 pt-[160px] pb-16 sm:px-8 lg:px-12 text-center">
        <div className="nav-aura" aria-hidden="true" style={{ top: '80px', height: '300px', opacity: 0.6 }} />
        
        <h1 className="font-serif-display text-[48px] sm:text-[64px] lg:text-[72px] font-bold text-neutral-950 leading-tight mb-6 relative z-10">
          Let's talk ?
        </h1>
        <p className="text-[15px] sm:text-[17px] text-neutral-600 font-medium max-w-[640px] mx-auto leading-relaxed relative z-10">
          If you have any ideas, queries, freelance work, do write to me, or if you just want to be friends with someone like me :D
        </p>
      </section>

      {/* Form and Contact Info Grid */}
      <section className="px-5 pb-24 sm:px-8 lg:px-12 max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-8 md:gap-12">
          
          {/* Left: Contact Form */}
          <div className="flex flex-col gap-6 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Input */}
              <input 
                type="text" 
                placeholder="What should I call you?" 
                className="w-full bg-neutral-100/60 border border-neutral-200 rounded-xl px-5 py-4 text-[15px] outline-none focus:border-violet-400 focus:bg-white transition-all placeholder:text-neutral-400"
              />
              
              {/* Email Input */}
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-neutral-100/60 border border-neutral-200 rounded-xl px-5 py-4 text-[15px] outline-none focus:border-violet-400 focus:bg-white transition-all placeholder:text-neutral-400"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#10b981]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <textarea 
              placeholder="What's on your mind?" 
              rows={6}
              className="w-full bg-neutral-100/60 border border-transparent rounded-2xl px-5 py-5 text-[15px] outline-none focus:border-violet-400 focus:bg-white transition-all placeholder:text-neutral-400 resize-none"
            />

            {/* Submit Button */}
            <button className="w-full bg-black text-white rounded-2xl py-4 font-semibold text-[15px] hover:bg-neutral-800 transition-colors shadow-lg shadow-black/10">
              Send
            </button>
          </div>

          {/* Right: Info Card */}
          <div className="bg-[#FCF9F3] rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-sm border border-neutral-100">
            {/* Memoji */}
            <div className="w-[140px] h-[140px] bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm mb-8">
              <img
                src="https://framerusercontent.com/images/XCVNkZ3Jzgp9PlprKmsbrZRkgv0.png"
                alt="Memoji"
                className="w-full h-full object-cover scale-110"
              />
            </div>

            <div className="w-full text-left space-y-6">
              <div>
                <p className="text-neutral-500 text-[13px] font-medium mb-1">Email</p>
                <p className="font-bold text-neutral-900 text-[15px] tracking-tight">
                  {siteConfig.email}
                </p>
              </div>

              <div>
                <p className="text-neutral-500 text-[13px] font-medium mb-3">More options</p>
                <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 border border-neutral-200 bg-white rounded-xl py-3 hover:bg-neutral-50 transition-colors shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="text-[14px] font-medium text-neutral-800">Send message</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Render Footer without the big CTA card since we already have the contact info above */}
      <Footer hideCTA={true} />
    </main>
  );
}
