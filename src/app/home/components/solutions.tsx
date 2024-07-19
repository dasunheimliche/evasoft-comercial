import Section from "@/components/section";
import SolutionsCard from "@/components/solutions-card";

export default function Solutions() {
  return (
    <Section
      title="EPIC BEGINNINGS: INVEILING OUR ESSENCE, CRAFTING FUTURES WITH EXCELLENCE."
      subtitle="Who We Are"
      className="flex items-center  gap-[1rem] flex-col"
    >
      <div className="w-full flex gap-[1.5rem]">
        <SolutionsCard
          iconSrc="images/stars.svg"
          title="Deliver On Time"
          text="Timely precision, where promises meet performance, ensuring your project's success."
        />

        <SolutionsCard
          iconSrc="images/security.svg"
          title="Security"
          text="Timely precision, where promises meet performance, ensuring your project's success."
        />

        <SolutionsCard
          iconSrc="images/flexibility.svg"
          title="Flexibility"
          text="Timely precision, where promises meet performance, ensuring your project's success."
        />

        <SolutionsCard
          iconSrc="images/pricing.svg"
          title="Pricing"
          text="Timely precision, where promises meet performance, ensuring your project's success."
        />
      </div>
    </Section>
  );
}
