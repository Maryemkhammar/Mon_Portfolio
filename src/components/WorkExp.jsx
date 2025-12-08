export const WorkExperience = () => {
return (
<section id="experience" className="py-20 px-6 md:px-20">
<h2 className="text-4xl font-bold mb-10 text-center">Work Experience</h2>


<div className="space-y-8 max-w-3xl mx-auto">
{/* PFE – LAB-IT Sousse */}
<div className="p-6 rounded-2xl shadow-lg border border-border hover:scale-[1.02] transition-transform duration-300">
<h3 className="text-2xl font-semibold">Stagiaire en Développement Web – Projet de Fin d’Études</h3>
<p className="text-muted-foreground italic">Fév 2024 – Juin 2024 | LAB-IT Sousse</p>
<ul className="list-disc pl-6 mt-3 space-y-1 text-muted-foreground">
<li>Développement d’APIs backend avec Node.js et MongoDB pour une application SaaS de gestion de biens.</li>
<li>Mise en place de la sécurité, validation des données et optimisation des workflows internes.</li>
<li>Déploiement automatisé via Docker & CI/CD (GitHub Actions).</li>
</ul>
</div>


{/* Stage été – LAB-IT Sousse */}
<div className="p-6 rounded-2xl shadow-lg border border-border hover:scale-[1.02] transition-transform duration-300">
<h3 className="text-2xl font-semibold">Stagiaire Développeur Web Junior – Stage d’été</h3>
<p className="text-muted-foreground italic">Juin 2023 – Août 2023 | LAB-IT Sousse</p>
<ul className="list-disc pl-6 mt-3 space-y-1 text-muted-foreground">
<li>Développement de REST APIs et intégration du frontend pour un site e‑commerce.</li>
<li>Optimisation des performances backend et amélioration de la réutilisabilité des composants.</li>
<li>Travail avec Node.js et JavaScript moderne dans un environnement Agile.</li>
</ul>
</div>
</div>
</section>
);
};