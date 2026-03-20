function TimeLineContainer({ date, title, location, description }) {
  return (
    <div className="w-full rounded-[22px] border border-white/8 bg-[#0a0f1c]/75 px-6 py-6 text-slate-300 shadow-[0_0_24px_rgba(0,255,255,0.05)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:shadow-[0_0_30px_rgba(0,255,255,0.08)] md:px-7 md:py-7">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.24em] text-cyan-400">
        {date}
      </p>

      <h3 className="mb-3 font-['Orbitron'] text-[20px] font-semibold leading-8 text-white">
        {title}
      </h3>

      <p className="mb-4 font-mono text-[14px] leading-6 text-slate-400">
        {location}
      </p>

      <p className="text-[15px] leading-8 text-slate-300">{description}</p>
    </div>
  );
}

export default TimeLineContainer;
