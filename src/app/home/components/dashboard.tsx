import DashboardCard from "@/components/dashboard-card";
import Section from "@/components/section";

export default function Dashboard() {
  return (
    <Section
      title="EPIC BEGINNINGS: INVEILING OUR ESSENCE, CRAFTING FUTURES WITH EXCELLENCE."
      subtitle="Who We Are"
      className="flex flex-col"
    >
      <div className="w-full flex justify-center gap-2 mb-6">
        <DashboardCard
          title="Lorem Ipsum"
          text="Lorem ipsun dolor sit amet consectetur. Eu amet posuere consequat donec."
          className="border-[rgba(134,191,242,0.26)]"
        />

        <DashboardCard
          title="Lorem Ipsum"
          text="Lorem ipsun dolor sit amet consectetur. Eu amet posuere consequat donec."
        />

        <DashboardCard
          title="Lorem Ipsum"
          text="Lorem ipsun dolor sit amet consectetur. Eu amet posuere consequat donec."
        />

        <DashboardCard
          title="Lorem Ipsum"
          text="Lorem ipsun dolor sit amet consectetur. Eu amet posuere consequat donec."
        />
      </div>
      <div
        className="w-full h-[45rem]  rounded-[.75rem] relative outline outline-[1px] flex justify-center items-center p-44"
        style={{
          background:
            "linear-gradient(180deg, rgba(242, 242, 243, 1) 0%, rgba(77, 89, 237, 1) 100%)",
        }}
      >
        <div className="w-full h-full relative flex justify-center items-center">
          <img
            src="images/eva-laptop.png"
            alt=""
            className="w-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
