import Link from "next/link";

export default function Title() {
  return (
    <section className="w-50 text-center">
      <Link
        href="/"
        className="group relative inline-flex items-baseline gap-1px no-underline"
      >
        <span className="pointer-events-none absolute -inset-x-3 -inset-y-1.5 rounded-lg bg-blue-500/10 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

        <span
          className="relative text-2xl font-light tracking-tight text-white/90 
          transition-all duration-300 group-hover:text-white"
          style={{
            fontFamily: "'Geist', 'Inter', sans-serif",
            letterSpacing: "-0.03em",
          }}
        >
          Next
        </span>

        <span
          className="relative text-2xl font-semibold tracking-tight text-transparent
          bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300
          transition-all duration-300 group-hover:from-blue-300 group-hover:to-cyan-200"
          style={{ letterSpacing: "-0.03em" }}
        >
          Solve
        </span>

        <span
          className="absolute bottom-0 left-0 h-[1.5px] w-0 rounded-full
          bg-linear-to-r from-blue-500 to-cyan-400
          transition-all duration-500 ease-out group-hover:w-full"
        />
      </Link>
    </section>
  );
}
