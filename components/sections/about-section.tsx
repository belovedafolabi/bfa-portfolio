import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const skills = [
  { 
    id: 1, 
    name: "React",
    imageSrc: "/images/skills/reactjs.svg"
  },
  { 
    id: 2, 
    name: "TypeScript",
    imageSrc: "/images/skills/typescript.svg"
  },
  { 
    id: 3, 
    name: "Mongo DB",
    imageSrc: "/images/skills/mongo.svg"
  },
  { 
    id: 4, 
    name: "Next JS",
    imageSrc: "/images/skills/nextjs.svg"
  },
  { 
    id: 5, 
    name: "Git",
    imageSrc: "/images/skills/git.svg"
  },
  { 
    id: 6, 
    name: "Postman",
    imageSrc: "/images/skills/Postman.svg"
  },
  { 
    id: 7, 
    name: "Slack",
    imageSrc: "/images/skills/slack.svg"
  },
  { 
    id: 8, 
    name: "Tailwind CSS",
    imageSrc: "/images/skills/tailwind.svg"
  }
];

export default function AboutSection() {
  return (
    <>
      {/* About Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold relative pb-2">
          About Me
          <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-gradient rounded-full"></span>
        </h2>
        <p className="text-zinc-300 leading-relaxed text-sm font-normal">
          A passionate Full-Stack Web Developer with expertise in modern React/Next.js ecosystems, 
          responsive UI/UX design, and performant full-stack solutions. Specialized in crafting dynamic 
          marketing platforms with TypeScript, Tailwind CSS, and Framer Motion animations, complemented by robust 
          backend integrations (Node.js, REST APIs, and serverless architectures). Proven experience delivering SEO-optimized, 
          accessibility-focused web experiences with component-driven development and performance-first principles.
        </p>
        <p className="text-zinc-300 leading-relaxed text-sm font-normal">
        If you're seeking a skilled Web Developer to craft performant, modern web experiences that blend technical 
        precision with creative innovation, let's collaborate to build digital solutions that stand out.
        </p>
      </section>

            {/* Skills Section */}
            <section className="space-y-6">
        <h2 className="text-3xl font-bold relative pb-2 mt-7">
          Skills
          <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-gradient rounded-full"></span>
        </h2>

        <div className="overflow-x-hidden group relative py-4">
          <div className="flex animate-marquee flex-nowrap gap-4 group-hover:[animation-play-state:paused]">
            {[...skills, ...skills, ...skills, ...skills, ...skills].map((skill, index) => (
              <div 
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm p-3 rounded-xl hover:shadow-amber transition-shadow duration-300 flex-shrink-0"
              >
                <div className="w-16 h-16 lg:w-24 lg:h-24 relative rounded-xl transform transition-transform duration-300 hover:scale-110">
                  <Image
                    src={skill.imageSrc}
                    alt={skill.name || "Skill icon"}
                    width={96}
                    height={96}
                    className="object-contain p-1.5"
                    quality={100}
                    loading="eager"
                    priority={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I'm Doing Section */}
      <section className="space-y-6 text-white">
        <h2 className="text-3xl font-bold relative pb-2 mt-7">
          What I Do
          <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-gradient rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Web Development */}
          <Card className="bg-zinc-800/50 backdrop-blur-sm border-rounded hover:shadow-amber transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-xl text-amber-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-white font-semibold mb-2">Web Development</h3>
                  <p className="text-white text-xs font-normal">
                    High-quality development of sites at the professional level.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mobile Apps */}
          <Card className="bg-zinc-800/50 backdrop-blur-sm border-rounded hover:shadow-amber transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-xl text-amber-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-white font-semibold mb-2">Mobile Apps</h3>
                  <p className="text-white text-xs font-normal">
                    Professional development of applications for Android and iOS.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* UI/UX Design */}
          <Card className="bg-zinc-800/50 backdrop-blur-sm border-rounded hover:shadow-amber transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-xl text-amber-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 19 7-7 3 3-7 7-3-3z" />
                    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="m2 2 7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-white font-semibold mb-2">UI/UX Design</h3>
                  <p className="text-white text-xs font-normal">
                    The most modern and high-quality design made at a professional level.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Backend Development */}
          <Card className="bg-zinc-800/50 backdrop-blur-sm border-rounded hover:shadow-amber transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-xl text-amber-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                    <line x1="6" x2="6.01" y1="6" y2="6" />
                    <line x1="6" x2="6.01" y1="18" y2="18" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-white font-semibold mb-2">Backend Development</h3>
                  <p className="text-white text-xs font-normal">
                    High-performance backend services designed for scalability and seamless user experience.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
