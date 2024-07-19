export default function Title({ text }: { text: string }) {
  return (
    <div className="text-[1.75rem] leading-[3rem] text-gradient">{text}</div>
  );
}
