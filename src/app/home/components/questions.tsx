import AccordionItem from "@/components/accordion-item";
import Section from "@/components/section";

export default function Questions() {
  return (
    <Section
      title="EPIC BEGINNINGS: INVEILING OUR ESSENCE, CRAFTING FUTURES WITH EXCELLENCE."
      subtitle="Who We Are"
      className="flex flex-col gap-[.75rem]"
    >
      <AccordionItem number="01" title="ENTREPRISE SERVICE" isOpen={false}>
        <></>
      </AccordionItem>

      <div className="w-full h-[1px] bg-gray-300 bg-opacity-25"></div>

      <AccordionItem number="02" title="EXPERTISE SERVICE" isOpen={true}>
        <div className="p-[.625rem] pl-[1.5rem] ">
          <div className="border-l-gray-300 border-l-[.0625rem] pl-[1rem] w-[49.6875rem] text-[1.125rem] leading-[1.75rem] text-[#f1f7feb5]">
            Lorem ipsun dolor sit amet consectetur. Eu amet posuere consequat
            donec suspendisse lorem enim. Elit viverra nisi non nisi eleifend.
            Cursus erat mattis fames et mollis risus at.
          </div>
        </div>
        <div className="pl-[1.5rem] flex justify-between gap-[1.5rem]">
          <div className="w-1/4 bg-black rounded-[1rem] overflow-hidden relative h-[12.5rem]  flex justify-center text-center p-[4.125rem] items-center font-medium text-[1.375rem] leading-[2.125rem]">
            <img
              className="w-full h-full object-cover absolute inset-0"
              src="https://images.unsplash.com/photo-1631864512667-d611c2834e6c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute w-full h-full bg-black/50 backdrop-blur-sm"></div>
            <div className="z-10 text-gradient">Artificial Intelligence</div>
          </div>
          <div className="w-1/4 bg-black rounded-[1rem] overflow-hidden relative h-[12.5rem]  flex justify-center text-center p-[4.125rem] items-center font-medium text-[1.375rem] leading-[2.125rem]">
            <img
              className="w-full h-full object-cover absolute inset-0"
              src="https://images.unsplash.com/photo-1717349607557-16057e6fd882?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute w-full h-full bg-black/50 backdrop-blur-sm"></div>
            <div className="z-10 text-gradient">Front-End Develpment</div>
          </div>

          <div className="w-1/4 bg-black rounded-[1rem] overflow-hidden relative h-[12.5rem]  flex justify-center text-center p-[4.125rem] items-center font-medium text-[1.375rem] leading-[2.125rem]">
            <img
              className="w-full h-full object-cover absolute inset-0"
              src="https://images.unsplash.com/photo-1691589322441-432ef17b8bbd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute w-full h-full bg-black/50 backdrop-blur-sm"></div>
            <div className="z-10 text-gradient">Dedicated Developer</div>
          </div>

          <div className="w-1/4 bg-black rounded-[1rem] overflow-hidden relative h-[12.5rem]  flex justify-center text-center p-[4.125rem] items-center font-medium text-[1.375rem] leading-[2.125rem]">
            <img
              className="w-full h-full object-cover absolute inset-0"
              src="https://plus.unsplash.com/premium_photo-1715547412241-c3e9c0712deb?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute w-full h-full bg-black/50 backdrop-blur-sm"></div>
            <div className="z-10 text-gradient">Mobile App Develpment</div>
          </div>
        </div>
      </AccordionItem>

      <div className="w-full h-[1px] bg-gray-300 bg-opacity-25"></div>

      <AccordionItem number="03" title="PROCESS" isOpen={false}>
        <></>
      </AccordionItem>

      <div className="w-full h-[1px] bg-gray-300 bg-opacity-25"></div>

      <AccordionItem number="04" title="MOBILE APP DEVELOPMENT" isOpen={false}>
        <></>
      </AccordionItem>
    </Section>
  );
}
