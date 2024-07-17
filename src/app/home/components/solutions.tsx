export default function Solutions() {
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
      <div className="w-full flex gap-[1.5rem]">
        <div className="w-1/4 h-[24.6875rem] rounded-[.75rem] bg-[#ebebeb] px-[1.25rem] py-[1.5625rem] flex flex-col gap-[3rem]">
          <div>
            <img
              src="images/stars.svg"
              height={45}
              alt=""
              className="text-black"
            />
          </div>
          <div className="flex flex-col gap-[2.25rem]">
            <div className="text-[1.5rem] leading-[2.0625rem] font-semibold">
              Deliver On Time
            </div>
            <div className="h-[1px] w-[5rem] bg-black"></div>
            <div className="text-[1.125rem] leading-[1.75rem]">
              {
                "Timely precision, where promises meet performance, ensuring your project's success."
              }
            </div>
          </div>
        </div>
        <div className="w-1/4 h-[24.6875rem] rounded-[.75rem] bg-[#ebebeb] px-[1.25rem] py-[1.5625rem] flex flex-col gap-[3rem]">
          <div>
            <img
              src="images/security.svg"
              height={45}
              alt=""
              className="text-black"
            />
          </div>
          <div className="flex flex-col gap-[2.25rem]">
            <div className="text-[1.5rem] leading-[2.0625rem] font-semibold">
              Security
            </div>
            <div className="h-[1px] w-[5rem] bg-black"></div>
            <div className="text-[1.125rem] leading-[1.75rem]">
              {
                "Timely precision, where promises meet performance, ensuring your project's success."
              }
            </div>
          </div>
        </div>
        <div className="w-1/4 h-[24.6875rem] rounded-[.75rem] bg-[#ebebeb] px-[1.25rem] py-[1.5625rem] flex flex-col gap-[3rem]">
          <div>
            <img
              src="images/flexibility.svg"
              height={45}
              alt=""
              className="text-black"
            />
          </div>
          <div className="flex flex-col gap-[2.25rem]">
            <div className="text-[1.5rem] leading-[2.0625rem] font-semibold">
              Flexibility
            </div>
            <div className="h-[1px] w-[5rem] bg-black"></div>
            <div className="text-[1.125rem] leading-[1.75rem]">
              {
                "Timely precision, where promises meet performance, ensuring your project's success."
              }
            </div>
          </div>
        </div>
        <div className="w-1/4 h-[24.6875rem] rounded-[.75rem] bg-[#ebebeb] px-[1.25rem] py-[1.5625rem] flex flex-col gap-[3rem]">
          <div>
            <img
              src="images/pricing.svg"
              height={45}
              alt=""
              className="text-black"
            />
          </div>
          <div className="flex flex-col gap-[2.25rem]">
            <div className="text-[1.5rem] leading-[2.0625rem] font-semibold">
              Pricing
            </div>
            <div className="h-[1px] w-[5rem] bg-black"></div>
            <div className="text-[1.125rem] leading-[1.75rem]">
              {
                "Timely precision, where promises meet performance, ensuring your project's success."
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
