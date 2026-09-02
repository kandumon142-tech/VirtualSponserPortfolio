export default function BrandCard({ brand }) {
  return (
    <article className="group border border-paper-line rounded-sm overflow-hidden bg-white flex flex-col">
      <div className="relative aspect-[8/5] bg-paper-subtle overflow-hidden">
        <img
          src={brand.image}
          alt={`${brand.name} campaign visual`}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/images/placeholder-logo.svg";
            e.currentTarget.className = "w-full h-full object-contain p-10";
          }}
        />
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border border-paper-line bg-paper-subtle overflow-hidden flex-shrink-0">
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              loading="lazy"
              className="w-full h-full object-contain p-1"
              onError={(e) => {
                e.currentTarget.src = "/images/placeholder-logo.svg";
              }}
            />
          </div>
          <div>
            <h3 className="font-display text-base font-semibold leading-tight">{brand.name}</h3>
            <p className="text-xs text-ink-faint">{brand.industry}</p>
          </div>
        </div>
        <p className="text-sm text-ink-soft leading-relaxed">{brand.description}</p>
      </div>
    </article>
  );
}
