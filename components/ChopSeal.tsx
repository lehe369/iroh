type ChopSealProps = {
  className?: string;
  label?: string;
};

/**
 * The recurring stamp mark between sections — a quiet echo of the chop
 * pressed into the estate's packaging. Deliberately imperfect: the ring is
 * not a true circle.
 */
export default function ChopSeal({ className = "", label }: ChopSealProps) {
  return (
    <div
      className={`flex flex-col items-center gap-3 py-2 text-accent ${className}`}
      role="separator"
      aria-hidden={label ? undefined : true}
    >
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        className="glow-on-hover opacity-80"
      >
        <path
          d="M23 3.5C33.5 3 42.5 10.8 42.5 22.3c0 11.9-9.4 20.2-20 19.9C11.6 41.9 3.4 33.4 3.6 22 3.8 11 12.9 4 23 3.5Z"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path
          d="M15 26.5c2.6-6.8 5-11.8 8-14.8m0 0c2.7 3.4 4.7 9 6.3 15.3M23 11.7v21.8"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>
      {label ? (
        <span className="font-brush text-base tracking-wide text-accent-bright">
          {label}
        </span>
      ) : null}
    </div>
  );
}
