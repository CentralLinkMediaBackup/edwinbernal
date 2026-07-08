/**
 * Slowly rotating circular text badge (SVG textPath), the classic
 * designer-portfolio stamp. Pass uppercase text ending with " — ".
 */
const CircularText = ({
  text,
  className,
  size = 140,
}: {
  text: string;
  className?: string;
  size?: number;
}) => (
  <div className={className} style={{ width: size, height: size }} aria-hidden="true">
    <svg viewBox="0 0 100 100" className="spin-slow w-full h-full overflow-visible">
      <defs>
        <path id="circlePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
      </defs>
      <text className="fill-current" style={{ fontSize: 8.2, letterSpacing: "0.18em", fontFamily: "Archivo, sans-serif", textTransform: "uppercase" }}>
        <textPath href="#circlePath">{text}</textPath>
      </text>
      <text x="50" y="54" textAnchor="middle" className="fill-current" style={{ fontSize: 16, fontFamily: "Fraunces, serif" }}>
        ✳
      </text>
    </svg>
  </div>
);

export default CircularText;
