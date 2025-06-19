import {
  Animals,
  Header,
  HowToAdopt,
  VideoBaner,
  Faq,
  Footer,
} from "@/components/pages/home/index";

export default function Home() {
  return (
    <div className="space-y-16 lg:space-y-32">
      <div>
        <Header />
        <HowToAdopt />
      </div>
      <Animals />
      <VideoBaner />
      <Faq />
      <Footer />
    </div>
  );
}
