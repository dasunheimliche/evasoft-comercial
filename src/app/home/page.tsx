import { cn } from "@/lib/utils";
import AboutUs from "./components/about-us";
import Blogs from "./components/blogs";
import Counters from "./components/counters";
import Dashboard from "./components/dashboard";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Pricing from "./components/pricing";
import Questions from "./components/questions";
import Solutions from "./components/solutions";
import Steps from "./components/steps";
import Testimonials from "./components/testimonials";

export default function HomePage() {
  return (
    <main className="w-full">
      <Hero />
      <div
        className={cn(
          "w-full flex flex-col items-center justify-star relative bg-[#07080A]",
          "bg-[hsl(234,90%,4%)]",
          "bg-[hsl(167,90%,4%)]"
        )}
      >
        <AboutUs />
        <Counters />
        <Solutions />
        <Dashboard />
        <Questions />
        <Steps />
        <div className="w-full flex flex-col items-center justify-start -mt-[28.75rem]">
          <Pricing />
          <Testimonials />
          <Blogs />
          <hr
            style={{
              backgroundImage:
                "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.07%, rgba(255, 255, 255, 0.00) 100%)",
            }}
            className="w-full h-[1px] border-0 opacity-10 left-1/2"
          />
          <Footer />
        </div>
      </div>
    </main>
  );
}
