import { ageYears } from "../../utils/Date";

function WhoIamContainer() {
  return (
    <div className="rounded-[20px] border border-cyan-400/20 bg-[#040b17]/80 p-5 text-white shadow-[0_0_20px_rgba(0,255,255,0.08)] backdrop-blur-sm">
      <div className="mb-3 font-mono text-xs uppercase tracking-[0.45em] text-cyan-400">
        &lt; section &gt;
      </div>

      <h1 className="mb-2 text-3xl font-bold text-cyan-400 md:text-4xl">
        Chi Sono
      </h1>

      <div className="mb-5 h-[2px] w-12 bg-cyan-400/70" />

      <div className="space-y-3 text-sm md:text-base">
        <div className="flex justify-between">
          <span className="text-slate-400">Età</span>
          <span className="text-cyan-400">→</span>
          <span className="font-semibold">{ageYears()}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Sede</span>
          <span className="text-cyan-400">→</span>
          <span className="font-semibold">Rimini, IT</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Studio</span>
          <span className="text-cyan-400">→</span>
          <span className="font-semibold">UniBo - Cesena</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Focus</span>
          <span className="text-cyan-400">→</span>
          <span className="font-semibold">Full-Stack Dev</span>
        </div>
      </div>

      <div className="mt-6 font-mono text-xs uppercase tracking-[0.45em] text-cyan-400">
        &lt; /section &gt;
      </div>
    </div>
  );
}

export default WhoIamContainer;
