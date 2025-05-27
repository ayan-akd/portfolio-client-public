import About from "@/components/home-components/About";
import FeaturedProjects from "@/components/home-components/FeaturedProjects";
import Intro from "@/components/home-components/Intro";
import Skills from "@/components/home-components/Skills";
import { getAboutData, getProjectsData, getSkillsData } from "@/services/public";

export default async function HomePage() {
  const { data: aboutData } = await getAboutData();
  const { data: skillsData } = await getSkillsData();
  const { data } = await getProjectsData();
  const dataReverse = data.reverse().slice(0, 3);
  return (
    <div className="min-h-screen">
      <Intro data={aboutData[0]} />
      <About data={aboutData[0]} />
      <Skills data={skillsData} />
      <FeaturedProjects data={dataReverse} />
    </div>
  );
}
