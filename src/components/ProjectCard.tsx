import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
      {project.image && (
        <div className="mb-6">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={300}
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>
      )}
      <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 leading-tight font-poppins">
        {project.title}
      </h3>
      <p className="text-slate-600 mb-6 leading-relaxed flex-grow font-inter">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-2 bg-blue-50 text-blue-700 text-sm rounded-lg border border-blue-200 font-inter"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group mt-auto font-inter"
      >
        <span>View Project</span>
        <svg
          className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  );
}
