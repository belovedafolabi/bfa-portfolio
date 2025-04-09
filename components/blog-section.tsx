import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"

export default function BlogSection() {
  const posts = [
    {
      title: "Best Practices for Flutter State Management",
      date: "April 15, 2023",
      excerpt:
        "Explore different state management solutions in Flutter and learn which one is best for your project needs.",
    },
    {
      title: "Creating Custom Animations in Flutter",
      date: "March 22, 2023",
      excerpt: "Learn how to create beautiful, performant custom animations in Flutter using the Animation Controller.",
    },
    {
      title: "Integrating Firebase with Flutter",
      date: "February 10, 2023",
      excerpt:
        "A comprehensive guide to setting up Firebase in your Flutter application for authentication, database, and more.",
    },
  ]

  return (
    <section id="blog" className="space-y-6 pt-8">
      <h2 className="text-3xl font-bold relative pb-2">
        Blog
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-amber-400"></span>
      </h2>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-amber-400/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center text-zinc-400 text-sm mb-2">
                <CalendarDays className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <CardTitle className="text-xl">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-300">{post.excerpt}</p>
              <a href="#" className="inline-block mt-4 text-amber-400 hover:text-amber-300 text-sm font-medium">
                Read More →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
