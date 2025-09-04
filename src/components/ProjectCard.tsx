import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
      {project.image && (
        <div className="mb-4 sm:mb-6">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={300}
            className="w-full h-40 sm:h-48 object-cover rounded-xl"
          />
        </div>
      )}
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 leading-tight font-poppins">
        {project.title}
      </h3>
      <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed flex-grow font-inter">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 sm:px-3 py-1 sm:py-2 bg-blue-50 text-blue-700 text-xs sm:text-sm rounded-lg border border-blue-200 font-inter"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
