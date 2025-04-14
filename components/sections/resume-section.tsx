export default function ResumeSection() {
  return (
    <section className="space-y-8 p-2 lg:p-6">
      <h2 className="text-3xl font-bold relative pb-2">
        Resume
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-gradient rounded-full"></span>
      </h2>

      {/* Experience Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="
            w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center relative 
            before:absolute before:inset-0 before:rounded-lg before:bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.15)_50%,transparent_70%)]
            before:opacity-50 before:pointer-events-none
          ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-amber-400"
            >
              <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white">Experience</h3>
        </div>

        <div className="ml-3 pl-8 border-l border-zinc-800 space-y-8">
          {/* Experience Item 1 */}
          <div className="relative">
            <div className="absolute -left-10 top-1.5 w-3 h-3 rounded-full bg-amber-gradient"></div>
            <div className="space-y-3">
              <h4 className="font-semibold text-white">CEO & UI/UX Designer</h4>
              <p className="text-amber-400">TRIETIX LIMITED</p>
              <div className="flex items-center text-zinc-400 text-sm">
                <span className="bg-zinc-800 px-2 py-0.5 rounded-full text-amber-400">Jan 2023 - Present</span>
                <span className="mx-2">•</span>
                <span>3 years</span>
              </div>
              <ul className="space-y-2 text-zinc-300 list-disc pl-5 text-xs font-normal leading-relaxed">
                <li><b>Leadership:</b> Spearheaded company vision and product strategy, scaling annual revenue by 62% through client acquisition and operational optimization.</li>
                <li><b>UI/UX Design:</b> Architected 15+ high-conversion interfaces, improving user engagement by 40% for enterprise SaaS platforms</li>
                <li><b>Design Systems:</b> Created reusable component libraries adopted across 8+ products, reducing design-dev handoff time by 25%</li>
                <li><b>Client Solutions:</b> Led UI redesigns for 12+ B2B/B2C clients, achieving 95%+ client retention through iterative prototyping and user testing</li>
              </ul>
            </div>
          </div>
          {/* Experience Item 1 */}
          <div className="relative">
            <div className="absolute -left-10 top-1.5 w-3 h-3 rounded-full bg-amber-gradient"></div>
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Learning Management System Developer (Intern) </h4>
              <p className="text-amber-400">Cagewox Dot Net Ltd</p>
              <div className="flex items-center text-zinc-400 text-sm">
                <span className="bg-zinc-800 px-2 py-0.5 rounded-full text-amber-400">July 2023 - Oct 2023</span>
                <span className="mx-2">•</span>
                <span>4 mos</span>
              </div>
              <ul className="space-y-2 text-zinc-300 list-disc pl-5 text-xs font-normal leading-relaxed">
                <li>Collaborated with the IT team to set up and integrate the Moodle LMS solution into the Nigerian educational ecosystem.</li>
                <li>Worked on the setup of a routine backup for the system for each iteration of the deployed solution on the client end.</li>
                <li>Facilitated the training of end users of the LMS on the proper use of the solution.</li>
              </ul>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="relative">
            <div className="absolute -left-10 top-1.5 w-3 h-3 rounded-full bg-amber-gradient"></div>
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Robotics Researcher (Remote)</h4>
              <p className="text-amber-400">Dumena Educational Technologies</p>
              <div className="flex items-center text-zinc-400 text-sm">
                <span className="bg-zinc-800 px-2 py-0.5 rounded-full text-amber-400">Nov 2022 - Feb 2023</span>
                <span className="mx-2">•</span>
                <span>4 mos</span>
              </div>
              <ul className="space-y-2 text-zinc-300 list-disc pl-5 text-xs font-normal leading-relaxed">
                <li>Designed and prototyped IoT-enabled robotic systems using Arduino, achieving 25% improvement in automated task efficiency.</li>
                <li>Developed C++ firmware for real-time hardware-software interface control, integrating ultrasonic sensors and servo motor arrays.</li>
                <li>Collaborated on 3 robotic automation projects including autonomous surveillance robot deployment (30% manual intervention reduction).</li>
                <li>Conducted embedded system troubleshooting and optimization, reducing signal latency by 15% through firmware updates.</li>
              </ul>
            </div>
          </div>

          {/* Experience Item 3 */}
          <div className="relative">
            <div className="absolute -left-10 top-1.5 w-3 h-3 rounded-full bg-amber-gradient"></div>
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Robotics and Mechatronics Researcher Intern</h4>
              <p className="text-amber-400">Dumena Educational Technologies</p>
              <div className="flex items-center text-zinc-400 text-sm">
                <span className="bg-zinc-800 px-2 py-0.5 rounded-full text-amber-400">July 2022 - Oct 2022</span>
                <span className="mx-2">•</span>
                <span>4 mos</span>
              </div>
              <ul className="space-y-2 text-zinc-300 list-disc pl-5 text-xs font-normal leading-relaxed">
                <li>
                  Conducted research and troubleshooting for an already existing faulty Arduino based drone.
                </li>
                <li>
                  Conducted the research and development for various Arduino based systems with an aim to pass on
                  the knowledge to kids between 10 -18 years.
                </li>
                <li>
                  Developed the curriculum for the Robotics Summer Camp .
                </li>
              </ul>
            </div>
          </div>

          {/* Experience Item 3 */}
          <div className="relative">
            <div className="absolute -left-10 top-1.5 w-3 h-3 rounded-full bg-amber-gradient"></div>
            <div className="space-y-3">
              <h4 className="font-semibold text-white"></h4>
              <p className="text-amber-400"></p>
              <div className="flex items-center text-zinc-400 text-sm">
                <span className="bg-zinc-800 px-2 py-0.5 rounded-full text-amber-400"></span>
                <span className="mx-2"></span>
                <span></span>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* Education Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="
            w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center relative 
            before:absolute before:inset-0 before:rounded-lg before:bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.15)_50%,transparent_70%)]
            before:opacity-50 before:pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-amber-400"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white">Education</h3>
        </div>

        <div className="ml-3 pl-8 border-l border-zinc-800 space-y-8">
          {/* Education Item 1 */}
          <div className="relative">
            <div className="absolute -left-10 top-1.5 w-3 h-3 rounded-full bg-amber-gradient"></div>
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Afe Babalola University Ado-Ekiti (ABUAD)</h4>
              <p className="text-amber-400">
                Bachelor of Engineering in Mechatronics Engineering (BEng.Mechatronics)
              </p>
              <div className="flex items-center text-zinc-400 text-sm">
                <span className="bg-zinc-800 px-2 py-0.5 rounded-full text-amber-400">2021 - 2025</span>
                <span className="mx-2">•</span>
                <span>4 years</span>
              </div>
            </div>
          </div>

          {/* Education Item 2 */}
          <div className="relative">
            <div className="absolute -left-10 top-1.5 w-3 h-3 rounded-full bg-amber-gradient"></div>
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Model Skills Training Centre (MSTC - ITF)</h4>
              <p className="text-amber-400">
                National Diploma on Automation and Mechatronics Technology (ND.Mechatronics)
              </p>
              <div className="flex items-center text-zinc-400 text-sm">
                <span className="bg-zinc-800 px-2 py-0.5 rounded-full text-amber-400">2019 - 2021</span>
                <span className="mx-2">•</span>
                <span>3 years</span>
              </div>
            </div>
          </div>

          {/* Education Item 3 */}
          <div className="relative">
            <div className="absolute -left-10 top-1.5 w-3 h-3 rounded-full bg-amber-gradient"></div>
            <div className="space-y-2">
              <h4 className="font-semibold text-white"></h4>
              <p className="text-amber-400">
                
              </p>
              <div className="flex items-center text-zinc-400 text-sm">
                <span className="bg-zinc-800 px-2 py-0.5 rounded-full text-amber-400"></span>
                <span className="mx-2"></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download CV Section */}
      <div className="flex justify-center mt-8">
        <a
          href="/docs/resume.pdf"
          download="Beloved_Feranmi_Afolabi_Resume.pdf"
          className="inline-flex items-center px-4 py-2 rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 transition-colors duration-300 border border-zinc-600 hover:border-amber-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
          Download CV
        </a>
      </div>
    </section>
  )
}
