const STEPS = [
  {
    number: "01",
    title: "Tell us your goal",
    description: "Brands submit their campaign requirements.",
  },
  {
    number: "02",
    title: "We find the right creator",
    description:
      "We match campaigns with creators based on niche, audience, and campaign goals.",
  },
  {
    number: "03",
    title: "Launch & grow",
    description:
      "Creators create authentic content and brands reach their target audience.",
  },
];

export default function HowItWorks() {
  return (
    <section id="about" className="border-b border-paper-line">
      <div className="mx-auto max-w-content px-6 lg:px-10 py-20 lg:py-24">
        <h2 className="font-display text-3xl font-semibold tracking-tightest max-w-lg">
          How it works
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-10 md:gap-8">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`pt-6 border-t border-paper-line ${
                i > 0 ? "md:pl-8 md:border-l md:border-t-0" : ""
              }`}
            >
              <span className="font-display text-sm text-ink-faint">{step.number}</span>
              <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
