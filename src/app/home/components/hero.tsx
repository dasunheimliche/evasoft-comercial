import HeroBackground from "./hero-background";

export default function Hero() {
  return (
    <header
      className="w-full sticky inset-0"
      // style={{
      //   background:
      //     "linear-gradient(rgb(7, 57, 64, 0.7) 0%, rgb(0, 0, 0) 49.5%)",
      // }}
    >
      <HeroBackground>
        <div className="flex gap-[2.75rem] flex-col items-center z-10 text-white">
          <div className="flex items-center flex-col gap-[1.5625rem]">
            <a
              href="https://www.withjuno.com/#our-platform-in-a-nutshell"
              className="backdrop-blur-[15px] bg-white/25 self-center py-2.5 px-[18px] pl-5 transition-[filter] duration-400 ease-in-out gap-2 text-white bg-black rounded-full items-center no-underline flex"
            >
              <div className="font-semibold text-[1rem] leading-4">
                {"See our options, we have a plan for every need"}
              </div>
              <img
                src="https://cdn.prod.website-files.com/626a77d09336ee108a33145c/63a19987100c7ccd9e580399_arrow-right.svg"
                loading="lazy"
                width="18"
                height="18"
                alt=""
                className="cta-arrow mini"
              />
            </a>
            <div className="flex flex-col gap-[1.625rem]">
              <div className="text-white text-center self-center max-w-[800px] font-sans text-[60px] font-bold leading-[110%]">
                <strong>{"Optimize your EV charging network with EVA"}</strong>
              </div>
              <div className="opacity-70 text-white text-center self-center max-w-[550px] font-sans text-[23px] font-medium leading-[140%]">
                {
                  "Our platform streamlines your electrical resources, minimizing operational costs."
                }
              </div>
            </div>
          </div>
          <div className="div-block-136">
            <a
              href="https://share.hsforms.com/1cjKq9XTjSpGPVz_gG-QQbg571ge"
              target="_blank"
              className="bg-white h-[50px] py-2.5 px-6 gap-2 text-black rounded-full items-center pl-5 font-sans no-underline flex"
            >
              <div
                style={{ display: "block" }}
                className="   text-center mb-0 text-[19px] leading-[130%] font-semibold"
              >
                {"Contact Us"}
              </div>
            </a>
          </div>
        </div>
      </HeroBackground>
    </header>
  );
}
