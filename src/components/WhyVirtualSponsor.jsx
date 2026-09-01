const FEATURES = [
  {
    title: "Right creator",
    description: "Find creators that actually fit your audience.",
  },
  {
    title: "Authentic content",
    description: "Campaigns built around natural creator content.",
  },
  {
    title: "Targeted reach",
    description: "Connect with audiences that matter to your brand.",
  },
  {
    title: "Simple process",
    description: "One place to start and manage creator campaigns.",
  },
];

export default function WhyVirtualSponsor() {
  return (
    <section className="border-b border-paper-line bg-paper-subtle">
      <div className="mx-auto max-w-content px-6 lg:px-10 py-20 lg:py-24">
        <h2 className="font-display text-3xl font-semibold tracking-tightest max-w-lg">
          Why Virtual Sponsor
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="bg-white border border-paper-line rounded-sm p-6">
              <h3 className="font-display text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
