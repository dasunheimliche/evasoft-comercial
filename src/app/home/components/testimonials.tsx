export default function Testimonials() {
  return (
    <div className="w-[1296px] items-center flex flex-col gap-[4rem] justify-start py-[7.5rem] relative">
      <div className="w-full flex items-center  gap-[1rem] flex-col">
        <div className="text-[1.125rem] leading-[1.5625rem] font-medium ">
          Who We Are
        </div>
        <div className="leading-[2.75rem] text-[1.75rem] w-[46.0625rem] text-center">
          EPIC BEGINNINGS: INVEILING OUR ESSENCE, CRAFTING FUTURES WITH
          EXCELLENCE.
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full flex gap-[.625rem]">
          <div className="w-1/2 p-[.625rem] flex gap-[2.25rem]">
            <div className="w-[11.25rem] h-[12.5rem] bg-gray-200"></div>
            <div className="w-[23.3125rem] flex flex-col gap-[1rem]">
              <div className="flex flex-col gap-[.5rem]">
                <div className="text-[1.375rem] leading-[1.875rem]">Jacob</div>
                <div className="text-[.75rem] leading-[1rem] text-gray-600">
                  CEO-IT Solution Company
                </div>
              </div>
              <div className="font-light text-[1rem] leading-[1.75rem]">
                Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla
                odio maecenas magna eu ultrices aliquan egestas. Enim phasellus
                eu commodo nibh vitae amet elit. Ut natoque dui.
              </div>
            </div>
          </div>
          <div className="w-1/2 p-[.625rem] flex gap-[2.25rem]">
            <div className="w-[11.25rem] h-[12.5rem] bg-gray-200"></div>
            <div className="w-[23.3125rem] flex flex-col gap-[1rem]">
              <div className="flex flex-col gap-[.5rem]">
                <div className="text-[1.375rem] leading-[1.875rem]">Jacob</div>
                <div className="text-[.75rem] leading-[1rem] text-gray-600">
                  CEO-IT Solution Company
                </div>
              </div>
              <div className="font-light text-[1rem] leading-[1.75rem]">
                Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla
                odio maecenas magna eu ultrices aliquan egestas. Enim phasellus
                eu commodo nibh vitae amet elit. Ut natoque dui.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[1.5rem]">
        <div className="w-[3.125rem] h-[3.125rem] rounded-full outline outline-[1px] outline-black flex justify-center items-center">
          <img src="images/arrow-left.svg" height={30} alt="previous arrow" />
        </div>
        <div className="w-[3.125rem] h-[3.125rem] rounded-full outline outline-[1px] outline-black flex justify-center items-center">
          {" "}
          <img
            className="rotate-180"
            src="images/arrow-left.svg"
            height={30}
            alt="next arrow"
          />
        </div>
      </div>
    </div>
  );
}
