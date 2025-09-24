import React from "react";
import ScrollReveal from "../Animations/ReactBits/ScrollReveal";
import ShinyText from "../Animations/ReactBits/ShinyText";
const FounderNote: React.FC = () => {
  return (
    <section
      id="founder-note"
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      {/* Background "Founder's Note" Text */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          pointerEvents: "none",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <h2
          className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold opacity-90"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "transparent",
            letterSpacing: "0.02em",
            textAlign: "center",
            whiteSpace: "normal",
            wordBreak: "break-word",
            hyphens: "auto",
            WebkitTextStroke: "1px #EEE8D6",
            // textStroke: "1px #FFFFFF",
            lineHeight: "0.9",
            padding: "0 1rem",
          }}
        >
          <ShinyText
            text="FOUNDER'S NOTE"
            disabled={false}
            speed={3}

            // className="text-lg md:text-xl lg:text-2xl leading-relaxed"
          />

          {/* Founder's Note */}
        </h2>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-center">
        {/* Founder Image - Centered */}
        <div className="mb-8">
          <img
            src="/websitehosttemp/images/personimage.png"
            // src="/images/personimage.png"
            alt="Founder - White Eventive"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-lg shadow-2xl mx-auto"
            style={{
              filter: "brightness(1.1) contrast(1.05)",
              // boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.1)",
            }}
          />
        </div>

        {/* Content Below Image */}
        <div className="max-w-4xl mx-auto space-y-6">
          <p
            className="text-lg md:text-xl lg:text-2xl leading-relaxed"
            style={{
              fontFamily: "Aileron, sans-serif",
              color: "#C0C0C0",
              lineHeight: "1.7",
            }}
          >
            "Founded in 2018, White Eventive began not as a business, but as a
            calling — a passion for creating spaces that transform into
            immersive experiences. What started with building events has evolved
            into a pursuit of crafting stories that spark emotion, celebrate
            brand identity, and leave a lasting impact. Every project is
            delivered with precision, creativity, and heart."
          </p>

          {/* <p
            className="text-lg md:text-xl lg:text-2xl leading-relaxed"
            style={{
              fontFamily: "Aileron, sans-serif",
              color: "#C0C0C0",
              lineHeight: "1.7",
            }}
          >
            <ShinyText
              text="Backed by a team of seasoned professionals, we bring years of
            expertise to every event. Our growth is not just in scale, but in
            soul — driven by authenticity and an unwavering focus on client
            satisfaction. At White Eventive, we pride ourselves on delivering
            the best service, curating experiences that resonate. The journey
            continues, and the best is yet to come."
              disabled={false}
              speed={3}
              className="text-lg md:text-xl lg:text-2xl leading-relaxed"
            />
          </p> */}

          <div className="pt-6">
            <p
              className="text-xl md:text-2xl font-semibold"
              style={{
                fontFamily: "Anvers, sans-serif",
                color: "#EEE8D6",
                letterSpacing: "0.05em",
              }}
            >
              <ShinyText
                text="Founder & CEO"
                disabled={false}
                speed={3}
                className="text-lg md:text-xl lg:text-2xl leading-relaxed"
              />
            </p>
            <p
              className="text-lg md:text-xl"
              style={{
                fontFamily: "Anvers, sans-serif",
                color: "#A0A0A0",
              }}
            >
              White Eventive
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;
