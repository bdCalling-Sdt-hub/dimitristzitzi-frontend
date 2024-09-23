import HeroSection from "@/components/home/HeroSection";
import InfoSumarize from "@/components/home/InfoSumarize";


export default function Home() {
  return (
    <main>
      <div className=" mx-auto">
        <HeroSection/>
        <InfoSumarize/>
      </div>
    </main>
  );
}
