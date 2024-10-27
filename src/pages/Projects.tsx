import { CardLg } from "@/components/cards/CardLg";
import { DataProjects } from "@/data/DataProjects";

export const Projects = () => {
  return (
    <section className="flex h-full w-full flex-col justify-around items-center">
      {DataProjects.map((data, index) => {
        return (
          <CardLg
            key={index}
            title={data.title}
            description={data.description}
            iconSrc={data.iconSrc}
            srcGithub={data.srcGithub}
            linkProject={data.linkProject}
          />
        );
      })}
    </section>
  );
};