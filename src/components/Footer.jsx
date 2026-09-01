const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Campaigns", href: "#campaigns" },
  { label: "Creators", href: "#creators" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-content px-6 lg:px-10 py-16">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        <div>
          <p className="font-display text-lg font-semibold">Virtual Sponsor</p>
          <p className="mt-1 text-sm text-ink-soft">Where brands meet creators.</p>
          <a
            href="mailto:virtualsponser@gmail.com"
            className="mt-3 inline-block text-sm text-ink-soft hover:text-ink transition-colors"
          >
            virtualsponser@gmail.com
          </a>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-ink-soft hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-12 pt-6 border-t border-paper-line text-xs text-ink-faint">
        © 2026 Virtual Sponsor. All rights reserved.
      </div>
    </footer>
  );
}
