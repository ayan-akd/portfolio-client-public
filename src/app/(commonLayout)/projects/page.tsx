import ProjectCard from "@/components/projects-components/ProjectsCard";
import { getProjectsData } from "@/services/public";
import { TProject } from "@/types/types";

export const metadata = {
  title: "Portfolio | Projects",
  description: "Explore my projects",
};

export default async function ProjectsPage() {
  const { data: projects } = await getProjectsData();
  projects.reverse();

  return (
    <div className="min-h-screen container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}
