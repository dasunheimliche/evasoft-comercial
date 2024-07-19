interface SolutionsCardProps {
  title: string;
  text: string;
  iconSrc: string;
}

export default function SolutionsCard({
  title,
  text,
  iconSrc,
}: SolutionsCardProps) {
  return (
    <div className="w-1/4 h-[24.6875rem] rounded-[.75rem] bg-[rgba(134,191,242,.01)] border-[1px] border-[rgba(123,143,221,.06)] px-[1.25rem] py-[1.5625rem] flex flex-col gap-[3rem]">
      <div>
        <img src={iconSrc} height={45} alt="icon" className="text-black" />
      </div>
      <div className="flex flex-col gap-[2.25rem]">
        <div className="text-[1.5rem] leading-[2.0625rem] font-semibold text-gradient">
          {title}
        </div>
        <div className="h-[1px] w-[5rem] bg-white"></div>
        <div className="text-[1.125rem] leading-[1.75rem] text-[#f1f7feb5]">
          {text}
        </div>
      </div>
    </div>
  );
}
