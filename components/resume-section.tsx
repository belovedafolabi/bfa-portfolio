import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ResumeSection() {
  return (
    <section id="resume" className="space-y-6 pt-8">
      <h2 className="text-3xl font-bold relative pb-2">
        Resume
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-400"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Education</h3>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Bachelor of Computer Science</h4>
                <Badge variant="outline" className="bg-zinc-800 text-amber-400 border-amber-400">
                  2016-2020
                </Badge>
              </div>
              <p className="text-sm text-zinc-400 mb-2">Tribhuvan University</p>
              <p className="text-sm text-zinc-300">
                Studied computer science with a focus on software development and mobile applications.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Flutter Development Certification</h4>
                <Badge variant="outline" className="bg-zinc-800 text-amber-400 border-amber-400">
                  2020
                </Badge>
              </div>
              <p className="text-sm text-zinc-400 mb-2">Google Developer Academy</p>
              <p className="text-sm text-zinc-300">
                Completed advanced Flutter development certification with focus on cross-platform applications.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Experience */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Experience</h3>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Senior Flutter Developer</h4>
                <Badge variant="outline" className="bg-zinc-800 text-amber-400 border-amber-400">
                  2022-Present
                </Badge>
              </div>
              <p className="text-sm text-zinc-400 mb-2">TechNova Solutions</p>
              <p className="text-sm text-zinc-300">
                Lead Flutter developer responsible for architecting and developing cross-platform mobile applications.
                Implemented state management solutions and optimized app performance.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">Flutter Developer</h4>
                <Badge variant="outline" className="bg-zinc-800 text-amber-400 border-amber-400">
                  2020-2022
                </Badge>
              </div>
              <p className="text-sm text-zinc-400 mb-2">AppWave Technologies</p>
              <p className="text-sm text-zinc-300">
                Developed and maintained multiple Flutter applications. Collaborated with design and backend teams to
                deliver high-quality mobile experiences.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
