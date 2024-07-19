import { cn } from "@/lib/utils";

export default function DashboardCard({
  title,
  text,
  className,
}: {
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <label
      className={cn(
        "max-w-[240px]  h-fit px-5 py-4 cursor-pointer rounded-xl block transition-all duration-500 bg-[rgba(134,191,242,.01)] border-[1px] border-[rgba(123,143,221,.06)]",
        className
      )}
    >
      <div className="text-[1rem] font-semibold leading-[1.6] text-gradient">
        {title}
      </div>
      <p className="flex  mt-1 font-normal text-[#f1f7feb5]">{text}</p>{" "}
    </label>
  );
}
