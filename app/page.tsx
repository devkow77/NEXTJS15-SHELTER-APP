import { Animals, Header, HowToAdopt } from "@/components/pages/home/index";

export default function Home() {
  return (
    <div className="lg:space-y-16">
      <div>
        <Header />
        <HowToAdopt />
      </div>
      <Animals />
    </div>
  );
}
