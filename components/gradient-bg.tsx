export default function GradientBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-44 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/25 via-cyan-500/20 to-emerald-500/20 blur-3xl" />
      <div className="absolute -bottom-60 right-[-160px] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-fuchsia-500/15 via-indigo-500/15 to-cyan-500/15 blur-3xl" />
      <div className="absolute left-[-160px] top-1/3 h-[440px] w-[440px] rounded-full bg-gradient-to-br from-amber-500/10 via-rose-500/10 to-fuchsia-500/10 blur-3xl" />
      <div className="absolute inset-0 grid-fade opacity-60" />
    </div>
  );
}
