import { cn } from "@/lib/utils";
import SectionSubtitle from "./section-subtitle";
import SectionTitle from "./section-title";

interface SectionProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  className: string;
}

export default function Section({
  title,
  subtitle,
  className,
  children,
}: SectionProps) {
  return (
    <div
      className="w-[1296px] items-center flex flex-col gap-[4rem] justify-start py-[7.5rem] relative"
      style={{
        background:
          "radial-gradient(70% 80% at center 0%, rgba(255, 255, 255, 0.06) 3%, rgba(98, 255, 179, 0) 70%, rgba(98, 255, 179, 0) 100%)",
      }}
    >
      <div className="w-full flex items-center  gap-[1rem] flex-col">
        <SectionSubtitle text={subtitle} />
        <SectionTitle text={title} />
      </div>
      <div className={cn("w-full", className)}>{children}</div>
    </div>
  );
}
