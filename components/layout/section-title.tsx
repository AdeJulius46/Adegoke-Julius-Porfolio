export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-white-2 relative pb-1.5 text-[length:var(--fs-1)] font-semibold capitalize sm:pb-4">
      {children}
      <span className="from-accent-yellow to-[hsl(35,100%,68%)] absolute bottom-0 left-0 h-[3px] w-[30px] rounded-full bg-gradient-to-r sm:h-[5px] sm:w-[40px]" />
    </h2>
  );
}
