export default function CreatorCard({ creator }) {
  const hasProfile = Boolean(creator.profileUrl);

  return (
    <article className="border border-paper-line rounded-sm bg-white p-5 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-paper-line bg-paper-subtle flex-shrink-0">
          <img
            src={creator.image}
            alt={`${creator.name} placeholder profile image`}
            loading="lazy"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/images/placeholder-avatar.svg";
            }}
          />
        </div>
        <div>
          <h3 className="font-display text-base font-semibold leading-tight">{creator.name}</h3>
          <p className="text-xs text-ink-faint">{creator.category}</p>
        </div>
      </div>

      <span className="self-start text-[11px] font-medium tracking-wide text-ink-soft border border-paper-line rounded-sm px-2 py-1">
        {creator.label}
      </span>

      <p className="text-sm text-ink-soft leading-relaxed flex-1">{creator.description}</p>

      {hasProfile ? (
        <a
          href={creator.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-sm border border-ink/20 text-sm font-medium px-4 py-2.5 hover:border-ink/50 transition-colors"
        >
          View Creator
        </a>
      ) : (
        <span
          role="button"
          aria-disabled="true"
          title="Profile link not yet available"
          className="inline-flex items-center justify-center rounded-sm border border-paper-line text-sm font-medium px-4 py-2.5 text-ink-faint cursor-not-allowed select-none"
        >
          View Creator
        </span>
      )}
    </article>
  );
}
