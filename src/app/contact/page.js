import Image from "next/image";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import { IconCheckCircle, IconLinkedIn } from "../components/Icons";
import { siteConfig } from "@/config/site";
import ContactForm from "./ContactForm";
export default function ContactPage() {
  return (
    <PageShell className="overflow-hidden" footerProps={{ hideCTA: true }}>
      <PageHero
        heading="Let's talk ?"
        subtitle="If you have any ideas, queries, freelance work, do write to me, or if you just want to be friends with someone like me :D"
        className="pb-12 sm:pb-16"
        auraStyle={{ opacity: 0.6 }}
      />

      {/* Form and Contact Info Grid */}
      <section className="px-5 pb-16 sm:pb-24 sm:px-8 lg:px-12 max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-8 md:gap-12">

          {/* Left: Contact Form */}
          <div className="w-full">
            <ContactForm />
          </div>

          {/* Right: Info Card */}
          <div className="bg-[#FCF9F3] rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm border border-neutral-100">
            {/* Memoji */}
            <div className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm mb-6 sm:mb-8">
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
