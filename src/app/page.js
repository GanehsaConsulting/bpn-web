import { About } from "@/components/about";
import { HomeBanner } from "@/components/home-banner";
import { WhyUs } from "@/components/why-us";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <About />
      <WhyUs />
    </>
  );
}
