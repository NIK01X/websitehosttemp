import React from "react";

const Projects: React.FC = () => {
  const items = [
    {
      title: "Project One",
      description:
        "High-impact marketing site with complex animations and blazing performance.",
    },
    {
      title: "Project Two",
      description:
        "E-commerce revamp focused on accessibility, conversions, and modern UX.",
    },
    {
      title: "Project Three",
      description:
        "Interactive data visualization dashboard with realtime updates.",
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Projects
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((p) => (
            <div key={p.title} className="rounded-xl border p-6 bg-card/40">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm/6 text-muted-foreground">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
