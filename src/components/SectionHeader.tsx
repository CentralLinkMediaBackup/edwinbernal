import { Reveal, SplitWords } from "./motion/Reveal";

/**
 * Editorial section header: hairline rule, numbered eyebrow,
 * huge serif headline with an italic accent word.
 */
const SectionHeader = ({
  number,
  eyebrow,
  title,
  accentWord,
  description,
  dark = false,
}: {
  number: string;
  eyebrow: string;
  title: string;
  accentWord?: string;
  description?: string;
  dark?: boolean;
}) => (
  <Reveal className="mb-10 md:mb-12">
    <div className={`${dark ? "rule-ink border-paper-dim" : "rule"} pt-6 flex items-baseline justify-between gap-4 mb-8`}>
      <span className={`eyebrow ${dark ? "text-paper/60" : "text-muted-foreground"}`}>{eyebrow}</span>
      <span className={`font-display text-sm ${dark ? "text-paper/60" : "text-muted-foreground"}`}>({number})</span>
    </div>
    <h2 className={`font-display font-light tracking-tight leading-[0.95] text-5xl md:text-7xl lg:text-8xl ${dark ? "text-paper" : "text-ink"}`}>
      <SplitWords
        text={title}
        wordClassName={(word) =>
          accentWord && word.replace(/[^\w&@.]/g, "") === accentWord
            ? "font-display-italic text-cobalt" + (dark ? "-soft" : "")
            : undefined
        }
      />
    </h2>
    {description && (
      <p className={`mt-6 max-w-xl text-lg ${dark ? "text-paper/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </Reveal>
);

export default SectionHeader;
