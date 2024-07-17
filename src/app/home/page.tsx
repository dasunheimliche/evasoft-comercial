import AboutUs from "./components/about-us";
import Counters from "./components/counters";
import Dashboard from "./components/dashboard";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Questions from "./components/questions";
import Solutions from "./components/solutions";
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
      <Testimonials />
      <Footer />
    </main>
  );
}
