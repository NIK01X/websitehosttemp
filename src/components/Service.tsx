import React from "react";

const Service: React.FC = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "Modern, responsive design systems that communicate your brand clearly.",
    },
    {
      title: "Web Development",
      description:
        "Robust, maintainable frontends with strong performance and accessibility.",
    },
    {
      title: "SEO & Analytics",
      description:
        "Technical SEO and analytics setup to measure and grow effectively.",
    },
  ];

  return (
    <section id="service" className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Service
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border p-6">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm/6 text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
