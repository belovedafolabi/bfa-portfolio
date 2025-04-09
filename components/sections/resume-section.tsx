export default function ResumeSection() {
  return (
    <section className="space-y-8 p-6">
      <h2 className="text-3xl font-bold relative pb-2">
        Resume
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-gradient rounded-full"></span>
      </h2>

      {/* Education Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-zinc-800 rounded-lg flex items-center justify-center">
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
              <h4 className="font-semibold text-white">Nibevana College of Management And Information Technology</h4>
              <p className="text-amber-400">
                Bachelor of Science in Computer Science and Information Technology (BSc.CSIT)
              </p>
              <div className="flex items-center text-zinc-400 text-sm">
                <span className="bg-zinc-800 px-2 py-0.5 rounded-full text-amber-400">2016 - 2020</span>
                <span className="mx-2">•</span>
                <span>4 years</span>
              </div>
            </div>
          </div>

          {/* Education Item 2 */}
          <div className="relative">
            <div className="absolute -left-10 top-1.5 w-3 h-3 rounded-full bg-amber-gradient"></div>
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Greenland International College</h4>
              <p className="text-zinc-300 text-xs font-normal">+2 Science</p>
              <div className="flex items-center text-zinc-400 text-sm">
                <span className="bg-zinc-800 px-2 py-0.5 rounded-full text-amber-400">2015 - 2017</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-zinc-800 rounded-lg flex items-center justify-center">
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
              <h4 className="font-semibold text-white">Mid-Level Flutter Developer</h4>
              <p className="text-amber-400">TechNova Solutions</p>
              <div className="flex items-center text-zinc-400 text-sm">
                <span className="bg-zinc-800 px-2 py-0.5 rounded-full text-amber-400">Aug 2022 - Present</span>
                <span className="mx-2">•</span>
                <span>2 years</span>
              </div>
              <ul className="space-y-2 text-zinc-300 list-disc pl-5 text-xs font-normal leading-relaxed">
                <li>Developed new features and implemented UI designs into code using Flutter.</li>
                <li>Designed and optimized custom widgets focusing on reusability, features and data service.</li>
                <li>Managed complex state management using BLoC pattern.</li>
                <li>Implemented RESTful API integration using the HTTP package.</li>
                <li>Integrated APIs for seamless data communication and backend functionality.</li>
                <li>Implemented payment gateway integration like PayPal, Stripe, and in-app purchases.</li>
                <li>Conducted code reviews and ensured code quality and best practices.</li>
                <li>Participated in team meetings to discuss new features and project updates.</li>
                <li>Fixed and solved bugs/issues and user-friendly experience throughout the app.</li>
                <li>Performed testing and deployed the app in Playstore and Appstore.</li>
              </ul>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="relative">
            <div className="absolute -left-10 top-1.5 w-3 h-3 rounded-full bg-amber-gradient"></div>
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Flutter Developer</h4>
              <p className="text-amber-400">AppWave Technologies</p>
              <div className="flex items-center text-zinc-400 text-sm">
                <span className="bg-zinc-800 px-2 py-0.5 rounded-full text-amber-400">Oct 2020 - Aug 2022</span>
                <span className="mx-2">•</span>
                <span>1 yr 10 mos</span>
              </div>
              <ul className="space-y-2 text-zinc-300 list-disc pl-5 text-xs font-normal leading-relaxed">
                <li>Developed Flutter apps and implemented UI designs to match the intended user interface.</li>
                <li>Implemented state management solutions like Provider and Bloc for efficient data handling.</li>
                <li>Established strong partnerships to ensure a smooth and engaging user experience.</li>
                <li>Supported other team members if blocked by developing solutions to common problems.</li>
                <li>Maintained code quality by responding to peer review and performance.</li>
                <li>Wrote clean, maintainable, and testable code following best practices.</li>
                <li>Provided a wide selection of support libraries to ensure backward compatibility.</li>
                <li>
                  Collaborated with backend developers, designers, and cross-functional teams to deliver reliable,
                  high-quality solutions.
                </li>
                <li>Performed code review and deployed the app in Playstore and Appstore.</li>
              </ul>
            </div>
          </div>

          {/* Experience Item 3 */}
          <div className="relative">
            <div className="absolute -left-10 top-1.5 w-3 h-3 rounded-full bg-amber-gradient"></div>
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Junior Developer Intern</h4>
              <p className="text-amber-400">Entermedia Nepal</p>
              <div className="flex items-center text-zinc-400 text-sm">
                <span className="bg-zinc-800 px-2 py-0.5 rounded-full text-amber-400">May 2020 - Sep 2020</span>
                <span className="mx-2">•</span>
                <span>5 mos</span>
              </div>
              <ul className="space-y-2 text-zinc-300 list-disc pl-5 text-xs font-normal leading-relaxed">
                <li>
                  Assisted in developing and maintaining Flutter applications, ensuring seamless functionality on both
                  Android and iOS platforms.
                </li>
                <li>
                  Participated in the full lifecycle of visually appealing UI designs that aligned with client
                  requirements and design principles.
                </li>
                <li>
                  Collaborated with cross-functional teams, including back-end developers and designers, to improve user
                  experience.
                </li>
                <li>
                  Gained hands-on experience in debugging, troubleshooting, and refining app features to improve user
                  experience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 transition-colors border-rounded"
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
            className="lucide lucide-download mr-2"
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
