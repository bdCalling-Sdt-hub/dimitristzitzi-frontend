import Categories from "@/components/home/Categories";
import HeroSection from "@/components/home/HeroSection";
import InfoSumarize from "@/components/home/InfoSumarize";
import PopularCourses from "@/components/home/PopularCourses";


export default function Home() {
  return (
    <main>
      <div className=" mx-auto">
        <HeroSection/>
        <InfoSumarize/>
        <PopularCourses/>
        <Categories/>
      </div>
    </main>
  );
}
