/**
 * PageShell
 * Wraps every page with consistent Navbar + Footer.
 * Replaces the repeated pattern:
 *   <main className="min-h-screen bg-white text-[#111111]">
 *     <Navbar />
 *     ...content...
 *     <Footer />
 *   </main>
 *
 * Props:
 *   children      — page content
 *   className     — extra classes on <main> (e.g. "overflow-hidden")
 *   footerProps   — forwarded to <Footer> (e.g. { hideCTA: true })
 */
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageShell({ children, className = "", footerProps = {} }) {
  return (
    <main className={`min-h-screen bg-white text-[#111111] ${className}`}>
      <Navbar />
      {children}
      <Footer {...footerProps} />
    </main>
  );
}
