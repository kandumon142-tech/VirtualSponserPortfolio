import { brands } from "../data/brands";
import BrandCard from "./BrandCard";

export default function Brands() {
  return (
    <section id="campaigns" className="border-b border-paper-line">
      <div className="mx-auto max-w-content px-6 lg:px-10 py-20 lg:py-24">
        <div className="max-w-lg mb-4">
          <h2 className="font-display text-3xl font-semibold tracking-tightest">
            Brands we've worked with
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            The campaigns below are sample and portfolio work, shown to illustrate
            the kind of creator campaigns Virtual Sponsor can build — not confirmed
            client engagements.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <BrandCard key={brand.name} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
