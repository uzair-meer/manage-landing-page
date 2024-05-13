import Footer from "./components/global/footer/footer";
import Hero from "./components/hero/hero";
import GetStart from "./components/getStart/getStart";
import tablet from "../../public/assets/bg-tablet-pattern.svg";
import Image from "next/image";
import Testimonials from "./components/testimonials/testimonials";
import AboutUs from "./components/aboutUs/aboutUs";
import Header from "./components/header/header";

export default function Home() {
  return (
    <main>
      <Image className="header-img" src={tablet} alt="tablet" />
      <Header />
      <Hero />
      <AboutUs />
      <Testimonials />
      <GetStart />
      <Footer />
    </main>
  );
}
