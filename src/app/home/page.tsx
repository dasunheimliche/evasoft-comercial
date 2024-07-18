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
    <main className="w-full flex flex-col items-center justify-start">
      <Hero />
      <AboutUs />
      <Counters />
      <Solutions />
      <Dashboard />
      <Questions />
      <Steps />
      <div className="w-full flex flex-col items-center justify-start -mt-[38.75rem]">
        <Pricing />
        <Testimonials />
        <Blogs />
        <Footer />
      </div>
    </main>
  );
}
