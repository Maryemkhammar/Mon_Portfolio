export const WorkExperience = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Work Experience</h2>

      <div className="space-y-8 max-w-3xl mx-auto">

        {/* Final Year Project – LAB-IT Sousse */}
        <div className="p-6 rounded-2xl shadow-lg border border-border hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-2xl font-semibold">Web Development Intern – Final Year Project</h3>
          <p className="text-muted-foreground italic">Feb 2024 – Jun 2024 | LAB-IT Sousse</p>
          <ul className="list-disc pl-6 mt-3 space-y-1 text-muted-foreground">
            <li>Developed backend APIs using Node.js and MongoDB for a SaaS property management application.</li>
            <li>Implemented security measures, data validation, and optimized internal workflows.</li>
            <li>Automated deployment using Docker and CI/CD pipelines (GitHub Actions).</li>
          </ul>
        </div>

        {/* Summer Internship – LAB-IT Sousse */}
        <div className="p-6 rounded-2xl shadow-lg border border-border hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-2xl font-semibold">Junior Web Developer Intern – Summer Internship</h3>
          <p className="text-muted-foreground italic">Jun 2023 – Aug 2023 | LAB-IT Sousse</p>
          <ul className="list-disc pl-6 mt-3 space-y-1 text-muted-foreground">
            <li>Developed REST APIs and integrated frontend components for an e-commerce website.</li>
            <li>Optimized backend performance and improved component reusability.</li>
            <li>Worked with Node.js and modern JavaScript in an Agile development environment.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};