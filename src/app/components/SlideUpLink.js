"use client";

import Link from "next/link";

/**
 * Reusable slide-up text hover animation link.
 * On hover the visible text slides up and fades out,
 * while a duplicate slides up from below.
 *
 * Usage:
 *   <SlideUpLink href="/about" className="nav-link">About</SlideUpLink>
 *   <SlideUpLink href="https://ext.com" external>Visit</SlideUpLink>
 */
export default function SlideUpLink({
  href,
  children,
  className = "",
  external = false,
  ...rest
}) {
  const inner = (
    <span className="slide-up-text-wrapper">
      <span className="slide-up-text slide-up-text--initial">
        {children}
      </span>
      <span className="slide-up-text slide-up-text--hover" aria-hidden="true">
        {children}
      </span>
    </span>
  );

  if (external) {
    return (
      <a
        href={href}
        className={`slide-up-link ${className}`}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={`slide-up-link ${className}`} {...rest}>
      {inner}
    </Link>
  );
}
