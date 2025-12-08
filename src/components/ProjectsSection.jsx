import { ArrowRight, ExternalLink, Github } from "lucide-react";

// --- Projects Array Without Images ---
const projects = [
  {
    id: 1,
    title: "Buildum – SaaS Platform (PFE)",
    description:
      "A full SaaS platform developed during my graduation project with secure REST APIs, data validation, dashboards, and improved UX/UI. Includes Dockerized deployment and a full CI/CD pipeline.",
    tags: ["Node.js", "React", "MongoDB", "Express", "Docker", "CI/CD"],
    demoUrl: "#",
    githubUrl: "https://github.com/mariemkhammar/Buildum",
  },
  {
    id: 2,
    title: "E-Commerce Web App",
    description:
      "An interactive e-commerce application built during my internship at LAB-IT with product management, authentication, shopping cart, and frontend integration.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    demoUrl: "#",
    githubUrl: "https://github.com/mariemkhammar/Ecommerce-Platform",
  },
  {
    id: 3,
    title: "LLM Content Analysis & Recommendation System",
    description:
      "An intelligent system for analyzing text and multimedia content using LLM models (PyTorch) to generate personalized recommendations. Includes a Node.js backend and MongoDB integration.",
    tags: ["Python", "PyTorch", "Node.js", "MongoDB", "AI"],
    demoUrl: "#",
    githubUrl: "https://github.com/mariemkhammar",
  },
  {
    id: 4,
    title: "DevOps Monitoring & CI/CD Automation",
    description:
      "A complete DevOps academic project including CI/CD pipelines, Dockerized deployment, log monitoring, GitHub Actions automation, and secure workflows.",
    tags: ["Docker", "GitHub Actions", "Terraform", "Monitoring"],
    demoUrl: "#",
    githubUrl: "https://github.com/mariemkhammar/DevOps-CICD",
  },
  {
    id: 5,
    title: "CV Builder – DevOps Web App",
    description:
      "A web application that generates resumes from user inputs with automated Docker deployment and continuous integration via GitHub Actions.",
    tags: ["React", "Node.js", "Docker", "CI/CD"],
    demoUrl: "#",
    githubUrl: "https://github.com/mariemkhammar/CV-Builder",
  },
  {
    id: 6,
    title: "SmartCooker – AI Recipe Generator",
    description:
      "An AI-powered recipe generator based on a fine-tuned T5 model, built with Streamlit and MongoDB to create contextual recipe ideas from ingredients.",
    tags: ["Python", "AI", "Streamlit", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/mariemkhammar/SmartCooker",
  },
  {
    id: 7,
    title: "Travel Recommender System",
    description:
      "A smart recommendation engine that suggests travel destinations based on user preferences, weather, and budget using ML techniques.",
    tags: ["Python", "Machine Learning", "Streamlit", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/mariemkhammar/TravelRecommender",
  },
  {
    id: 8,
    title: "Taskify – To-Do List App",
    description:
      "A clean and simple productivity app built with vanilla JavaScript, offering dynamic task management and local storage support.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://mariemkhammar.github.io/Taskify/",
    githubUrl: "https://github.com/mariemkhammar/Taskify",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted focusing on performance, scalability, and clean architecture.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border rounded-xl p-6 shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/50 cursor-pointer"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              <div className="flex space-x-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <ExternalLink size={20} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Maryemkhammar"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
