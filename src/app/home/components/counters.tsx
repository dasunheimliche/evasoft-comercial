export default function Counters() {
  return (
    <div className="w-full h-[13.875rem] bg-[#121212] flex justify-center">
      <div className="w-[1296px] flex">
        <div className="w-1/4   py-[1.25rem] px-[3.875rem] flex justify-center items-center">
          <div className="text-white flex flex-col items-center gap-[.3125rem]">
            <div className="p-[.625rem] text-[2.25rem] font-normal">400+</div>
            <div className="p-[.625rem] text-[#9C9C9C] text-[1.125rem] text-center">
              Completed
            </div>
          </div>
        </div>

        <div className="w-[1.375rem] h-full flex justify-center items-center relative">
          <div className="w-[1px] h-[4.6875rem] bg-white"></div>
        </div>

        <div className="w-1/4   px-[3.875rem] flex justify-center items-center">
          <div className="text-white flex flex-col items-center gap-[.3125rem]">
            <div className="p-[.625rem] text-[2.25rem] font-normal">15+</div>
            <div className="p-[.625rem] text-[#9C9C9C] text-[1.125rem]">
              Successful Years
            </div>
          </div>
        </div>

        <div className="w-[1.375rem] h-full flex justify-center items-center relative">
          <div className="w-[1px] h-[4.6875rem] bg-white"></div>
        </div>

        <div className="w-1/4  px-[3.875rem] flex justify-center items-center">
          <div className="text-white flex flex-col items-center gap-[.3125rem]">
            <div className="p-[.625rem] text-[2.25rem] font-normal">98%</div>
            <div className="p-[.625rem] text-[#9C9C9C] text-[1.125rem]">
              Client Retention
            </div>
          </div>
        </div>

        <div className="w-[1.375rem] h-full flex justify-center items-center relative">
          <div className="w-[1px] h-[4.6875rem] bg-white"></div>
        </div>

        <div className="w-1/4 py-[1.25rem] px-[3.875rem] flex justify-center items-center">
          <div className="text-white flex flex-col items-center">
            <div className="p-[.625rem] text-[2.25rem] font-normal">30+</div>
            <div className="p-[.625rem] text-[#9C9C9C] text-[1.125rem]">
              Countries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
