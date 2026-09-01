import { creators } from "../data/creators";
import CreatorCard from "./CreatorCard";

export default function Creators() {
  return (
    <section id="creators" className="border-b border-paper-line bg-paper-subtle">
      <div className="mx-auto max-w-content px-6 lg:px-10 py-20 lg:py-24">
        <div className="max-w-lg mb-4">
          <h2 className="font-display text-3xl font-semibold tracking-tightest">
            Creators that move audiences
          </h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {creators.map((creator) => (
            <CreatorCard key={creator.name} creator={creator} />
          ))}
        </div>
      </div>
    </section>
  );
}
