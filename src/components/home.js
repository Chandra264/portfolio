"use client";
import { motion } from "framer-motion";
// import { useRouter } from 'next/router';

export default function Home() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardStyle = {
    background:
      "linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))",
    borderRadius: "24px",
    padding: "2.5rem",
    boxShadow:
      "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    color: "#f8fafc",
    maxWidth: "1000px",
    margin: "2rem auto",
    position: "relative",
    overflow: "hidden",
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse at top, #1e1b4b 0%, #0f0f23 50%, #000000 100%)",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        position: "relative",
        padding: "2rem",
        overflow: "hidden",
      }}
    >
      {/* Animated background elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "15%",
          width: "350px",
          height: "350px",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "70%",
          width: "250px",
          height: "250px",
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          animation: "pulse 6s ease-in-out infinite",
        }}
      />

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(20px, -20px) rotate(120deg);
          }
          66% {
            transform: translate(-10px, 10px) rotate(240deg);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.15;
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header with Navigation Style */}
        <motion.div
          variants={itemVariants}
          style={
            {
              // display: "flex",
              // justifyContent: "space-between",
              // alignItems: "center",
              // marginBottom: "3rem",
              // padding: "1rem 2rem",
              // background: "rgba(255, 255, 255, 0.05)",
              // borderRadius: "50px",
              // backdropFilter: "blur(10px)",
              // border: "1px solid rgba(255, 255, 255, 0.1)",
            }
          }
        >
          {/* <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", background: "linear-gradient(45deg, #3b82f6, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Chandra Portfolio
          </h1>
          <div style={{ display: "flex", gap: "1rem" }}>
            {["Home", "Resume", "Projects"].map((item) => (
              <div
                key={item}
                style={{
                  padding: "0.5rem 1.5rem",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "25px",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                {item}
              </div>
            ))}
          </div> */}
        </motion.div>

        {/* Profile Section */}
        <motion.div
          variants={itemVariants}
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "-10px",
                background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
                borderRadius: "50%",
                animation: "float 4s ease-in-out infinite",
                filter: "blur(8px)",
                opacity: 0.7,
              }}
            />
            <img
              src={'./chandra.jpg'}
              alt="Chandra Reddy"
              width="180"
              height="180"
              style={{
                borderRadius: "50%",
                border: "4px solid rgba(255, 255, 255, 0.2)",
                objectFit: "cover",
                position: "relative",
                zIndex: 1,
              }}
            />
          </div>

          <motion.h1
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              background:
                "linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
            whileHover={{ scale: 1.05 }}
          >
            Chandra
          </motion.h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "1.2rem",
              fontWeight: "500",
              background: "rgba(255, 255, 255, 0.05)",
              padding: "0.75rem 2rem",
              borderRadius: "50px",
              display: "inline-block",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            Frontend Engineer | React.js | UI Enthusiast
          </p>
        </motion.div>

        {/* Profile Summary */}
        <motion.section
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          style={{
            ...cardStyle,
            background:
              "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)",
          }}
        >
          <div
            className="shimmer"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              borderRadius: "24px 24px 0 0",
            }}
          />
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
              background: "linear-gradient(135deg, #ffffff, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Profile Summary
          </h2>
          <p
            style={{
              lineHeight: "1.8",
              fontSize: "1.1rem",
              color: "#e2e8f0",
              fontWeight: "400",
            }}
          >
            A highly skilled Frontend Developer with experience in building
            scalable, responsive, and pixel-perfect web interfaces. I specialize
            in JavaScript, React.js, Redux, and TypeScript. I'm passionate about
            turning design into functional UI/UX with strong attention to
            performance and clean architecture.
          </p>
        </motion.section>

        {/* Core Competencies */}
        <motion.section
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          style={{
            ...cardStyle,
            background:
              "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)",
          }}
        >
          <div
            className="shimmer"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              borderRadius: "24px 24px 0 0",
            }}
          />
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
              background: "linear-gradient(135deg, #ffffff, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Core Competencies
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              "UI/UX Design Implementation",
              "Component-based Architecture using React",
              "State Management with Redux and Redux-Toolkit",
              "Micro Frontends and Modular Development",
              "Agile Methodology & Story Grooming",
              "Reusable Component Libraries",
              "Frontend Testing using Jest & RTL",
              "Responsive Web Development",
            ].map((skill, index) => (
              <motion.div
                key={index}
                style={{
                  padding: "1rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#e2e8f0",
                  fontSize: "0.95rem",
                  transition: "all 0.3s ease",
                }}
                whileHover={{
                  background: "rgba(255, 255, 255, 0.1)",
                  scale: 1.05,
                }}
              >
                • {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Professional Experience */}
        <motion.section
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          style={{
            ...cardStyle,
            background:
              "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)",
          }}
        >
          <div
            className="shimmer"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              borderRadius: "24px 24px 0 0",
            }}
          />
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
              background: "linear-gradient(135deg, #ffffff, #10b981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Professional Experience
          </h2>
          <div
            style={{
              padding: "1.5rem",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: "600",
                color: "#3b82f6",
                marginBottom: "0.5rem",
              }}
            >
              Associate Software Developer
            </h3>
            <p
              style={{
                color: "#10b981",
                fontSize: "1.1rem",
                fontWeight: "500",
              }}
            >
              Tata Consultancy Services
            </p>
          </div>
        </motion.section>

        {/* Technology Stack */}
        <motion.section
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          style={{
            ...cardStyle,
            background:
              "linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)",
          }}
        >
          <div
            className="shimmer"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              borderRadius: "24px 24px 0 0",
            }}
          />
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
              background: "linear-gradient(135deg, #ffffff, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Skills & Technologies
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              lineHeight: "1.8",
              fontSize: "1rem",
            }}
          >
            {[
              {
                label: "Frontend:",
                value: "HTML5, CSS3, Sass, Bootstrap, JavaScript, TypeScript",
              },
              {
                label: "Libraries:",
                value: "React.js, Redux, Redux-Thunk, Redux Toolkit",
              },
              { label: "Testing:", value: "Jest with React Testing Library" },
              {
                label: "Other Tools:",
                value: "GraphQL, Material UI, VS Code, Sublime",
              },
              {
                label: "Patterns:",
                value: "Singleton, Component Reusability, Modularization",
              },
              { label: "OS:", value: "Windows, macOS" },
            ].map((tech, index) => (
              <div
                key={index}
                style={{
                  padding: "1rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <span style={{ fontWeight: "600", color: "#3b82f6" }}>
                  {tech.label}
                </span>{" "}
                <span style={{ color: "#e2e8f0" }}>{tech.value}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Academic Details */}
        <motion.section
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          style={{
            ...cardStyle,
            background:
              "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)",
          }}
        >
          <div
            className="shimmer"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              borderRadius: "24px 24px 0 0",
            }}
          />
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
              background: "linear-gradient(135deg, #ffffff, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Education
          </h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            {[
              {
                degree: "B.Tech in Electronics and communication Engineering",
                institution:
                  "Chadalawda Ramanamma Engineering College, Tirupati",
              },
              {
                degree: "Intermediate",
                institution: "Narayana junior college, Ananthapur",
              },
              {
                degree: "SSC",
                institution: "Z.P. High School, Gugudu, Ananthapur",
              },
            ].map((edu, index) => (
              <div
                key={index}
                style={{
                  padding: "1.5rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    color: "#8b5cf6",
                    marginBottom: "0.5rem",
                  }}
                >
                  {edu.degree}
                </h3>
                <p style={{ color: "#10b981", fontSize: "1rem" }}>
                  {edu.institution}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "3rem",
            marginTop: "3rem",
          }}
        >
          <div
            style={{
              padding: "1.5rem 3rem",
              background: "linear-gradient(135deg, #10b981, #3b82f6)",
              color: "white",
              borderRadius: "50px",
              fontWeight: "bold",
              fontSize: "1.2rem",
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
              cursor: "pointer",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              className="shimmer"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: "50px",
              }}
            />
            🌟 Let's Collaborate and Build Engaging Web Experiences!
          </div>
        </motion.div>

        {/* Footer */}
        {/* <motion.footer
          variants={itemVariants}
          style={{
            textAlign: "center",
            padding: "2rem",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "24px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <p style={{ color: "#64748b", marginBottom: "1rem" }}>
            © 2025 Chandra. All rights reserved.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
            {[
              { name: "Email", color: "#10b981" },
              { name: "LinkedIn", color: "#3b82f6" },
              { name: "GitHub", color: "#8b5cf6" }
            ].map((link) => (
              <motion.a
                key={link.name}
                href="#"
                style={{
                  color: link.color,
                  textDecoration: "none",
                  fontWeight: "500",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  border: `1px solid ${link.color}30`,
                  transition: "all 0.3s ease",
                }}
                whileHover={{
                  scale: 1.05,
                  background: `${link.color}20`,
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.footer> */}
      </main>
    </motion.div>
  );
}
