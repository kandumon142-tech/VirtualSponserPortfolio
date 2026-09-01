import { GOOGLE_FORM_URL } from "../config/googleForm";

export default function CTA() {
  return (
    <section className="border-b border-paper-line">
      <div className="mx-auto max-w-content px-6 lg:px-10 py-20 lg:py-28 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tightest max-w-xl mx-auto">
          Ready to start your campaign?
        </h2>
        <p className="mt-4 text-ink-soft max-w-md mx-auto leading-relaxed">
          Tell us what you're looking to promote, and we'll help you find the right creators.
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-sm bg-ink text-white text-sm font-medium px-7 py-3.5 hover:bg-ink/90 transition-colors"
        >
          Start a Campaign →
        </a>
      </div>
    </section>
  );
}
