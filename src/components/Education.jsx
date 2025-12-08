
export const EducationSection = () => {
  const education = [
    {
      degree: "Master en Génie Logiciel et Systèmes d’Information",
      school: "ISIMM Monastir",
      year: "2024 – En cours",
      
    },
    {
      degree: "Licence en Informatique – Génie Logiciel",
      school: "ISIMM Monastir",
      year: "2021 – 2024",
     
    },
    {
      degree: "Baccalauréat en Informatique",
      school: "Lycée Secondaire de Jammel",
      year: "2020",
     
    },
  ];

  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My <span className="text-primary">Education</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="group bg-card border rounded-xl p-6 shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/50 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                {item.degree}
              </h3>

              <p className="text-sm font-medium text-muted-foreground mb-1">
                {item.school}
              </p>

              <p className="text-xs text-muted-foreground mb-4">{item.year}</p>

              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
