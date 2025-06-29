import {
  Animals,
  Header,
  HowToAdopt,
  VideoBaner,
  Faq,
} from "@/components/pages/home/index";

export default function Home() {
  return (
    <main className="space-y-16 lg:space-y-32">
      <div>
        <Header />
        <HowToAdopt />
      </div>
      <Animals />
      <VideoBaner />
      <Faq />
    </main>
  );
}
