import { MapPin, Link2 } from "lucide-react";
import { IconInstagram, IconX, IconFacebook, IconLinkedIn } from "./Icons";
import { siteConfig } from "@/config/site";

export default function SocialInfo({ className = "" }) {
  const items = [
    { icon: MapPin, text: siteConfig.location, href: null },
   
    { icon: IconInstagram, text: siteConfig.socials.instagram, href: `https://instagram.com/${siteConfig.socials.instagram.replace(".exe", "")}` },
    { icon: IconX, text: siteConfig.socials.x, href: `https://x.com/${siteConfig.socials.x.replace('@', '')}` },
    { icon: IconFacebook, text: siteConfig.socials.facebook, href: `https://facebook.com/${siteConfig.socials.facebook}` },
    { icon: IconLinkedIn, text: "in/ayush-solanki-a3909625a", href: siteConfig.socials.linkedin },
  ];

  return (
    <div className={`flex flex-col gap-3.5 text-neutral-600 font-medium ${className}`}>
      {items.map((item, i) => {
        const Icon = item.icon;
        const content = (
          <>
            <Icon className="w-[18px] h-[18px] text-neutral-400 shrink-0" />
            <span className="text-[14px]">{item.text}</span>
          </>
        );

        if (item.href) {
          return (
            <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-neutral-900 transition-colors">
              {content}
            </a>
          );
        }
        return (
          <div key={i} className="flex items-center gap-3">
            {content}
          </div>
        );
      })}
    </div>
  );
}
