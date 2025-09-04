import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { skills, projects, socialLinks, personalInfo } from "@/data/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-10">
              <div className="w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center border-4 border-blue-500/20 shadow-2xl">
                <span className="text-5xl font-bold text-white font-poppins">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight font-poppins">
              Hi, I&apos;m <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{personalInfo.name}</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 mb-6 max-w-4xl mx-auto font-light leading-relaxed font-inter">
              {personalInfo.title} passionate about building scalable applications
            </p>
            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed font-inter">
              {personalInfo.education}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button href="#contact" className="text-lg px-10 py-4">
                Get In Touch
              </Button>
              <Button href="#projects" variant="secondary" className="text-lg px-10 py-4">
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-slate-800 mb-16 font-poppins">
            About Me
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-inter">
                {personalInfo.bio}
              </p>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-inter">
                {personalInfo.about}
              </p>
              <div className="flex space-x-6 pt-4">
                <a href={socialLinks.github} className="text-slate-500 hover:text-slate-700 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-100">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href={socialLinks.linkedin} className="text-slate-500 hover:text-slate-700 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-100">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-200 shadow-xl">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 font-poppins">
                What I Do
              </h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-center group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-4 group-hover:bg-blue-600 transition-colors"></span>
                  <span className="text-lg font-inter">Full Stack Development</span>
                </li>
                <li className="flex items-center group">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-4 group-hover:bg-indigo-600 transition-colors"></span>
                  <span className="text-lg font-inter">Cloud Infrastructure & DevOps</span>
                </li>
                <li className="flex items-center group">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-4 group-hover:bg-purple-600 transition-colors"></span>
                  <span className="text-lg font-inter">Machine Learning & Data Science</span>
                </li>
                <li className="flex items-center group">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full mr-4 group-hover:bg-emerald-600 transition-colors"></span>
                  <span className="text-lg font-inter">IoT & Hardware Integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-slate-800 mb-16 font-poppins">
            Skills & Technologies
          </h2>
          
          {/* Languages */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-8 text-center font-poppins">Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.filter(skill => skill.category === "languages").map((skill) => (
                <div key={skill.name} className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <div className="text-3xl mb-4 text-center">{skill.icon}</div>
                  <h3 className="font-semibold text-slate-800 text-center text-lg font-inter">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks/Libraries */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-indigo-600 mb-8 text-center font-poppins">Frameworks & Libraries</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.filter(skill => skill.category === "frameworks").map((skill) => (
                <div key={skill.name} className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-indigo-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <div className="text-3xl mb-4 text-center">{skill.icon}</div>
                  <h3 className="font-semibold text-slate-800 text-center text-lg font-inter">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-8 text-center font-poppins">Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.filter(skill => skill.category === "tools").map((skill) => (
                <div key={skill.name} className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-purple-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <div className="text-3xl mb-4 text-center">{skill.icon}</div>
                  <h3 className="font-semibold text-slate-800 text-center text-lg font-inter">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud & Infrastructure */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-emerald-600 mb-8 text-center font-poppins">Cloud & Infrastructure</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.filter(skill => skill.category === "cloud").map((skill) => (
                <div key={skill.name} className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-emerald-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <div className="text-3xl mb-4 text-center">{skill.icon}</div>
                  <h3 className="font-semibold text-slate-800 text-center text-lg font-inter">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-slate-800 mb-16 font-poppins">
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-8 font-poppins">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto font-inter">
            I&apos;m always interested in new opportunities and exciting projects. 
            Feel free to reach out if you&apos;d like to collaborate!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={`mailto:${socialLinks.email}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              Send Email
            </a>
            <a 
              href={socialLinks.linkedin}
              className="border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-10 py-4 rounded-xl font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300 text-lg font-inter">
            © 2024 {personalInfo.name}. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
