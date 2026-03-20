function ProjectContainer({ name, description, image, link }) {
  return (
    <div className="group flex w-[320px] flex-col overflow-hidden rounded-[24px] border border-cyan-400/20 bg-[#050d1b]/70 text-slate-300 shadow-[0_0_24px_rgba(0,255,255,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_30px_rgba(0,255,255,0.14)]">
      <div className="h-[200px] w-full overflow-hidden border-b border-cyan-400/10 bg-[#020817]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 px-6 py-6">
        <h2 className="font-['Orbitron'] text-[1.15rem] font-semibold tracking-[0.04em] text-white">
          {name}
        </h2>

        <p className="text-[0.95rem] leading-7 text-slate-300">{description}</p>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex w-fit items-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-[0.8rem] font-medium uppercase tracking-[0.14em] text-cyan-300 transition duration-300 hover:border-cyan-300/50 hover:bg-cyan-400/20 hover:text-cyan-200 hover:shadow-[0_0_18px_rgba(0,255,255,0.2)]"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectContainer;
