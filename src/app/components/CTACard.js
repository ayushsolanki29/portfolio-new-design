import Link from "next/link";
import Image from "next/image";
import { IconLinkedIn } from "./Icons";
import { ctaConfig } from "@/config/site";

/**
 * CTACard
 * The warm "Let's work together?" banner used in the Footer.
 * All copy is driven by ctaConfig in src/config/site.js.
 *
 * Props:
 *   heading     — override the heading from config
 *   body        — override the body text from config
 *   buttonLabel — override the button label from config
 *   buttonHref  — override the button href from config
 *   className   — extra classes on the outer div
 */
export default function CTACard({
  heading = ctaConfig.heading,
  body = ctaConfig.body,
  buttonLabel = ctaConfig.buttonLabel,
  buttonHref = ctaConfig.buttonHref,
  className = "",
}) {
  return (
    <div
      className={`bg-[#fdf5e8] rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 ${className}`}
    >
      {/* Left — copy + button */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-[40px] sm:text-[48px] font-bold text-neutral-900 font-serif-display leading-tight mb-4">
          {heading}
        </h2>
        <p className="text-[17px] text-neutral-600 leading-relaxed mb-8">{body}</p>
        <Link
          href={buttonHref}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 transition-colors text-neutral-800 font-medium text-[15px] shadow-sm"
        >
          <IconLinkedIn width={18} height={18} className="text-neutral-500" />
          {buttonLabel}
        </Link>
      </div>

      {/* Right — avatar */}
      <div className="flex-shrink-0">
        <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-4 border-white">
          <Image
            src="/avatar1.jpeg"
            alt="Ayush Solanki"
            width={220}
            height={220}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
