function TimeLineContainer({ date, title, location, description }) {
  return (
    <div className="w-full max-w-[390px] rounded-[24px] border border-cyan-400/20 bg-[#050d1b]/70 px-8 py-7 text-slate-300 shadow-[0_0_24px_rgba(0,255,255,0.08)] backdrop-blur-sm md:px-9 md:py-8">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-400">
        {date}
      </p>

      <h3 className="mb-3 text-[18px] font-semibold leading-8 text-white">
        {title}
      </h3>

      <p className="mb-4 text-[14px] leading-7 text-slate-400">{location}</p>

      <p className="text-[14px] leading-8 text-slate-300">{description}</p>
    </div>
  );
}

export default TimeLineContainer;
