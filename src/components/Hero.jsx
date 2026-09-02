import { GOOGLE_FORM_URL } from "../config/googleForm";
import { creators } from "../data/creators";

export default function Hero() {
  const roster = creators.slice(0, 5);

  return (
    <section id="home" className="border-b border-paper-line">
      <div className="mx-auto max-w-content px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.06] tracking-tightest font-semibold max-w-xl">
            Where brands meet creators.
          </h1>
          <p className="mt-6 text-lg text-ink-soft max-w-md leading-relaxed">
            We connect brands with the right creators to build authentic campaigns that actually reach people.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-ink text-white text-sm font-medium px-6 py-3.5 hover:bg-ink/90 transition-colors"
            >
              For Brands — Start a Campaign
            </a>
          </div>
        </div>

        <div />
      </div>
    </section>
  );
}
