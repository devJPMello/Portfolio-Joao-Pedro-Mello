import Header from '@/components/organisms/Header'
import Hero from '@/components/organisms/Hero'
import Highlights from '@/components/organisms/Highlights'
import About from '@/components/organisms/About'
import ProjectsSection from '@/components/organisms/ProjectsSection'
import ContributionsSection from '@/components/organisms/ContributionsSection'
import Experience from '@/components/organisms/Experience'
import TechStack from '@/components/organisms/TechStack'
import Contact from '@/components/organisms/Contact'
import Footer from '@/components/organisms/Footer'
import BackToTop from '@/components/molecules/BackToTop'
import { ProjectModalProvider } from '@/contexts/ProjectModalContext'

/** Esqueleto da home: define a ordem das seções (a ordem do menu em data/navigation.ts deve acompanhá-la). */
export default function HomeTemplate() {
  return (
    <ProjectModalProvider>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Highlights />
        <About />
        <ProjectsSection />
        <ContributionsSection />
        <Experience />
        <TechStack />
        <Contact />
        <Footer />
        <BackToTop />
      </main>
    </ProjectModalProvider>
  )
}
