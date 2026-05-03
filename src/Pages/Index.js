import { lazy, Suspense, useRef, useState, useEffect } from 'react'
import './Index.css'

const Topbar = lazy(() => import('../components/Topbar/Topbar.js'))
const Inicio = lazy(() => import('../Sections/Inicio/Inicio.js'))
const Curriculo = lazy(() => import('../Sections/Curriculo/Curriculo.js'))
const Sobre = lazy(() => import('../Sections/Sobre/Sobre.js'))
const Portfolio = lazy(() => import('../Sections/Portfolio/Portfolio.js'))
const Skills = lazy(() => import('../Sections/Skills/Skills.js'))
const Contato = lazy(() => import('../Sections/Contato/Contato.js'))
const Footer = lazy(() => import('../Sections/Footer/Footer.js'))

function ScrollLoader({ children, fallback = null }) {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`section-scroll-frame ${
        visible ? 'section-scroll-frame--visible' : ''
      }`}
    >
      {visible && <Suspense fallback={fallback}>{children}</Suspense>}
    </div>
  )
}

export default function Index() {
  return (
    <div className="page-group">
      <Suspense fallback={null}>
        <Topbar />
      </Suspense>

      <ScrollLoader >
        <Inicio />
      </ScrollLoader>

      <ScrollLoader>
        <Curriculo />
      </ScrollLoader>

      <ScrollLoader>
        <Sobre />
      </ScrollLoader>

      <ScrollLoader>
        <Portfolio />
      </ScrollLoader>

      <ScrollLoader>
        <Skills />
      </ScrollLoader>

      <ScrollLoader>
        <Contato />
      </ScrollLoader>

      <ScrollLoader>
        <Footer />
      </ScrollLoader>
    </div>
  )
}
