import Image from "next/image";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import { IconCheckCircle, IconLinkedIn } from "../components/Icons";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  return (
    <PageShell className="overflow-hidden" footerProps={{ hideCTA: true }}>
      <PageHero
        heading="Let's talk ?"
        subtitle="If you have any ideas, queries, freelance work, do write to me, or if you just want to be friends with someone like me :D"
        className="pb-16"
        auraStyle={{ opacity: 0.6 }}
      />

      {/* Form and Contact Info Grid */}
      <section className="px-5 pb-24 sm:px-8 lg:px-12 max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-8 md:gap-12">

          {/* Left: Contact Form */}
          <div className="flex flex-col gap-6 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="What should I call you?"
                className="w-full bg-neutral-100/60 border border-neutral-200 rounded-xl px-5 py-4 text-[15px] outline-none focus:border-violet-400 focus:bg-white transition-all placeholder:text-neutral-400"
              />

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-neutral-100/60 border border-neutral-200 rounded-xl px-5 py-4 text-[15px] outline-none focus:border-violet-400 focus:bg-white transition-all placeholder:text-neutral-400"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#10b981]">
                  <IconCheckCircle width={16} height={16} />
                </div>
              </div>
            </div>

            <textarea
              placeholder="What's on your mind?"
              rows={6}
              className="w-full bg-neutral-100/60 border border-transparent rounded-2xl px-5 py-5 text-[15px] outline-none focus:border-violet-400 focus:bg-white transition-all placeholder:text-neutral-400 resize-none"
            />

            <button className="w-full bg-black text-white rounded-2xl py-4 font-semibold text-[15px] hover:bg-neutral-800 transition-colors shadow-lg shadow-black/10">
              Send
            </button>
          </div>

          {/* Right: Info Card */}
          <div className="bg-[#FCF9F3] rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-sm border border-neutral-100">
            {/* Memoji */}
            <div className="w-[140px] h-[140px] bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm mb-8">
              <Image
                src="/avatar2.jpeg"
                alt="Ayush Solanki"
                width={140}
                height={140}
                className="w-full h-full object-cover"
                priority
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
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 border border-neutral-200 bg-white rounded-xl py-3 hover:bg-neutral-50 transition-colors shadow-sm"
                >
                  <IconLinkedIn width={16} height={16} className="text-[#0A66C2]" />
                  <span className="text-[14px] font-medium text-neutral-800">Send message</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </PageShell>
  );
}
