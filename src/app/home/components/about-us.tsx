import Section from "@/components/section";
import SectionButton from "@/components/section-button";

export default function AboutUs() {
  return (
    <Section
      title="EPIC BEGINNINGS: INVEILING OUR ESSENCE, CRAFTING FUTURES WITH EXCELLENCE."
      subtitle="Who We Are"
      className="h-[29.375rem] flex justify-between gap-[1.5rem]"
    >
      <div className="w-1/2 bg-gray-300 h-full relative rounded-[1rem] overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1691626435043-26eb6eb9bfd3?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="w-1/2 pl-[1.5rem] flex flex-col gap-[3rem] relative">
        <div className="w-full flex flex-col gap-[2.25rem]">
          <div className="text-[1.75rem] leading-[3rem] text-gradient">
            Empowering Progress: Our Story, Your Journey, Shared Excellence
          </div>
          <div className="flex flex-col w-[32.875rem] items-start gap-[1.5rem] text-[1.25rem] leading-[1.875rem] text-[#f1f7feb5]">
            <div>
              Embark on a journey through our narrative, where innovation meets
              purpose.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur. Sit non diam justo fames.
              Blandit et purus mollis convallis malesuada egestas risus quam
              enim. Semper lorem rhoncus et felis tristique tellus volupat orci.
              Dui elementum a sed.
            </div>
          </div>
        </div>
        <SectionButton label="Who We Are" />
      </div>
    </Section>
  );
}
