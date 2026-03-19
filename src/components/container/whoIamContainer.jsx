import { ageYears } from "../../utils/Date";

function WhoIamContainer() {
  return (
    <div className="px-2 md:px-0">
      <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.5em] text-cyan-400/70">
        &lt; section &gt;
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-cyan-400 md:text-4xl">
        Chi Sono
      </h2>

      <div className="mt-4 mb-6 h-px w-12 bg-cyan-400/40" />

      <div className="space-y-3">
        <InfoRow label="Età" value={String(ageYears())} />
        <InfoRow label="Sede" value="Rimini, IT" />
        <InfoRow label="Studio" value="UniBo - Cesena" />
        <InfoRow label="Focus" value="Full-Stack Dev" />
      </div>

      <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.5em] text-cyan-400/70">
        &lt; /section &gt;
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-14 font-mono text-[11px] text-slate-400">{label}</span>
      <span className="font-mono text-[11px] text-cyan-400/40">→</span>
      <span className="text-sm text-slate-200">{value}</span>
    </div>
  );
}

export default WhoIamContainer;
