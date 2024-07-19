export default function SectionButton({ label }: { label: string }) {
  return (
    <div className="bottom-0 absolute text-center flex justify-center items-center w-[12.625rem] h-[3.5rem] text-[1rem] font-medium outline outline-[1px] cursor-pointer text-white outline-white text-transparent bg-gradient-to-br from-white via-white to-white/50 bg-clip-text">
      {label}
    </div>
  );
}
