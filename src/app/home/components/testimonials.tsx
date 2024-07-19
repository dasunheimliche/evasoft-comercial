import Section from "@/components/section";

export default function Testimonials() {
  return (
    <Section
      title="EPIC BEGINNINGS: INVEILING OUR ESSENCE, CRAFTING FUTURES WITH EXCELLENCE."
      subtitle="Who We Are"
      className="flex flex-col"
    >
      <div className="w-full flex gap-[.625rem]">
        <div className="w-1/2 p-[.625rem] flex gap-[2.25rem]">
          <div className="w-[11.25rem] h-[12.5rem] bg-green-950 relative">
            <img
              className="w-full h-full absolute inset-0 object-cover"
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-[23.3125rem] flex flex-col gap-[1rem]">
            <div className="flex flex-col gap-[.5rem]">
              <div className="text-[1.375rem] leading-[1.875rem] text-gradient">
                Jacob
              </div>
              <div className="text-[.75rem] leading-[1rem] text-[#f1f7feb5] opacity-70">
                CEO-IT Solution Company
              </div>
            </div>
            <div className="font-light text-[1rem] leading-[1.75rem] text-[#f1f7feb5]">
              Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla
              odio maecenas magna eu ultrices aliquan egestas. Enim phasellus eu
              commodo nibh vitae amet elit. Ut natoque dui.
            </div>
          </div>
        </div>
        <div className="w-1/2 p-[.625rem] flex gap-[2.25rem]">
          <div className="w-[11.25rem] h-[12.5rem] bg-green-950 relative">
            <img
              className="w-full h-full absolute inset-0 object-cover"
              src="https://images.unsplash.com/photo-1549473448-5d7196c91f48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-[23.3125rem] flex flex-col gap-[1rem]">
            <div className="flex flex-col gap-[.5rem]">
              <div className="text-[1.375rem] leading-[1.875rem] text-gradient">
                Jacob
              </div>
              <div className="text-[.75rem] leading-[1rem] text-[#f1f7feb5] opacity-70">
                CEO-IT Solution Company
              </div>
            </div>
            <div className="font-light text-[1rem] leading-[1.75rem] text-[#f1f7feb5]">
              Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla
              odio maecenas magna eu ultrices aliquan egestas. Enim phasellus eu
              commodo nibh vitae amet elit. Ut natoque dui.
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-[1.5rem] w-full justify-center mt-[8rem]">
        <div className="w-[3.125rem] cursor-pointer h-[3.125rem] rounded-full outline outline-[1px] outline-gray-100 flex justify-center items-center">
          <img src="images/arrow-left.svg" height={30} alt="previous arrow" />
        </div>
        <div className="w-[3.125rem] cursor-pointer h-[3.125rem] rounded-full outline outline-[1px] outline-gray-100 flex justify-center items-center">
          {" "}
          <img
            className="rotate-180"
            src="images/arrow-left.svg"
            height={30}
            alt="next arrow"
          />
        </div>
      </div>
    </Section>

    // <div className="w-[1296px] items-center flex flex-col gap-[4rem] justify-start py-[7.5rem] relative">
    //   <div className="w-full flex items-center  gap-[1rem] flex-col">
    //     <div className="text-[1.125rem] leading-[1.5625rem] font-medium ">
    //       Who We Are
    //     </div>
    //     <div className="leading-[2.75rem] text-[1.75rem] w-[46.0625rem] text-center">
    //       EPIC BEGINNINGS: INVEILING OUR ESSENCE, CRAFTING FUTURES WITH
    //       EXCELLENCE.
    //     </div>
    //   </div>
    //   <div className="w-full flex flex-col">

    //   </div>
    //   <div className="flex gap-[1.5rem]">
    //     <div className="w-[3.125rem] h-[3.125rem] rounded-full outline outline-[1px] outline-black flex justify-center items-center">
    //       <img src="images/arrow-left.svg" height={30} alt="previous arrow" />
    //     </div>
    //     <div className="w-[3.125rem] h-[3.125rem] rounded-full outline outline-[1px] outline-black flex justify-center items-center">
    //       {" "}
    //       <img
    //         className="rotate-180"
    //         src="images/arrow-left.svg"
    //         height={30}
    //         alt="next arrow"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
