export function GreenStripe({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <div className="bg-brandColour w-1/3 h-6 absolute -bottom-1 -right-[4%] -z-10"></div>
    </div>
  );
}
