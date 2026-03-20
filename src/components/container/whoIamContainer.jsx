import { ageYears } from "../../utils/Date";

function WhoIamContainer() {
  return (
    <div className="w-full max-w-[320px] px-2 md:px-0">
      <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.5em] text-cyan-400/70">
        &lt; section &gt;
      </div>

      <h2 className="font-['Orbitron'] text-4xl font-bold tracking-tight text-cyan-400 md:text-5xl">
        Who I Am
      </h2>

      <div className="mt-5 mb-8 h-px w-16 bg-cyan-400/50" />

      <div className="space-y-5">
        <InfoRow label="Age" value={String(ageYears())} />
        <InfoRow label="Location" value="Rimini, IT" />
        <InfoRow label="Studies" value="UniBo - Cesena" />
        <InfoRow label="Focus" value="Full-Stack Dev" />
      </div>

      <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.5em] text-cyan-400/70">
        &lt; /section &gt;
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="grid grid-cols-[60px_14px_1fr] items-center gap-3">
      <span className="font-mono text-[11px] tracking-[0.18em] text-slate-400">
        {label}
      </span>

      <span className="text-center font-mono text-[11px] text-cyan-400/50">
        →
      </span>

      <span className="text-base text-slate-200">{value}</span>
    </div>
  );
}

export default WhoIamContainer;
