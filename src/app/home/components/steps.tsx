import Section from "@/components/section";
import Title from "@/components/title";

export default function Steps() {
  return (
    <Section
      title="EPIC BEGINNINGS: INVEILING OUR ESSENCE, CRAFTING FUTURES WITH EXCELLENCE."
      subtitle="Who We Are"
      className=""
    >
      <StepsSection />
    </Section>
  );
}

export function StepsSection() {
  return (
    <div className="w-full ">
      <div className="w-full h-[300vh] flex">
        <div className="sticky top-[15.625rem] h-[100vh] w-1/2 flex justify-center items-start">
          <div className="w-full overflow-hidden h-[29.375rem] bg-green-950 relative rounded-[1rem]">
            <img
              className="w-full h-full absolute inset-0 object-cover"
              src="https://plus.unsplash.com/premium_photo-1715639312136-56a01f236440?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="h-[100vh] flex justify-start items-start  pl-[1.5rem]  flex-col gap-[3rem] relative">
            <div className="w-full flex flex-col gap-[2.25rem]">
              <Title text="Empowering Progress: Our Story, Your Journey, Shared Excellence" />
              <div className="flex flex-col w-[32.875rem] items-start gap-[1.5rem] text-[1.25rem] leading-[1.875rem] text-[#f1f7feb5]">
                <div>
                  Embark on a journey through our narrative, where innovation
                  meets purpose.
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur. Sit non diam justo
                  fames. Blandit et purus mollis convallis malesuada egestas
                  risus quam enim. Semper lorem rhoncus et felis tristique
                  tellus volupat orci. Dui elementum a sed.
                </div>
              </div>
            </div>
          </div>
          <div className="h-[100vh] flex justify-start items-start pl-[1.5rem]  flex-col gap-[3rem] relative">
            <div className="w-full flex flex-col gap-[2.25rem]">
              <Title text="Empowering Progress: Our Story, Your Journey, Shared Excellence" />
              <div className="flex flex-col w-[32.875rem] items-start gap-[1.5rem] text-[1.25rem] leading-[1.875rem] text-[#f1f7feb5]">
                <div>
                  Embark on a journey through our narrative, where innovation
                  meets purpose.
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur. Sit non diam justo
                  fames. Blandit et purus mollis convallis malesuada egestas
                  risus quam enim. Semper lorem rhoncus et felis tristique
                  tellus volupat orci. Dui elementum a sed.
                </div>
              </div>
            </div>
          </div>
          <div className="h-[100vh] flex justify-start items-start     pl-[1.5rem]  flex-col gap-[3rem] relative">
            <div className="w-full flex flex-col gap-[2.25rem]">
              <Title text="Empowering Progress: Our Story, Your Journey, Shared Excellence" />
              <div className="flex flex-col w-[32.875rem] items-start gap-[1.5rem] text-[1.25rem] leading-[1.875rem] text-[#f1f7feb5]">
                <div>
                  Embark on a journey through our narrative, where innovation
                  meets purpose.
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur. Sit non diam justo
                  fames. Blandit et purus mollis convallis malesuada egestas
                  risus quam enim. Semper lorem rhoncus et felis tristique
                  tellus volupat orci. Dui elementum a sed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
