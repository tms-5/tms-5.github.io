import { lazy, Suspense, useRef, useState, useEffect } from 'react'
import '../Assets/Utilitarios/Utilitarios.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Index.css'

const Topbar = lazy(() => import('../Assets/Topbar/Topbar.js'))
const Inicio = lazy(() => import('../Assets/Inicio/Inicio.js'))
const Curriculo = lazy(() => import('../Assets/Curriculo/Curriculo.js'))
const Sobre = lazy(() => import('../Assets/Sobre/Sobre.js'))
const Portfolio = lazy(() => import('../Assets/Portfolio/Portfolio.js'))
const Skills = lazy(() => import('../Assets/Skills/Skills.js'))
const Contato = lazy(() => import('../Assets/Contato/Contato.js'))
const Footer = lazy(() => import('../Assets/Footer/Footer.js'))

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
    <div ref={ref}>
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
