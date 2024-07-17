export default function HeroBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-[100dvh] relative flex justify-center items-center">
      <img
        src="images/home-background.avif"
        className="object-cover w-full h-full absolute inset-0 brightness-50"
      />
      {children}
    </div>
  );
}
