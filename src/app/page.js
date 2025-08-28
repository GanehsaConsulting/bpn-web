import { About } from "@/components/about";
import { ArticleReccomendations } from "@/components/article-reccomendations";
import { FaqComponent } from "@/components/faq";
import { HomeBanner } from "@/components/home-banner";
import { WhyUs } from "@/components/why-us";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <About />
      <WhyUs />
      <FaqComponent />
      <ArticleReccomendations />
    </>
  );
}
