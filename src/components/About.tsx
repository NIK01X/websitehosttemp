import React from "react";

const About: React.FC = () => {
  return (
    <section id="about">
      <div
        className="mx-auto max-w-5xl px-4"
        style={{ height: "100vh", backgroundColor: "#F1F5F1" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About</h2>
        <p className="mt-4 text-base/7 text-muted-foreground">
          We are a professional studio focused on crafting performant,
          accessible, and visually engaging web experiences. Our process blends
          design thinking with solid engineering to deliver results that move
          your business forward.
        </p>
      </div>
    </section>
  );
};

export default About;
