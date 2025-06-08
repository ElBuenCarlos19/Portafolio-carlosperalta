import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Certificates } from "@/components/certificates"
import { SpotifyPlaylist } from "@/components/spotify-playlist"
import { Contact } from "@/components/contact"
import { LoadingScreen } from "@/components/loading-screen"
import { getDictionary } from "@/lib/i18n"

export default async function Home({
  params,
}: {
  params: Promise<{ language: string }>
}) {
  const { language } = await params
  const dict = await getDictionary(language)

  return (
    <>
      <main className="min-h-screen bg-dark">
        <Navbar language={language} dict={dict} />
        <Hero dict={dict} />
        <About dict={dict} />
        <Projects dict={dict} />
        <Certificates dict={dict} />
        <SpotifyPlaylist dict={dict} />
        <Contact dict={dict} />
      </main>
    </>
  )
}

export function generateStaticParams() {
  return [{ language: "es" }, { language: "en" }]
}
