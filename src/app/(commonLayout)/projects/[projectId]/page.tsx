import ProjectDetailsCard from "@/components/projects-components/ProjectDetailsCard";
import { getSingleProjectData } from "@/services/public";

//generate meta data
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;
  const { data: project } = await getSingleProjectData(projectId);
  return {
    title: project?.title,
    description: project?.description,
  };
};

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  const { data: project } = await getSingleProjectData(projectId);

  return (
    <div className="min-h-screen mx-auto py-16 px-4">
      <ProjectDetailsCard project={project} />
    </div>
  );
}
