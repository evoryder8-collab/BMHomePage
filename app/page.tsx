import Hero from "@/components/home/Hero";
import AppShowcase from "@/components/home/AppShowcase";
import Philosophy from "@/components/home/Philosophy";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <AppShowcase />
      <Philosophy />
    </div>
  );
}
