import { useEffect, useState } from "react";
import { GOOGLE_FORM_URL } from "../config/googleForm";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Campaigns", href: "#campaigns" },
  { label: "Creators", href: "#creators" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_theme(colors.paper.line)]" : ""
      }`}
    >
      <div className="mx-auto max-w-content px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight">
          Virtual Sponsor
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-ink-soft hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm bg-ink text-white text-sm font-medium px-4 py-2 hover:bg-ink/90 transition-colors"
          >
            Start a Campaign
          </a>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block w-5 h-4">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-5 bg-ink transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[1.5px] w-5 bg-ink transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[1.5px] w-5 bg-ink transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-paper-line transition-[max-height] duration-300 ease-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-base text-ink-soft hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center rounded-sm bg-ink text-white text-sm font-medium px-4 py-3"
          >
            Start a Campaign
          </a>
        </nav>
      </div>
    </header>
  );
}
